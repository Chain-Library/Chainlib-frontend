import Link from "next/link";
import Image from "next/image";
import Image4 from "@/assets/Images/ImageLogo.png";
import Linkedin from "@/app/svg/Linkedin";
import Telegram from "@/app/svg/Telegram";
import X from "@/app/svg/X";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-white mx-[60px] border-t-[#E7E7E7] border-t-[1px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center mb-10">
            <Image
              src={Image4}
              alt="ChainLib"
              width={120}
              height={32}
              className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center mr-2"
            />
            <h2 className="text-[#0F265C] text-xl font-bold">ChainLib</h2>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/chain_lib?s=21"
              target="_blank"
              className="text-[#FDFDFD] hover:text-white transition-colors"
            >
              <button className="w-[50px] h-[50px] rounded-full border border-[#5D5D5D] flex items-center justify-center text-[#454545]">
                <X />
              </button>
            </Link>

            <Link
              href="https://t.me/+yQXwTqAFvJBkNGRk"
              target="_blank"
              className="text-[#FDFDFD] hover:text-white transition-colors"
            >
              <button className="w-[50px] h-[50px] rounded-full border border-[#5D5D5D] flex items-center justify-center text-[#454545]">
                <Telegram />
              </button>
            </Link>
            <Link
              href="https://t.me/+yQXwTqAFvJBkNGRkll"
              target="_blank"
              className="text-[#FDFDFD] hover:text-white transition-colors"
            >
              <button className="w-[50px] h-[50px] rounded-full border border-[#5D5D5D] flex items-center justify-center text-[#454545]">
                <Linkedin />
              </button>
            </Link>
          </div>
          <div className="mt-7">
            <div className="text-sm">&copy; Copyright Chainlib {year}</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 text-sm">
          <div>
            <h3 className="text-gray-500 font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-700 hover:text-blue-900 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-gray-700 hover:text-blue-900 cursor-pointer"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-700 hover:text-blue-900 cursor-pointer"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-700 hover:text-blue-900 cursor-pointer"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
