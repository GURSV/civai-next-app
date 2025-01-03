import React from 'react';

const steps = [
  { id: 1, label: 'अपलोड करें', status: 'completed' },
  { id: 2, label: 'अनुमोदन आवश्यक', status: 'current' },
  { id: 3, label: 'अंतिम अनुमोदन', status: 'pending' }
];

export default function Tracker() {
  return (
    <div className="font-mono mt-10 mb-14 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">आवेदन प्रगति</h2>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-blue-500 -translate-y-1/2 transition-all duration-500" />
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                transition-all duration-300 mb-2
                ${step.status === 'completed' ? 'bg-blue-500 text-white' : 
                  step.status === 'current' ? 'bg-blue-100 border-2 border-blue-500 text-blue-500' : 
                  'bg-gray-100 border-2 border-gray-300 text-gray-500'}
              `}>
                {step.status === 'completed' ? '✓' : step.id}
              </div>
              <span className={`
                text-sm font-medium
                ${step.status === 'completed' ? 'text-blue-500' :
                  step.status === 'current' ? 'text-blue-600' :
                  'text-gray-500'}
              `}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}