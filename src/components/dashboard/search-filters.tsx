import { ChevronRight, Search } from "lucide-react";

export function SearchFilters() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-20">
        <div className="relative w-80">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b0b0b0]"
            size={18}
          />
          <input
            type="text"
            placeholder="What are we looking for"
            className="w-full pl-10 pr-4 py-2.5 border border-[#e7e7e7] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#096cff]"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#5d5d5d]">Book Type</span>
            <button className="flex items-center gap-1 px-2 py-1.5 ">
              <ChevronRight className="rotate-90" size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[#5d5d5d]">Status</span>
            <button className="flex items-center gap-1 px-2 py-1.5">
              <ChevronRight className="rotate-90" size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[#5d5d5d]">Genre</span>
            <button className="flex items-center gap-1 px-2 py-1.5">
              <ChevronRight className="rotate-90" size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[#5d5d5d]">Collaborations</span>
            <button className="flex items-center gap-1 px-2 py-1.5 ">
              <ChevronRight className="rotate-90" size={16} />
            </button>
          </div>
        </div>
      </div>

      <button className="px-10 py-2.5 bg-[#096cff] text-white rounded-md font-medium">
        Publish a Book
      </button>
    </div>
  );
}
