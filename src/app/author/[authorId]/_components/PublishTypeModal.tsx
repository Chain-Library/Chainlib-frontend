import CustomLink from "@/app/_components/CustomLink";
import { pubType } from "@/types/types";
import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";

interface PublishTypeModalProps {
  onClose?: () => void;
  onSelect: (type: pubType) => void;
}

const PublishTypeModal: React.FC<PublishTypeModalProps> = ({
  onClose,
  onSelect,
}) => {

  return (
    <div className=" cursor-pointer fixed inset-0 bg-[#000000d7] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-4xl max-w-[85vw] z-55">
        <div className="flex justify-end mb-2">
          {onClose ? <button
            onClick={onClose}
            className="cursor-pointer hover:text-gray-600 text-gray-400 border p-2 rounded-md"
          >
            <X size={16} />
          </button> : <CustomLink
            route="/"
            classname="cursor-pointer hover:text-gray-600 text-gray-400 border p-2 rounded-md"
          >
            <X size={16} />
          </CustomLink>}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#3d3d3d] mb-2">
            What Masterpiece Would You Like to Create
          </h2>
          <p className="text-neutral-600">
            Choose the type of story you&apos;re ready to bring to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* E-Book Option */}
          <PublishTypeSelection head={pubType.EBOOK} icon="/create1.svg" onSelect={onSelect} />

          {/* NFT Option */}
          <PublishTypeSelection head={pubType.NFT} icon="/create2.svg" onSelect={onSelect} />

          {/* Series Option */}
          <PublishTypeSelection head={pubType.SERIES} icon="/create3.svg" onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
};

function PublishTypeSelection({ head, icon, onSelect }: { icon: string, head: pubType; onSelect: (x: pubType) => void }) {
  return (<div onClick={() => onSelect(head)}
    className="flex relative h-full justify-between flex-col border border-neutral-100 md:p-4 p-3 rounded-small">
    <div className="md:mb-8">
      <div className="rounded-small bg-primary-50 py-2 md:py-7.5 flex flex-col items-center justify-center mb-2 md:mb-6">
        <div className="relative size-15 rounded-small flex items-center justify-center">
          <Image src={icon} fill alt={`${head} icon image`} />
        </div>
      </div>
      <h3 className="font-semibold text-center md:text-start text-lg md:mb-2">{head}</h3>
      <p className="text-sm hidden md:block text-neutral-600">
        {head === "E-Book" ? "Publish a standalone digital book and make it instantly available to readers to use." : "Start a book series and release your story in multiple parts over time."}
      </p>
    </div>
    <button
      className="bg-primary-700 hidden md:block hover:bg-primary-600 text-white w-fit py-2.5 px-5 rounded-base cursor-pointer self-center"
    >
      {head === "E-Book" ? "Create E-Book" : "Create Series"}
    </button>
  </div>)
}

export default PublishTypeModal;
