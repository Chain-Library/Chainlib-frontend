import { Info } from "lucide-react";

export function BadgeSection() {
  const progress = 65; // You can make this dynamic later

  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl font-bold text-gray-500 mb-4">Badge</h2>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-sm text-[#5d5d5d]">Rank</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#5d5d5d]">Next</span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3 gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#f0f0f0] rounded-full text-xs md:text-sm border-[0.5px] border-blue-600 text-[#5d5d5d]">
              <div className="rounded-full h-4 w-4 bg-gray-300"></div>
              Enthusiast
            </div>
          </div>
          
          {/* Desktop Progress Bar */}
          <div className="relative flex-1 hidden lg:flex">
            <div className="relative w-full bg-[#e7e7e7] rounded-full h-1 overflow-visible">
              <div
                className="bg-[#096CFF] h-1 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
              
              {/* Percentage Text - Positioned directly on the bar */}
              <div
                className="absolute top-1/2 text-xs font-bold text-gray-400 transition-all duration-500 z-10 px-2 py-1 roundedlg bg-[#F6F6F6] backdrop-blur-sm whitespace-nowrap shadow-lg"
                style={{
                  left: `${progress}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {progress}%
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#f0f0f0] rounded-full text-xs lg:text-sm text-[#5d5d5d]">
              <div className="rounded-full h-4 w-4 bg-gray-300"></div>
              Bookworm
            </div>
          </div>
        </div>
        
        {/* Mobile Progress Bar */}
        <div className="relative flex-1 flex lg:hidden">
          <div className="relative w-full bg-[#e7e7e7] rounded-full h-1 overflow-visible">
            <div
              className="bg-[#096CFF] h-1 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
            
            {/* Percentage Text - Positioned directly on the bar */}
            <div
              className="absolute top-1/2 text-xs font-bold text-white transition-all duration-500 z-10 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm whitespace-nowrap shadow-lg"
              style={{
                left: `${progress}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}