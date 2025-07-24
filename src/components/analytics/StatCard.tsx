"use client"
import Icon from "./Icon";

type StatCardProps = {
  title: string,
  value: string,
  icon: "briefcase" | "book" | "users" | "wallet",
  color: string,
  textColor: string,
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  textColor,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
      <div className={`p-3 rounded-lg ${color} mr-4`}>
        <Icon name={icon} className={`w-6 h-6 ${textColor}`} />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};
export default StatCard;
