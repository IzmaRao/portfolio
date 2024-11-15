import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import React from 'react';

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default CommonLayout;
