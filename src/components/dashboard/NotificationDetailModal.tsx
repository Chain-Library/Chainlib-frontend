"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

interface NotificationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  notification: {
    id: string;
    title: string;
    sender: string;
    message: string;
    date: string;
    receiver?: string;
    time?: string;
    status?: string;
  } | null;
}

const NotificationDetailModal: React.FC<NotificationDetailModalProps> = ({
  isOpen,
  onClose,
  notification,
}) => {
  if (!isOpen || !notification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000098] bg-opacity-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with Back Button */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Sender Info */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-4">
              <span className="text-sm text-gray-600">
                Sent by: {notification.sender}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {notification.title}
          </h1>

          {/* Banner Image */}
          <div className="mb-8">
            <div className="relative w-full h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-200 leading-none">
                    COMING
                  </div>
                  <div className="text-6xl font-bold text-blue-200 leading-none">
                    SOON
                  </div>
                </div>
              </div>
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full"></div>
                <div className="absolute top-16 right-8 w-16 h-16 bg-white rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-12 h-12 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              We are excited to announce a series of improvements and new
              features in our subscription plans. Starting this month,
              subscribers will enjoy enhanced benefits tailored to provide
              greater value and a more seamless experience.
            </p>
          </div>

          {/* Details Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">
                Notification Details
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-600">Receiver:</span>
                <span className="text-gray-900">Reader</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-600">Date:</span>
                <span className="text-gray-900">12 March, 2024</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-600">Time:</span>
                <span className="text-gray-900">12:14 PM</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-600">Status:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Sent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailModal;
