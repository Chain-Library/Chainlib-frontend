"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Bell,
  Copy,
  Wallet,
  X,
  ArrowLeft,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function AnalyticsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [showRequestPayment, setShowRequestPayment] = useState(false);
  const [showConfirmDetails, setShowConfirmDetails] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const totalPages = 12;

  const metrics = [
    { title: "Current Balance", value: "$3150.00", color: "text-blue-600" },
    { title: "Pending Payout", value: "$100.06", color: "text-blue-600" },
    { title: "Total Payout", value: "$2500.01", color: "text-blue-600" },
    { title: "Total Earned", value: "$2730.19", color: "text-blue-600" },
  ];

  const transactions = [
    {
      id: "Tran-1248",
      type: "Monthly Payment",
      amount: "10.99 STRK",
      status: "Successful",
      date: "26 April",
      details: {
        title: "99 Laws of Power",
        subtitle: "NFT Edition",
        amountPaid: "8.00 USDC",
        royaltyEarned: "7.00 USDC",
        platformCommission: "1.00 USDC",
        nftId: "90002",
        buyer: "USER-0001",
        transactionId: "TRANS-00112",
        transactionHash: "0x5a9f79...d9c7f9g",
        confirmationStatus: "12/12",
        time: "16:32",
      },
    },
    {
      id: "Tran-1248",
      type: "Book Purchase",
      amount: "76.09 STRK",
      status: "Successful",
      date: "25 April",
      details: {
        title: "99 Laws of Power",
        subtitle: "NFT Edition",
        amountPaid: "800.00 STRK",
        royaltyEarned: "50.00 STRK",
        platformCommission: "30.00 STRK",
        nftId: "90002",
        buyer: "USER-0001",
        transactionId: "TRANS-00112",
        transactionHash: "0x5a9f79...d9c7f9g",
        confirmationStatus: "12/12",
        time: "16:32",
      },
    },
    {
      id: "Tran-1248",
      type: "Withdraw",
      amount: "1560.00 STRK",
      status: "Failed",
      date: "20 April",
      details: {
        title: "Withdrawal Request",
        subtitle: "Failed Transaction",
        amountPaid: "1560.00 STRK",
        royaltyEarned: "0.00 STRK",
        platformCommission: "5.00 STRK",
        nftId: "N/A",
        buyer: "N/A",
        transactionId: "TRANS-00110",
        transactionHash: "0x5a9f79...d9c7f9g",
        confirmationStatus: "0/12",
        time: "14:22",
      },
    },
    {
      id: "Tran-1248",
      type: "NFT Royalties",
      amount: "7.02 STRK",
      status: "Successful",
      date: "18 April",
      details: {
        title: "NFT Royalty Payment",
        subtitle: "Collection Royalty",
        amountPaid: "7.02 STRK",
        royaltyEarned: "7.02 STRK",
        platformCommission: "0.50 STRK",
        nftId: "90001",
        buyer: "USER-0003",
        transactionId: "TRANS-00109",
        transactionHash: "0x5a9f79...d9c7f9g",
        confirmationStatus: "12/12",
        time: "10:15",
      },
    },
    {
      id: "Tran-1248",
      type: "NFT Royalties",
      amount: "8.09 STRK",
      status: "Successful",
      date: "18 April",
      details: {
        title: "NFT Royalty Payment",
        subtitle: "Collection Royalty",
        amountPaid: "8.09 STRK",
        royaltyEarned: "8.09 STRK",
        platformCommission: "0.60 STRK",
        nftId: "90003",
        buyer: "USER-0004",
        transactionId: "TRANS-00108",
        transactionHash: "0x5a9f79...d9c7f9g",
        confirmationStatus: "12/12",
        time: "09:45",
      },
    },
  ];

  const revenueData = [
    {
      name: "Monthly Subscription",
      value: 40,
      amount: 121,
      color: "#3B82F6",
      label: "Monthly Subscription Payment",
    },
    {
      name: "NFT Royalty",
      value: 10,
      amount: 101,
      color: "#EAB308",
      label: "NFT Royalty",
    },
    {
      name: "NFT",
      value: 22,
      amount: 121,
      color: "#A855F7",
      label: "NFT",
    },
    {
      name: "Book Purchase",
      value: 28,
      amount: 101,
      color: "#10B981",
      label: "Book Purchase",
    },
  ];

  const handleViewDetails = (transaction: any) => {
    setSelectedTransaction(transaction);
    setShowTransactionDetails(true);
  };

  const handleRequestPayment = () => {
    setShowRequestPayment(true);
  };

  const handleProceedPayment = () => {
    setShowRequestPayment(false);
    setShowConfirmDetails(true);
  };

  const handleConfirmPayment = () => {
    setShowConfirmDetails(false);
    setPaymentAmount("");
    // Handle payment confirmation logic here
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-blue-600">
            {`${payload[0].dataKey === "value" ? "Percentage" : "Amount"}: ${
              payload[0].value
            }${
              payload[0].dataKey === "value"
                ? "%"
                : payload[0].dataKey === "amount"
                ? " STRK"
                : ""
            }`}
          </p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].payload.label}</p>
          <p className="text-blue-600">{`${payload[0].value}% ($${payload[0].payload.amount})`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="w-5 h-5" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <span className="font-semibold">ChainLab</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5" />
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Earnings Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 lg:hidden">Earnings</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4 lg:p-6">
                  <div className="text-sm text-gray-600 mb-1">
                    {metric.title}
                  </div>
                  <div
                    className={`text-xl lg:text-2xl font-bold ${metric.color}`}
                  >
                    {metric.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            onClick={handleRequestPayment}
            className="w-full lg:w-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
          >
            Request Payment
          </Button>
        </div>

        {/* Revenue Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Revenue Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Chart - 50% width on desktop */}
              <div className="w-full lg:w-1/2">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Legend - 50% width on desktop */}
              <div className="w-full lg:w-1/2 space-y-3">
                {revenueData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-gray-500">
                        {item.value}% (${item.amount})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Transaction History
            </CardTitle>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <div className="flex gap-2 text-sm">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
                  This Week
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  This Month
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  This Year
                </button>
              </div>
              <div className="flex gap-2 ml-auto">
                <Input placeholder="Search..." className="w-32" />
                <Select defaultValue="apply">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apply">Apply</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  Filter by
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
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
                      <TableCell className="font-medium">
                        {transaction.id}
                      </TableCell>
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
                          onClick={() => handleViewDetails(transaction)}
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
                      <div className="font-medium text-sm">
                        {transaction.type}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.id}
                      </div>
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
                    <div className="text-sm text-gray-500">
                      {transaction.date}
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="text-blue-600 p-0 mt-2"
                    onClick={() => handleViewDetails(transaction)}
                  >
                    View Details
                  </Button>
                </div>
              ))}
              <Button variant="link" className="text-blue-600 w-full">
                View All
              </Button>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">Showing 1 to 5 of 12</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[1, 2, 3, "...", 10, 11, 12].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className={page === 1 ? "bg-blue-600" : ""}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link Wallet */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Link Wallet</CardTitle>
            <Button variant="link" className="text-blue-600 p-0">
              Change Wallet Address
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">Braavos</div>
                  <div className="text-sm text-gray-500">(Starknet)</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Paste
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <div>
                  <div className="font-medium">Argent</div>
                  <div className="text-sm text-gray-500">(Starknet)</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Paste
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Details Modal */}
      <Dialog
        open={showTransactionDetails}
        onOpenChange={setShowTransactionDetails}
      >
        <DialogContent className="max-w-md mx-auto lg:max-w-lg">
          <DialogHeader className="flex flex-row items-center justify-between lg:justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-0"
              onClick={() => setShowTransactionDetails(false)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <DialogTitle className="text-center">
              Transaction Details
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex p-0"
              onClick={() => setShowTransactionDetails(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>

          {selectedTransaction && (
            <div className="space-y-6">
              {/* NFT/Item Info */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">
                    {selectedTransaction.details.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedTransaction.details.subtitle}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">eBook</p>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid</span>
                  <span className="font-semibold text-blue-600">
                    {selectedTransaction.details.amountPaid}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Royalty Earned</span>
                  <span className="font-semibold text-blue-600">
                    {selectedTransaction.details.royaltyEarned}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Commission</span>
                  <span className="font-semibold text-blue-600">
                    {selectedTransaction.details.platformCommission}
                  </span>
                </div>
              </div>

              <hr />

              {/* Additional Details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction Type</span>
                  <span>{selectedTransaction.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge
                    variant={
                      selectedTransaction.status === "Successful"
                        ? "default"
                        : "destructive"
                    }
                    className={
                      selectedTransaction.status === "Successful"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {selectedTransaction.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span>12 March, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span>{selectedTransaction.details.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NFT ID</span>
                  <span>{selectedTransaction.details.nftId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Buyer</span>
                  <span>{selectedTransaction.details.buyer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID</span>
                  <span>{selectedTransaction.details.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction Hash</span>
                  <span className="text-blue-600">
                    {selectedTransaction.details.transactionHash}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Confirmation Status</span>
                  <span>{selectedTransaction.details.confirmationStatus}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                  Export as PDF
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowTransactionDetails(false)}
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Request Payment Modal */}
      <Dialog open={showRequestPayment} onOpenChange={setShowRequestPayment}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-center w-full">
              Request Payment
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              className="p-0"
              onClick={() => setShowRequestPayment(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>

          <div className="space-y-6">
            {/* Current Balance */}
            <div>
              <label className="text-sm text-gray-600">
                Current Balance/Subscribed
              </label>
              <div className="text-2xl font-bold text-blue-600">793 STRK</div>
            </div>

            {/* Enter Amount */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Enter Amount
              </label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="00.00 STRK"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="pr-16"
                />
                <Button
                  variant="link"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 p-0"
                >
                  Max
                </Button>
              </div>
            </div>

            {/* Destination Wallet */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Destination wallet address
              </label>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Braavos</div>
                  <div className="text-xs text-gray-500">0x5a9f...c8b0</div>
                </div>
              </div>
            </div>

            {/* Proceed Button */}
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleProceedPayment}
              disabled={!paymentAmount}
            >
              Proceed
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirm Details Modal */}
      <Dialog open={showConfirmDetails} onOpenChange={setShowConfirmDetails}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-center w-full">
              Confirm Details
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              className="p-0"
              onClick={() => setShowConfirmDetails(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>

          <div className="space-y-6">
            {/* Amount to be sent */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount to be sent</span>
              <div className="text-right">
                <div className="font-bold text-blue-600">19.3 STRK</div>
                <div className="text-xs text-gray-500">Tax (20%)</div>
              </div>
            </div>

            {/* Destination wallet */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Destination wallet address</span>
              <span className="text-blue-600 text-sm">0x5a9f...c8b0</span>
            </div>

            {/* Gas fees */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Gas fees</span>
              <span className="font-semibold">5 STRK</span>
            </div>

            {/* Estimated time */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated time of delivery</span>
              <span>24-48 hours</span>
            </div>

            {/* Confirm Button */}
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleConfirmPayment}
            >
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AnalyticsPage;
