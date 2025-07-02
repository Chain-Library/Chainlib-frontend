import React from "react";

const SectionCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="max-w-[616px]">
    <h2 className="font-semibold mb-2 border-[#096CFF] border-[0.5px] py-2 px-4 text-[#000B21] text-sm/5 bg-[#096CFF3D] rounded-[8px] w-fit">
      {title}
    </h2>
    <p className="text-[#5D5D5D] text-[18px]/[26px]">{content}</p>
  </div>
);

function WhatIsChainLib() {
  return (
    <section className="py-[120px] px-[60px] flex justify-between md:flex-row flex-col gap-8">
      <SectionCard
        title="What is Chainlib?"
        content="Chainlib is a new marketplace built on the Polygon blockchain, where authors can publish books and readers can support them directly. We eliminate middlemen, ensure fair compensation, and provide a platform where creativity thrives and readers discover unique voices."
      />
      <SectionCard
        title="Why Chainlib Exists?"
        content="We believe creators deserve fair pay for their publications. ChainLib empowers authors to earn more from their work and give readers direct access to their favorite writers. By using blockchain technology, we've created a transparent and decentralized way of supporting literary creation and readership."
      />
    </section>
  );
}

export default WhatIsChainLib;
