import { Plus, Trophy } from "lucide-react";

export function GoalsSection() {
  const goals = [
    {
      title: "Complete 4 books in 2 weeks",
      progress: 48,
      daysLeft: 7,
      color: "#84CDFF",
    },
    {
      title: "Finish Reading the Book Last Man in 4 days",
      progress: 89,
      daysLeft: 7,
      color: "#84CDFF",
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#888888]">Goals</h2>
        <button className="flex items-center gap-2 bg-gradient-to-b from-[#EDF7FF] via-[#EDF7FF] to-[#096CFF] text-sm font-medium hover:bg-[#f8f9ff] px-3 py-1.5 rounded-md transition-colors">
          <Plus className="w-4 h-4" />
          Set new goal
        </button>
      </div>

      <div className="space-y-4 ">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="space-y-2 px-2  lg:px-6 py-4 rounded-md border-[0.5px] border-blue-600 "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                {" "}
                <span className="text-xs lg:text-sm text-[#5D5D5D] font-medium">
                  {goal.title}
                </span>{" "}
                <div className="text-right text-xs lg:text-sm text-[#5d5d5d]">
                  {goal.progress}%
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-1 text-sm text-[#5d5d5d]">
                <div className="p-1 rounded-full bg-[#DBA7361A]">
                  <Trophy className="w-4 h-4  text-[#DBA736]" />
                </div>
                <span>{goal.daysLeft} Days Left</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full bg-[#e7e7e7] rounded-full h-1">
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: `${goal.progress}%`,
                    backgroundColor: goal.color,
                  }}
                ></div>
              </div>
              <div className="flex lg:hidden items-center gap-1 text-xs  lg:text-sm mt-3 text-[#5d5d5d]">
                <div className="p-1 rounded-full bg-[#DBA7361A]">
                  <Trophy className="w-2 h-2  text-[#DBA736]" />
                </div>
                <span>{goal.daysLeft} Days Left</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
