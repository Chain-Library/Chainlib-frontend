import { Input } from "../ui/input";


export default function FilterBar() {
  return (
    <div className="flex  items-center lg:gap-10">
      <div className="flex gap-1">
        <button className="bg-[#E7E7E7] px-2 md:px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-normal  md:font-medium">This Week</button>
        <button className="bg-[#E7E7E7] px-2 md:px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-normal md:font-medium">This Month</button>
        <button className="bg-[#E7E7E7] px-2 md:px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-normal md:font-medium">This Year</button>
      </div>


      <div className=" hidden md:flex items-center justify-center gap-4 " >

<Input
value={""}
placeholder="dd/mm/yyyy"
className="border-[1px] border-[#E7E7E7] max-w-[106px] "
type="date"
/>

to


<Input
value={""}
placeholder="dd/mm/yyyy"
className="border-[1px] border-[#E7E7E7] max-w-[106px] "
type="date"
/>





       <button className="bg-[#E7E7E7] px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-medium">Apply</button>
      </div>



      <div className="ml-auto flex gap-2">
        <button className="bg-[#E7E7E7] px-2 md:px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-normal md:font-medium">Filter by</button>
      </div>
    </div>
  );
}
