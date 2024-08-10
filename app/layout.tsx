// app/layout.tsx
import './globals.css';
import React from 'react';
import Header from './components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
