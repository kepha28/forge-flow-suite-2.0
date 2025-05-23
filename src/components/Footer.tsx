
import React from 'react';
import { Link } from "react-router-dom";
import { Github, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fileforge-dark text-white py-12 px-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-fileforge-blue to-fileforge-teal inline-block text-transparent bg-clip-text">FileForge Suite</h3>
            <p className="text-gray-300 mb-4">All-in-one file management solution for converting, compressing, and securing your files.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-fileforge-teal">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fileforge-teal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fileforge-teal">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/convert" className="text-gray-300 hover:text-fileforge-teal">Convert</Link></li>
              <li><Link to="/compress" className="text-gray-300 hover:text-fileforge-teal">Compress</Link></li>
              <li><Link to="/secure" className="text-gray-300 hover:text-fileforge-teal">Secure</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-fileforge-teal">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-fileforge-teal">Blog</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-fileforge-teal">Help Center</Link></li>
              <li><Link to="/docs" className="text-gray-300 hover:text-fileforge-teal">API Documentation</Link></li>
              <li><Link to="/status" className="text-gray-300 hover:text-fileforge-teal">Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-fileforge-teal">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-fileforge-teal">Careers</Link></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-fileforge-teal">Legal</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fileforge-teal">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} FileForge Suite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-fileforge-teal">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-fileforge-teal">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-fileforge-teal">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
