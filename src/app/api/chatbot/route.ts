import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Define types
interface ChatMessage {
  message: string;
  userId?: string;
}

// Predefined context for government schemes
const SYSTEM_PROMPT = `You are a Government Scheme Assistant, specifically designed to help citizens understand and access various government schemes and benefits. Your responses should be:
1. Accurate and up-to-date
2. Easy to understand
3. Focused on practical steps
4. Include eligibility criteria when relevant
5. Mention required documents when applicable`;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ChatMessage = await request.json();
    
    if (!body.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Create a chat model instance
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Start a chat session
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I will act as a Government Scheme Assistant with those guidelines." }],
        },
      ],
    });

    // Generate response
    const result = await chat.sendMessage(body.message);
    const response = await result.response;
    const botResponse = response.text();

    // Return the response
    return NextResponse.json({
      response: botResponse,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process your request',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Chatbot API is running' },
    { status: 200 }
  );
}