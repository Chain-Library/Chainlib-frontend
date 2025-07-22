"use client";

import EarningsSummary from "@/components/dashboard-earnings/EarningSummary";
import LinkWallet from "@/components/dashboard-earnings/LinkWallet";
import RevenueBreakdown from "@/components/dashboard-earnings/RevenueBreakdown";
import type { EarningTab } from "@/lib/interfaces/EarningTabInterface";
import { RevenueChartInterface } from "@/lib/interfaces/RevenueChartInterface";
import { useEffect, useState } from "react";
import TransactionHistory from "../../../../components/dashboard-earnings/TransactionHistory";
import RequestPaymentModal from "@/components/dashboard-earnings/RequestPaymentModal";
import { PaymentPropInterface } from "@/lib/interfaces/PaymentPropInterface";
import { Header } from "@/components/dashboard/header";


const earningsSumaryDetails: EarningTab[] = [
  { title: "Current Balance", amount: 3150.0, border: "#D6ECFF" },
  { title: "Pending Payout", amount: 100.06, border: "#2396413D" },
  { title: "Total Payout", amount: 2500.01, border: "#822ECB3D" },
  { title: "Total Earned", amount: 2730.19, border: "#D6ECFF" },
];

const chartData: RevenueChartInterface[] = [
  {
    name: "Monthly Subcription Payment",
    value: 121,
    color: "#236FEA",
    percentage: "40%",
  },
  {
    name: "NFT Royalty",
    value: 12,
    color: "#FBBC05",
    percentage: "10%",
  },
  {
    name: "NFT",
    value: 101,
    color: "#822ECB",
    percentage: "22%",
  },
  {
    name: "Book Purchase",
    value: 131,
    color: "#34A853",
    percentage: "28%",
  },
];

function EarningsPage() {
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState({
    braavos: "",
    argent: "",
  });

  const ADDRESS_KEY = "walletAddressKey";

  const [paymentDetails, setPaymentDetails] = useState<PaymentPropInterface>({
    amount: 0.0,
    wallet: "",
    walletAddress: "",
  });

  // This function loads saved addresses
  useEffect(() => {
    const savedAddresses = localStorage.getItem(ADDRESS_KEY);
    if (savedAddresses) {
      try {
        const parsedAddresses = JSON.parse(savedAddresses);
        setWalletAddress(parsedAddresses);
      } catch (error) {
        console.error("Failed to parse saved addresses:", error);
      }
    }
  }, []);

  // this function saves wallet address to local storage
  useEffect(() => {
    if (walletAddress.braavos || walletAddress.argent) {
      localStorage.setItem(ADDRESS_KEY, JSON.stringify(walletAddress));
    }
  }, [walletAddress]);



  return (
    <>
      <Header title="Earnings" />
     <div className="flex flex-col gap-8 w-full px-6 py-8 mx-auto font-inter min-w-[350px] ">
      <EarningsSummary
        earningsSumaryDetails={earningsSumaryDetails}
        setOpenRequestModal={setOpenRequestModal}
      />
      <TransactionHistory />
      <RevenueBreakdown chartData={chartData} />
      <LinkWallet
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      {openRequestModal && (
        <RequestPaymentModal
          paymentDetails={paymentDetails}
          setPaymentDetails={setPaymentDetails}
          walletAddress={walletAddress}
          setOpenRequestModal={setOpenRequestModal}
        />
      )}
    </div>
    </>
   
  );
}

export default EarningsPage;
