from transformers import AutoTokenizer, AutoModelForCausalLM
import torch
from typing import Dict, Any

class ChatbotService:
    def __init__(self):
        # Initialize the model and tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
        self.model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")
        self.context = {}
        
    async def process_message(self, user_id: str, message: str) -> str:
        # Encode user input
        input_ids = self.tokenizer.encode(message + self.tokenizer.eos_token, return_tensors='pt')
        
        # Get conversation history for this user
        chat_history = self.context.get(user_id, [])
        
        # Append new input to history
        if chat_history:
            input_ids = torch.cat([chat_history, input_ids], dim=-1)
            
        # Generate response
        attention_mask = torch.ones(input_ids.shape, dtype=torch.long)
        output_ids = self.model.generate(
            input_ids,
            attention_mask=attention_mask,
            max_length=1000,
            pad_token_id=self.tokenizer.eos_token_id,
            temperature=0.7,
            do_sample=True
        )
        
        # Update context
        self.context[user_id] = output_ids
        
        # Decode and return response
        response = self.tokenizer.decode(output_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)
        return response

    def get_scheme_info(self, query: str) -> Dict[str, Any]:
        # Add logic to fetch relevant scheme information
        return {
            "schemes": [
                {
                    "name": "Example Scheme",
                    "eligibility": "Example eligibility criteria",
                    "benefits": "Example benefits"
                }
            ]
        }

# src/pages/api/chatbot.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .chatbot_service import ChatbotService

app = FastAPI()
chatbot = ChatbotService()

class Message(BaseModel):
    message: str
    user_id: str = "default_user"

@app.post("/api/chatbot")
async def process_message(message: Message):
    try:
        response = await chatbot.process_message(message.user_id, message.message)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))