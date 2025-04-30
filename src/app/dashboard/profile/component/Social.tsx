

import React, { useState } from 'react';

export default function UpdateSocialLinks() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  });

  const handleChange = (platform: keyof typeof socialLinks) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialLinks({ ...socialLinks, [platform]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Updated social links:', socialLinks);
  };

  const handleCancel = () => {
    setSocialLinks({
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: ''
    });
  };

  return (
    <div className="flex justify-center items-center  bg-gray-50 p-4">
      <div className="w-full  bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Update Social Links</h1>
        
        <div>
          <div className="grid grid-cols-1 md:flex md:flex-wrap md:justify-between gap-4 mb-6">
            {/* Facebook */}
            <div className="space-y-2 w-full md:w-[48%]">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                Facebook
              </label>
              <input
                id="facebook"
                type="text"
                placeholder="Enter Profile Link"
                value={socialLinks.facebook}
                onChange={handleChange('facebook')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Instagram */}
            <div className="space-y-2 w-full md:w-[48%]">
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                Instagram
              </label>
              <input
                id="instagram"
                type="text"
                placeholder="Enter Profile Link"
                value={socialLinks.instagram}
                onChange={handleChange('instagram')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* X (Twitter) */}
            <div className="space-y-2 w-full md:w-[48%]">
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                X
              </label>
              <input
                id="twitter"
                type="text"
                placeholder="Enter Profile Link"
                value={socialLinks.twitter}
                onChange={handleChange('twitter')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* LinkedIn */}
            <div className="space-y-2 w-full md:w-[48%]">
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                Linked In
              </label>
              <input
                id="linkedin"
                type="text"
                placeholder="Enter Profile Link"
                value={socialLinks.linkedin}
                onChange={handleChange('linkedin')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={handleCancel}
              className="w-full sm:w-1/2 py-2 px-4 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="w-full sm:w-1/2 py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}