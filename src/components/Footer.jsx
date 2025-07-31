import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand Name */}
          <div className="text-lg font-semibold text-center md:text-left">
            Railway Management System
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="/"
              className="hover:text-blue-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="/"
              className="hover:text-blue-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="/"
              className="hover:text-blue-400 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Copyright Info */}
          <p className="text-sm text-center md:text-right">
            © 2024 Railway Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
