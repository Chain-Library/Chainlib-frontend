import { RevenueChartInterface } from "@/lib/interfaces/RevenueChartInterface";
import RevenueChart from "./Chart";




interface RevenueBreakdownProps {
    chartData: RevenueChartInterface[]
}




export default function RevenueBreakdown({ chartData }: RevenueBreakdownProps) {
    return (
        <section className=" w-full flex flex-col gap-4 items-start bg-[var(--color-background)] p-6 rounded-lg " >

            <h2 className="text-lg font-bold text-[var(--color-neutral-300)] " >Revenue Breakdown</h2>





            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-[120px] h-full px-0 md:px-6 md:pr-[5%] " >


                <RevenueChart chartData={chartData} />


                <ul className=" w-full max-w-[237px]  py-2 px-1 flex flex-col items-start gap-4   " >

                    {chartData.map((item, index) => (
                        <li key={index} className="flex items-center gap-4 text-sm font-normal text-[var(--color-neutral-800)]  " > <span className="block w-4 h-4 rounded-full" style={{ background: item.color }} ></span>  {item.name} </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}