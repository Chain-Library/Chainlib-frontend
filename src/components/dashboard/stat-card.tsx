import Image from "next/image";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: string; // Ensure `icon` is a string for compatibility with `next/image`
  iconColor?: string;
  iconBgColor?: string;
  badgeValue?: string | number;
  badgeColor?: string;
}

export function StatCard({
  title,
  value,
  icon,
  badgeValue,
  badgeColor,
}: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-[#e7e7e7]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#5d5d5d]">{title}</span>
        {icon ? (
          <div className="rounded-md flex items-center justify-center">
            <Image src={icon} alt="icon" width={24} height={24} />
          </div>
        ) : badgeValue ? (
          <div className="w-6 h-6 bg-[#f6f6f6] rounded-md flex items-center justify-center">
            <span className="text-xs font-medium" style={{ color: badgeColor }}>
              {badgeValue}
            </span>
          </div>
        ) : null}
      </div>
      <div className="text-2xl font-semibold" style={{ color: badgeColor }}>
        {value}
      </div>
    </div>
  );
}
