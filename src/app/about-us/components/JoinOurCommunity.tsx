import Image from "next/image";
import React from "react";
import Imagetiny1 from "@/assets/Images/1.png";
import Imagetiny2 from "@/assets/Images/2.png";
import Imagetiny4 from "@/assets/Images/4.png";
import Imagetiny5 from "@/assets/Images/5.png";
import Image3 from "@/assets/Images/footerimage.png";

const avatarImages = [
  Imagetiny5,
  Imagetiny1,
  Imagetiny2,
  Imagetiny4,
  Imagetiny1,
];

function JoinOurCommunity() {
  return (
    <section className="pt-[160px] pb-[208px] flex justify-center gap-x-[60px] items-center">
      <div className="max-w-[435px]">
        <h2 className="text-[40px] font-bold text-[#0F265C] mb-8 leading-[110%]">
          Join Our Community of Book Lovers
        </h2>

        <button className="bg-[#096CFF] text-white px-8 py-4 rounded-[16px] text-sm mb-[60px] flex items-center justify-center space-x-2">
          <span>Join Community</span>
          <span className="inline-flex items-center">
            <svg
              width="18"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-auto"
            >
              <path
                d="M17.6 1.4L23.2 7H0V9H23.2L17.6 14.6L19 16L27 8L19 0L17.6 1.4Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        <div className="flex items-center gap-x-[53px] mt-8 bg-[#D6ECFF] p-6 rounded-[8px]">
          <div>
            <p className="text-[#000B21] text-lg/[26px] mb-4 font-normal">
              Our Community
            </p>
            <div className="flex -space-x-2 mr-4">
              {avatarImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className="h-8 w-8 rounded-full bg-red-400 overflow-hidden"
                >
                  <Image
                    src={imgSrc}
                    alt={`Community member ${index + 1}`}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[28px] leading-[36px] mb-1 font-bold text-[#0F265C]">
              40k+
            </p>
            <p className="text-[#454545] text-sm">Book lovers Joined</p>
          </div>
        </div>
      </div>

      <Image
        src={Image3}
        alt="Readers community photo"
        className="object-cover rounded-lg w-[513px] h-[380px]"
      />
    </section>
  );
}

export default JoinOurCommunity;
