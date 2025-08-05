import React from 'react';
import Image from 'next/image';

export interface PayoutRequest {
  author: string;
  email: string;
  amount: string;
  walletAddress: string;
  requestDate: string;
  status: string;
}

interface PayoutRequestTableProps {
  requests: PayoutRequest[];
  onApprove: (request: PayoutRequest) => void;
  onDecline: (request: PayoutRequest) => void;
  onRowClick: (request: PayoutRequest) => void;
}

const PayoutRequestTable: React.FC<PayoutRequestTableProps> = ({ 
  requests, 
  onApprove, 
  onDecline, 
  onRowClick 
}) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-blue-100">
        <tr>
          {[
            "Author",
            "Amount",
            "Wallet Address",
            "Request Date",
            "Status",
            "Actions"
          ].map((header) => (
            <th
              key={header}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {requests.map((request, index) => (
          <tr 
            key={index} 
            className="hover:bg-gray-50 cursor-pointer"
            onClick={() => onRowClick(request)}
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div>
                <div className="text-sm font-medium text-gray-900">{request.author}</div>
                <div className="text-sm text-gray-500">{request.email}</div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <div className="flex items-center gap-2">
                <Image
                  src="/starknet.png"
                  alt="starknet icon"
                  width={16}
                  height={16}
                />
                {request.amount}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {request.walletAddress}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {request.requestDate}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                {request.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  onApprove(request);
                }}
              >
                Approve
              </button>
              <button 
                className="bg-[#fafdff] border-blue-100 border text-gray-600 hover:text-gray-800 px-5 py-2 rounded-3xl"
                onClick={(e) => {
                  e.stopPropagation();
                  onDecline(request);
                }}
              >
                Decline
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PayoutRequestTable;
