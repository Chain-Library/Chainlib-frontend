"use client";

import React, { useState } from "react";
import { ArrowLeft, Bold, Italic, Underline, Image, Link } from "lucide-react";

interface SendMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (title: string, body: string) => void;
}

const SendMessageModal: React.FC<SendMessageModalProps> = ({
  isOpen,
  onClose,
  onSend,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    if (title.trim() && body.trim()) {
      onSend(title, body);
      setTitle("");
      setBody("");
      onClose();
    }
  };

  const handleCancel = () => {
    setTitle("");
    setBody("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000098] bg-opacity-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with Back Button */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <button
            onClick={handleCancel}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title Input */}
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />

            {/* Title Formatting Options */}
            <div className="flex items-center gap-2 mt-2">
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Bold className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Italic className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Underline className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Body Input */}
          <div>
            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />

            {/* Body Formatting Options */}
            <div className="flex items-center gap-2 mt-2">
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Bold className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Italic className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Underline className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <span className="text-xs font-bold text-gray-600">H1</span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <span className="text-xs font-bold text-gray-600">H2</span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Image className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                <Link className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-200">
          <button
            onClick={handleCancel}
            className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!title.trim() || !body.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessageModal;
