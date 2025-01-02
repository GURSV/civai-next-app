import React from 'react';
import './globals.css';


export const metadata = {
  title: 'CivAI',
  description: 'Welcome to CivAI - Your AI Assistant!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
