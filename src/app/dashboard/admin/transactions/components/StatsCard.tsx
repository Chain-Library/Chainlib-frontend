import Image from "next/image";

interface StatsCardProps {
  title: string;
  value: string;
  currency?: string;
  growth?: string;
  variant?: "default" | "primary";
  size?: "small" | "large";
  currencyTextSize?: string;
  currencyFontWeight?: string;
  classname?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  currency,
  growth,
  variant = "default",
  size = "large",
  currencyTextSize = "text-sm",
  currencyFontWeight = "font-normal",
}) => {
  const cardClass =
    variant === "primary"
      ? "bg-[#edf7ff] border-[#edf7ff]"
      : "bg-white border-gray-200";

  const textSize = size === "large" ? "text-3xl" : "text-lg";
  const paddingClass = size === "large" ? "p-6" : "p-4";
  const heightClass = size === "large" ? "h-full" : "h-20";
  const alignmentClass = size === "large" ? "justify-center items-center text-center" : "justify-center";

  return (
    <div
      className={`${heightClass} ${paddingClass} rounded-lg border ${cardClass} flex flex-col ${alignmentClass}`}
    >
      <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
      <div className="flex items-center gap-2 mb-2">
        {currency && (
          <Image src="/starknet.png" alt="strk" width={20} height={20} />
        )}
        <span className={`${textSize} font-bold text-blue-600`}>
          {value} {currency && <span className={`${currencyTextSize} ${currencyFontWeight} text-blue-600`}>{currency}</span>}
        </span>
      </div>
      {growth && (
        <span className="text-[#1cc088] border-0 border-[#d3f0f0] bg-[#d3f0f0] px-2 py-1 rounded-full text-[12px] w-fit">
          {growth}
        </span>
      )}
    </div>
  );
};

export default StatsCard;
