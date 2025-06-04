

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center lg:gap-18">
      <div className="flex gap-1">
        <button className="bg-[#E7E7E7] px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-medium">This Week</button>
        <button className="bg-[#E7E7E7] px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-medium">This Month</button>
        <button className="bg-[#E7E7E7] px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-medium">This Year</button>
      </div>


      <div className="flex items-center justify-center gap-4 " >





       <button className="bg-[#E7E7E7] px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-medium">Apply</button>
      </div>



      <div className="ml-auto flex gap-2">
        <button className="bg-[#E7E7E7] px-3 py-1.5 rounded text-[#5D5D5D] text-xs md:text-sm font-medium">Filter</button>
      </div>
    </div>
  );
}
