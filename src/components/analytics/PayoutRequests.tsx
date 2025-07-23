"use client"
import { payoutRequests } from "../../assets/data/dummyData";
import PayoutRequestRow from "./PayoutRequestsRow";
import Icon from "./Icon";

const PayoutRequests = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-700">
        New Payout Requests
      </h2>
      <button className="flex items-center text-sm text-gray-500 border rounded-md px-3 py-1">
        Filter <Icon name="chevron-down" className="w-4 h-4 ml-1" />
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Author
            </th>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Wallet Address
            </th>
            <th scope="col" className="py-3 px-6">
              Request Date
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {payoutRequests.map((request, index) => (
            <PayoutRequestRow key={index} {...request} />
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
      <p>Showing 1 to 5 of 12</p>
      <button className="hover:underline">View All &rarr;</button>
    </div>
  </div>
);
export default PayoutRequests;
