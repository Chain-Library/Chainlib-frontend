import Image from "next/image";

export interface Transaction {
  id: string;
  type: string;
  amount: string;
  user: string;
  userName: string;
  bookTitle: string;
  status: string;
  date: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  onViewDetails: (tx: Transaction) => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions, onViewDetails
}) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          {[
            "Transaction ID",
            "Transaction Type",
            "Amount (STRK)",
            "User",
            "User Name",
            "Book Title",
            "Status",
            "Date",
            "",
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
        {transactions.map((transaction, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {transaction.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {transaction.type}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <div className="flex items-center gap-2">
               <Image
                  src="/starknet.png"
                  alt="starknet icon"
                  width={16}
                  height={16}
                />
                {transaction.amount}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {transaction.user}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {transaction.userName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {transaction.bookTitle}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  transaction.status === "Successful"
                  ? "bg-green-100 text-green-800"
                  : transaction.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
                }`}
              >
                {transaction.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {transaction.date}
            </td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
              <button 
                className="hover:text-blue-800"
                onClick={() => onViewDetails(transaction)}
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

export default TransactionTable;
