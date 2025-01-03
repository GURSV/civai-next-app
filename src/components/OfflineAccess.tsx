import React from 'react';
import { Phone, Mail, Wifi, WifiOff } from 'lucide-react';

interface ContactInfo {
  type: string;
  value: string;
  icon: React.ReactNode;
}

export default function OfflineAccess() {
  const contacts: ContactInfo[] = [
    { type: 'संदेश', value: '+1 (555) 123-4567', icon: <Phone className="w-5 h-5" /> },
    { type: 'ईमेल', value: 'support@example.com', icon: <Mail className="w-5 h-5" /> },
    { type: 'हेल्पलाइन', value: '1-800-xxx-xxx', icon: <Phone className="w-5 h-5" /> }
  ];

  return (
    <div className="font-mono text-l mt-20 max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <WifiOff className="w-6 h-6 text-gray-600" />
        <h2 className="text-2xl font-bold text-gray-800">Offline Access</h2>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 text-blue-700">
          <Wifi className="w-5 h-5" />
          <p className="font-medium">Instructions available offline</p>
        </div>
      </div>

      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="text-gray-600">
              {contact.icon}
            </div>
            <div>
              <div className="text-sm text-gray-500">{contact.type}</div>
              <div className="font-medium text-gray-700">{contact.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}