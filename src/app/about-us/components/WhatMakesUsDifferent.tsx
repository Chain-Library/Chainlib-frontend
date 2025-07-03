import React from "react";
import DecentralizedIcon from "@/app/svg/DecentralizedIcon";
import NftCircleIcon from "@/app/svg/NftCircleIcon";
import RewardIcon from "@/app/svg/RewardIcon";
import SmartContractIcon from "@/app/svg/SmartContractIcon";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.FC;
  title: string;
  description: string;
}) => (
  <div className="bg-[#F5FAFD] border-[0.5px] border-[#D6ECFF] px-4 py-2 rounded-lg flex items-center gap-x-8">
    <Icon />
    <div className="max-w-[255px]">
      <h3 className="text-base font-bold text-[#000B21] mb-2">{title}</h3>
      <p className="text-[#5D5D5D] text-sm/[18px]">{description}</p>
    </div>
  </div>
);

function WhatMakesUsDifferent() {
  return (
    <section className="py-[60px] px-6 md:px-[60px]">
      <div className="flex flex-col md:flex-row gap-x-[110px]">
        <h2 className="text-[40px] font-bold text-[#0F265C] max-w-[356px]">
          What Makes Us Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <FeatureCard
            icon={DecentralizedIcon}
            title="Decentralized Storage"
            description="Books live on IPFS, never locked behind servers."
          />
          <FeatureCard
            icon={NftCircleIcon}
            title="NFT Publishing"
            description="Every published work is a tradable asset, linked to a tokenbound account."
          />
          <FeatureCard
            icon={SmartContractIcon}
            title="Smart Contracts"
            description="Royalties, rights, and revenue handled transparently and automatically."
          />
          <FeatureCard
            icon={RewardIcon}
            title="Reader Rewards"
            description="Read, review, and grow your rank in our engaged reading community."
          />
        </div>
      </div>
    </section>
  );
}

export default WhatMakesUsDifferent;
