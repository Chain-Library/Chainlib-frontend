"use client"
type PayoutRequestRowProps = {
  author: string;
  email: string;
  amount: string;
  wallet: string;
  date: string;
  status: string;
};

const PayoutRequestRow: React.FC<PayoutRequestRowProps> = ({
  author,
  email,
  amount,
  wallet,
  date,
  status,
}) => (
  <tr className="border-b">
    <td className="py-4 px-6">
      <p className="font-semibold text-gray-800">{author}</p>
      <p className="text-sm text-gray-500">{email}</p>
    </td>
    <td className="py-4 px-6 text-gray-700">{amount}</td>
    <td className="py-4 px-6 text-gray-700">{wallet}</td>
    <td className="py-4 px-6 text-gray-700">{date}</td>
    <td className="py-4 px-6">
      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
        {status}
      </span>
    </td>
    <td className="py-4 px-6 flex gap-2">
      <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-600">
        Approve
      </button>
      <button className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-md text-sm hover:bg-gray-300">
        Decline
      </button>
    </td>
  </tr>
);
export default PayoutRequestRow;
