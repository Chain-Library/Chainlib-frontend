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
    <div className="flex-col gap-y-4 py-8 w-full md:w-4/5 mx-auto flex justify-center items-center p-4">
      <h2 className="text-title-large font-semibold mb-4">
        Update Social Links</h2>

      {/* Facebook */}
      <div className="space-y-2 w-full">
        <label htmlFor="facebook" className="block text-title-medium font-medium text-gray-700">
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
      <div className="space-y-2 w-full">
        <label htmlFor="instagram" className="block text-title-medium font-medium text-gray-700">
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
      <div className="space-y-2 w-full">
        <label htmlFor="twitter" className="block text-title-medium font-medium text-gray-700">
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
      <div className="space-y-2 w-full">
        <label htmlFor="linkedin" className="block text-title-medium font-medium text-gray-700">
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

      <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full">
        <button
          onClick={handleCancel}
          className="w-full py-2 px-4 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Save Change
        </button>
      </div>
    </div>
  );
}