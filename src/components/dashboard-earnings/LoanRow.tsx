import { TransactionHistoryInterface } from "@/lib/interfaces/TransactionIHistoryInterface";
import { formatDate } from "@/lib/utils";
import React from "react";
import TransactionModalButton from "./TransactionModalButton";


interface LoanRowProps {
  tableData: TransactionHistoryInterface

}



export default function LoanRow({ tableData}: LoanRowProps) {






  return (
    <tr className="border-b-[1px] text-[10px] font-normal md:text-sm border-[#F6F6F6] hover:bg-[#E7E7E7] transition text-[#5D5D5D] ">
      <td className="py-3.5 px-2 md:px-4"> {tableData.transactionId} </td>
      <td className="py-3.5 px-2 md:px-4">{tableData.transactionType} </td>
      <td className="py-3.5 px-2 md:px-4"> {tableData.amount} STRK </td>
      <td className="py-3.5 px-2 md:px-4 flex items-start "> <span className={` border-[0.5px] rounded-[12px] py-[2px] px-2 font-normal text-[10px]  ${tableData.status ? "bg-[#34A8531A] border-[#34A853] text-[#34A853] " : "bg-[#ED4D481A] border-[#ED4D48] text-[#ED4D48] " }`}  >{tableData.status ? "Successful" : "Failed"} </span> </td>
      <td className="py-3.5 px-2 md:px-4"> {formatDate(tableData.date)} </td>
      <td className="py-3.5 px-2 md:px-4">
      <TransactionModalButton/>
      </td>
    </tr>
  );
}
