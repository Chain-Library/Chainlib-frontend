import { RevenueChartInterface } from "@/lib/interfaces/RevenueChartInterface";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Cell
} from 'recharts';



interface RevenueChartProps {
    chartData: RevenueChartInterface[]
}



export default function RevenueChart({chartData}: RevenueChartProps) {








    return (

<div className="w-full max-w-[651px] h-full   border-[1px] border-[var(--color-neutral-100)] rounded-lg px-0 md:px-6 py-6 flex items-center justify-center  " >


<ResponsiveContainer width="100%" height={300} >
    <BarChart data={chartData} >
        <XAxis dataKey={"value" }  tickFormatter={(value) => `$${value}`} tick={{ dy: 10 }} tickLine={false}  axisLine={{ stroke: '#D1D1D1', strokeWidth: 1 }} />
        <YAxis
    axisLine={{ stroke: '#D1D1D1', strokeWidth: 1 }}
  tick={false}
  tickLine={false}
         />
        <Tooltip/>
        <Bar dataKey="value" radius={[4, 4, 0, 0]}  barSize={60} >
            {chartData.map((entry, index) => (
                <Cell key={`ceil-${index}`} fill={entry.color}  />
            ))}
            </Bar>
         </BarChart>

</ResponsiveContainer>



</div>
    )
}