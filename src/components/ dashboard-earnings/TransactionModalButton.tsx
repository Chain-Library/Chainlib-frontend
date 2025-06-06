"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { Upload, X } from "lucide-react"
import { Button, Stack } from "@mui/material"
import Image from "next/image"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  minWidth: "350px",
  maxWidth: "853px",
  height: "full",
  bgcolor: "#FFFFFF",
  border: "none",
  boxShadow: 24,
  paddingTop: "24px",
  paddingBottom: "24px",
  borderRadius: "8px",
}



const amountDetails = [
  {
    heading: "Amount Paid",
    value: 800.00,
  },
  {
    heading: "Royalty Earned",
    value: 80.00,
  },
  {
    heading: "Platform Commission",
    value: 80.00,
  },
]


const transactionDetails = [
  {
    heading: "Transaction Type",
    value: "Book Purchase",
  },
  {
    heading: "Status",
    value: <span className=" bg-[#34A8531A] border-[0.5px] border-[#34A853] py-[2px] px-2 rounded-[12px]  " >Successful</span>,
  },
  {
    heading: "Date",
    value: "12 March, 2025 ",
  },
  {
    heading: "Time",
    value: "16:32 ",
  },
]



const NFTdetails = [
  {
    heading: "NFT ID",
    value: "#0002",
  },
  {
    heading: "Buyer",
    value: "USER-0001",
  },
  {
    heading: "Transaction ID",
    value: "TRANS-00112",
  },
  {
    heading: "Transaction Hash",
    value: <> <button> <Upload size={17} /></button>  <p>0x5a3f7b...d6e7f8g </p> </>
  },
  {
    heading: "Confirmation Status",
    value: "12/12",
  },
]

export default function TransactionModalButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="font-inter" >
      <button className="text-[#096CFF] hover:text-[#054199] rounded-full text-sm font-normal" onClick={handleOpen}>
        View detail
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} px={{ xs: 2, md: 3 }}  >
          <div className="w-full h-full flex flex-col gap-4 items-start">
            <button onClick={handleClose} className="ml-auto h-10 w-10 bg-[#F6F6F6] flex items-center justify-center rounded-lg text-[#B0B0B0] ">
              <X />
            </button>
            <h1 className="text-[#888888] text-lg font-bold mx-auto">Transaction Details</h1>



            <Stack className="w-full border-[1px] border-[#E7E7E7] rounded-lg " p={{ xs: 2, md: 3 }} direction={{ base: "column", md: "row" }} alignItems={{ xs: "stretch", md: "center" }}
              spacing={1}   >
              <Box className="basis-1/2 flex items-center gap-6 justify-start " >



                <Box className="bg-[#D9D9D9] w-[100px] h-[117px] rounded-[4px] " ></Box>

                <Box>
                  <h1 className="text-[#454545] text-base font-bold mb-2 font-inter "> 99 Laws of Power </h1>
                  <h2 className="text-[#454545] text-sm font-normal " > NFT Edition </h2>
                  <h3 className="text-[#5D5D5D] text-sm font-normal mt-6 " >eBook</h3>
                </Box>
              </Box>


              <hr className=" w-full md:w-[1px] h-[1px] md:h-[117px] bg-[#E7E7E7] my-4 md:my-none " />



              <Box className="basis-1/2 space-y-3 md:pl-3   ">
                {amountDetails.map((item, index) => (
                  <Stack className="w-full px-[4px] " key={index} justifyContent="space-between" direction={"row"} alignItems={"center"} spacing={3} >
                    <h3 className="text-[#5D5D5D] text-sm font-normal flex items-center gap-1 " > <Image src={"/stark.svg"} alt="token icon" width={10} height={10} className="w-3.5 h-3.5 " />    {item.heading} </h3>
                    <h4 className="text-base text-[#454545] font-normal flex items-center gap-1" ><Image src={"/stark.svg"} alt="token icon" width={10} height={10} className="w-3.5 h-3.5 " /> {item.value} STRK </h4></Stack>
                ))}
              </Box>

            </Stack>



            <Stack className="w-full border-[1px] border-[#E7E7E7] rounded-lg " p={{ xs: 2, md: 3 }} direction={{ base: "column", md: "row" }} alignItems={{ xs: "stretch", md: "center" }} spacing={1}   >






              <Box className="basis-1/2  space-y-4 md:pr-3 ">
                {transactionDetails.map((item, index) => (
                  <Stack className="w-full px-[4px] " key={index} justifyContent="space-between" direction={"row"} alignItems={"center"} spacing={3} >
                    <h3 className="text-[#5D5D5D] text-sm font-normal flex items-center gap-1 " >    {item.heading} </h3>
                    <h4 className="text-base text-[#454545] font-normal flex items-center gap-1" > {item.value} </h4></Stack>
                ))}
              </Box>





              <hr className=" w-full md:w-[1px] h-[1px] md:h-[168px] bg-[#E7E7E7] my-4 md:my-none " />


              <Box className="basis-1/2  space-y-4  pl-3  ">
                {NFTdetails.map((item, index) => (
                  <Stack className="w-full px-[4px] " key={index} justifyContent="space-between" direction={"row"} alignItems={"center"} spacing={3} >
                    <h3 className="text-[#5D5D5D] text-sm font-normal flex items-center gap-1 " >    {item.heading} </h3>
                    <h4 className="text-base text-[#454545] font-normal flex items-center gap-1" > {item.value}  </h4></Stack>
                ))}
              </Box>

            </Stack>





            <div className="w-full flex items-start gap-8">
              <Stack className="w-full gap-4" direction={{ base: "column", md: "row" }} alignItems="center" spacing={3} p={0} useFlexGap>


                <Button variant="outlined"
                  onClick={handleClose}
                  disableRipple
                  sx={{
                    borderWidth: '1px',
                    borderColor: '#D1D1D1',
                    textTransform: 'none',
                    borderRadius: "12px",
                    color: "#454545",
                    fontWeight: "400", fontSize: "14px",
                  }}
                  className=" w-full md:basis-1/2  ">Back</Button>

                <Button
                  variant="contained"
                  className="w-full md:basis-1/2 bg-[linear-gradient(179.56deg,_#EDF7FF_60.22%,_#096CFF_317.32%)]"
                  disableElevation
                  disableRipple
                  sx={{ color: "#0F265C", fontWeight: "400", fontSize: "14px", textTransform: 'none', borderRadius: "12px", }}
                >Export as PDF</Button>
              </Stack>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
