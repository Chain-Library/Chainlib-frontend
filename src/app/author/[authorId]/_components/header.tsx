import CustomLink from "@/app/_components/CustomLink";
import Logo from "@/app/_components/Logo";
import { BadgeCheck, Bell, MoveLeft } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  button?: boolean
  onClick?: () => void
}

export function Header({ title, button = false, onClick }: HeaderProps) {

  return (
    <header className="py-4 md:py-2 md:pr-15 px-6 bg-background border-0.5 border-neutral-100 shadow-base flex flex-col w-full md:flex-row items-center md:justify-between justify-start gap-y-4">
      <div className="hidden md:flex self-start items-center gap-4.5 h-12">
        {button && <button onClick={onClick} className="py-1 px-2.5 cursor-pointer rounded-md border border-neutral-400">
          <MoveLeft className="size-6 text-neutral-400" />
        </button>}
        <h1 className="text-body-18px-large font-bold text-neutral-500">{title}</h1>
      </div>

      <div className="w-full md:w-fit flex justify-between items-center space-x-4">
        {/* Notification bell */}
        <CustomLink route="notifications" classname="text-gray-500 relative cursor-pointer hover:text-gray-700 hidden md:block">
          <Bell className="size-6 text-[#5D5D5D]" fill="currentColor" />
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 font-bold text-label-xs text-white">
            1
          </span>
        </CustomLink>

        {/* Profile */}
        <div className="flex w-full items-center justify-between border border-neutral-100 rounded-md md:p-1">
          <div className="md:hidden flex gap-6">
            <div className="size-12" />
            <Logo />
          </div>
          <div className="relative size-12 rounded-full md:rounded-md overflow-hidden border border-gray-200">
            <Image src="/user1.svg" alt="Profile" fill className="h-full w-full object-cover" />
          </div>
          <div className="hidden md:block ml-2">
            <p className="text-sm font-medium text-gray-800">Joseph Yanum</p>
            <p className="text-xs text-gray-500">@joeyanum</p>
          </div>
          <BadgeCheck className="hidden md:block size-5 ml-3 text-[#218DFF]" />
        </div>
      </div>

    </header>
  );
}

