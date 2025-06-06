
import { Ghost, X } from "lucide-react";
import { Button } from "../ui/button";
import { PaymentPropInterface } from "@/lib/interfaces/PaymentPropInterface";
import Image from "next/image"
import { Input } from "../ui/input";
import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { WalletAddressType } from "./LinkWallet";





interface RequestPaymentModalProps {
  paymentDetails: PaymentPropInterface;
  setPaymentDetails: React.Dispatch<React.SetStateAction<PaymentPropInterface>>;
  walletAddress: WalletAddressType;
   setOpenRequestModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RequestPaymentModal({ paymentDetails, setPaymentDetails, walletAddress, setOpenRequestModal }: RequestPaymentModalProps) {


  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target

    setPaymentDetails((prev) => ({
      ...prev,
      [name]: event.target.value
    }))
  };


  const truncWalletAddress = paymentDetails.walletAddress.slice(0, 5) + "....." + paymentDetails.walletAddress.slice(paymentDetails.walletAddress.length - 6, paymentDetails.walletAddress.length - 1)

  return (
    <div onClick={() => setOpenRequestModal(false)} className="w-full min-h-screen fixed top-0 left-0 bg-black/50 px-5 py-10 z-50">

      <div className=" w-full h-full  flex items-center justify-center py-7 px-5 overflow-x-hidden  " >





        <div onClick={
(e) => e.stopPropagation()
        }
        className="w-full max-w-[621px] bg-[#ffffff] min-w-[300px] flex flex-col py-4 px-6 gap-4 rounded-2xl " >
          <button onClick={() => setOpenRequestModal(false)} className="ml-auto h-10 w-10 bg-[#F6F6F6] flex items-center justify-center rounded-lg text-[#B0B0B0] ">
            <X />
          </button>

          <h1 className="text-[#888888] text-lg font-bold mx-auto">Request Payment</h1>



          <form className=" w-full flex flex-col items-start gap-8 " >

            <div className=" w-full flex items-center justify-between gap-10" >
              <h2 className="text-[#888888] font-medium text-sm " > Current Balance Subtotal </h2>
              <h3 className=" text-base text-[#454545] font-bold " >1793 <span className=" text-sm font-normal  " > STRK</span></h3>
            </div>

            <div className="w-full flex flex-col gap-3.5 items-start " >

              <div className=" w-full flex items-center justify-between gap-10" >
                <h2 className="text-[#5D5D5D] font-normal text-sm " > Enter Amount </h2>
                <h3 className=" text-xs text-[#5D5D5D] font-normal " >($12 USDT)</h3>
              </div>

              <div className="w-full flex items-center gap-2.5 py-3.5 px-4 rounded-lg border-[1px] border-[#E7E7E7]  "  >
                <Image src={"/stark.svg"} alt={"token icon"} width={10} height={10} />
                <Input
                  name="amount"
                  value={` ${paymentDetails.amount} Strk `}
                  onChange={handleChange}
                  className="outline-none border-none flex-1 shadow-none focus:border-none focus:shadow-none focus:outline-none p-0"
                />
                <Button variant={"ghost"} className="ml-auto bg-[#F6F6F6] py-1 px-4 text-xs font-normal text-[#5D5D5D]  " >Max</Button>

              </div>


              <div className="w-full flex-col gap-3 items-start " >
                <h4 className=" text-[#5D5D5D] text-sm font-normal " >Destination wallet address</h4>
                <div className="w-full flex items-center justify-between gap-10" >


                  <Select
                    labelId="wallet"
                    id="wallet"
                    name="wallet"
                    value={paymentDetails.wallet}
                    onChange={handleChange}
                    disableUnderline
                    className="w-full flex items-center  "
                    sx={{
                      border: 'none',
                      '&:before': {
                        borderBottom: 'none',
                      },
                      '&:after': {
                        borderBottom: 'none',
                      },
                    }}

                  >
                    <MenuItem className="space-x-2 text-[#5D5D5D] text-sm font-bold " value={walletAddress.braavos}  >   <Image src={"/braavos.svg"} alt="Wallet Icon" width={14} height={14} className="w-6 h-6" />  Braavoos </MenuItem>
                    <MenuItem className="space-x-2 text-[#5D5D5D] text-sm font-bold " value={walletAddress.argent}>           <Image src={"/stark.svg"} alt="Wallet Icon" width={14} height={14} className="w-6 h-6" /> Argent</MenuItem>
                  </Select>

                  <span className="text-[#5D5D5D] text-sm font-normal bg-[#EDF7FF] py-1 px-3 rounded-3xl min-w-[80px] text-center " > {paymentDetails.walletAddress.trim().length > 0 ? truncWalletAddress : "--"} </span>
                </div>


              </div>

            </div>








          </form>



          <Button className="text-sm w-full  font-normal text-[var(--color-background)] px-8 py-5 bg-[linear-gradient(180deg,_#096CFF_40.7%,_#054199_180.61%)]">
            Request Payment
          </Button>
        </div>




      </div>

    </div>
  );
}
