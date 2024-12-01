import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Railway Management System</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
        </div>
        <p className="text-sm">© 2024 Railway Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
