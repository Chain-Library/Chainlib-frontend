import React from 'react';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-white ">
      <hr className='mx-10  my-5 rounded-full bg-black' />
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs">📚</span>
              </div>
              <h2 className="text-blue-900 text-2xl font-bold">ChainLib</h2>
            </div>
            
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900">
                <FaTwitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900">
                <FaTelegram size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-gray-500 font-medium mb-4">Explore</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-blue-900">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-900">Books</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-900">How It Works</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-900">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-500 font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-blue-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <p className="text-gray-500 text-sm">© 2025 ChainLib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}