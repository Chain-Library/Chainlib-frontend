"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Transaction Table Component
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
function TransactionTable({
  transactions,
  onViewDetails,
}: {
  transactions: any[];
  onViewDetails: (transaction: any) => void;
}) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Transaction Type</TableHead>
              <TableHead>Amount (STRK)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "Successful"
                        ? "default"
                        : "destructive"
                    }
                    className={
                      transaction.status === "Successful"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Button
                    variant="link"
                    className="text-blue-600 p-0"
                    onClick={() => onViewDetails(transaction)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile List */}
      <div className="lg:hidden space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium text-sm">{transaction.type}</div>
                <div className="text-xs text-gray-500">{transaction.id}</div>
              </div>
              <Badge
                variant={
                  transaction.status === "Successful"
                    ? "default"
                    : "destructive"
                }
                className={
                  transaction.status === "Successful"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }
              >
                {transaction.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold">{transaction.amount}</div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </div>
            <Button
              variant="link"
              className="text-blue-600 p-0 mt-2"
              onClick={() => onViewDetails(transaction)}
            >
              View Details
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
