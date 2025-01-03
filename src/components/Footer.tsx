import React from 'react';
import { Twitter, Facebook, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-white hover:text-gray-900">About</a></li>
              <li><a href="/schemes" className="text-white hover:text-gray-900">Schemes</a></li>
              <li><a href="/info" className="text-white hover:text-gray-900">Other info.</a></li>
              <li>
                <select className="mt-2 bg-black border rounded p-1">
                  <option>English</option>
                  <option>हिंदी</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-white hover:text-gray-900">Contact no.</a></li>
              <li><a href="/track" className="text-white hover:text-gray-900">Track Application Status</a></li>
              <li><a href="/faqs" className="text-white hover:text-gray-900">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white">Phone:</li>
              <li className="font-medium">(+1) 123 456 7893</li>
              <li className="text-white mt-4">Email:</li>
              <li className="font-medium">name@email.com</li>
            </ul>
          </div>

          {/* Query Section */}
          <div>
            <h3 className="font-bold text-white mb-4">For more queries</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Input your email"
                className="flex-1 p-2 border rounded"
              />
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
                Support
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-white"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">© {currentYear} CivAI, Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-white hover:text-gray-900">Privacy</a>
            <a href="/terms" className="text-white hover:text-gray-900">Terms</a>
            <a href="/sitemap" className="text-white hover:text-gray-900">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}