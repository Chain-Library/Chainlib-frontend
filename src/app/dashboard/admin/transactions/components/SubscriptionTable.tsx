import Image from "next/image";

export interface Subscription {
  id: string;
  type: string;
  amount: string;
  user: string;
  userName: string;
  status: string;
  date: string;
}

interface SubscriptionTableProps {
  transactions: Subscription[];
}

const SubscriptionTable: React.FC<SubscriptionTableProps> = ({
  transactions,
}) => {
  // Only keep "Successful" and "Failed" transactions
  const filtered = transactions.filter(tx =>
    tx.status === "Successful" || tx.status === "Failed"
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (STRK)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filtered.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex items-center gap-2">
                  <Image src="/starknet.png" alt="starknet icon" width={16} height={16} />
                  {transaction.amount}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.user}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  transaction.status === "Successful"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                <button 
                  className="hover:text-blue-800"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionTable;
