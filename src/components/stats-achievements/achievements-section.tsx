import { Trophy, Flame, Target, Star } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "10 Books Read in a Month",
      color: "#DBA736",
      bgColor: "#DBA7361A",
    },
    {
      icon: Trophy,
      title: "6 Days Reading Streak",
      color: "#A22BD1",
      bgColor: "#A22BD11A",
    },
    {
      icon: Trophy,
      title: "3 Genres Mastered",
      color: "#388405",
      bgColor: "#3884051A",
    },
    {
      icon: Trophy,
      title: "Enthusiast",
      color: "#096CFF",
      bgColor: "#096CFF1A",
    },
  ]

  return (
    <div className=" p-4 lg:p-6">
      <h2 className="text-lg font-semibold text-[#888888] mb-4">Achievements</h2>

      <div className="flex flex-col lg:flex-row gap-4 flex-wrap">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon
          return (
            <div
              key={index}
              className="flex w-fit  items-center text-center pl-2 pr-4 py-1 rounded-[20px] hover:shadow-sm transition-all duration-200"
              style={{ backgroundColor: achievement.bgColor }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center "
                style={{ backgroundColor: achievement.color + "20" }}
              >
                <IconComponent className="w-4 h-4" style={{ color: achievement.color }} />
              </div>
              <span className="text-xs font-medium text-[#5D5D5D] leading-tight">{achievement.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
