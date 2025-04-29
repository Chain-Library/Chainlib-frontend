import { Bell } from "lucide-react";
import Image from "next/image";
import user from "../../../public/user1.svg";
import check from "../../../public/check.svg";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white p-4 border-b border-[#e7e7e7] flex items-center justify-between">
      <h1 className="text-xl font-semibold text-[#000b21]">{title}</h1>

      <div className="flex items-center gap-4 space-x-3">
        <div className="relative">
          <Bell className="text-[#5d5d5d] cursor-pointer" size={20} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff5c5c] rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 border p-1 border-[#E7E7E7] rounded">
          <div className="w-8 h-8 rounded-sm bg-[#dba736] flex items-center justify-center overflow-hidden">
            <Image
              src={user}
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1">
              <span className="font-medium">Joseph Yanum</span>
              <Image src={check} alt="Profile" className="object-cover" />
            </div>
            <span className="text-[#888888] text-xs">@joeyyanum</span>
          </div>
        </div>
      </div>
    </header>
  );
}
