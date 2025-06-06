import type { EarningTab } from "@/lib/interfaces/EarningTabInterface"
import { Button } from "../ui/button"
import Image from "next/image"
import React from "react"

interface EarningsSummaryProps {
  earningsSumaryDetails: EarningTab[]
  setOpenRequestModal: React.Dispatch<React.SetStateAction<boolean>>
}

const EarningsSummary = ({ earningsSumaryDetails, setOpenRequestModal }: EarningsSummaryProps) => {
  return (
    <div className="w-full mx-auto flex items-start flex-col gap-6 bg-[var(--color-background)] min-h-[181px] shadow-[0px_4px_12px_#1212120A] rounded-lg justify-center p-4">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 ">
        {earningsSumaryDetails.map((item, index) => (
          <div
            key={index}
            className=" md:w-full md:max-w-[257px] py-3 px-6 flex flex-col gap-2 items-start justify-center rounded-lg border-[1px]"
            style={{ borderColor: item.border }}
          >
            <h1 className=" text-xs  md:text-sm font-normal text-[var(--color-neutral-600)]">{item.title}</h1>

            <div className="flex items-center gap-2">
              <Image src={"/stark.svg"} alt="icon" width={30} height={30} className="w-[14px] h-[14px]" />
              <p className=" text-sm md:text-base font-bold text-[var(--color-primary-600)]">{item.amount.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <Button onClick={() => setOpenRequestModal(true)} className="text-sm w-full md:w-fit font-normal text-[var(--color-background)] px-8 py-5 bg-[linear-gradient(180deg,_#096CFF_40.7%,_#054199_180.61%)]">
        Request Payment
      </Button>
    </div>
  )
}

export default EarningsSummary
