import { Header } from "@/components/dashboard/header";
import { Pencil } from "lucide-react";
import AdminTable from "./components/AdminTable";
function page() {
  return (
    <>
      <Header title="Notification" />
      <div className="p-6 font-normal text-sm flex flex-col gap-y-10">
        <div className="bg-white p-4 rounded-[8px] flex justify-between items-center">
          <div className="flex gap-x-6">
            <div className="w-[80px] h-[80px] bg-[#D9D9D9] rounded-full"></div>
            <div className="flex flex-col gap-y-.5">
              <h3 className="flex items-center gap-x-2 font-bold text-lg text-[#454545]">
                Anna Loop <Pencil size={16} />
              </h3>
              <p className="text-[#454545] text-base">annaloop@gmail.com</p>
              <div className="py-.5 px-3 rounded-full text-[#5D5D5D] bg-[#F6F6F6] w-fit text-sm">
                Super Admin
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#5D5D5D] mb-4">
              Authorized wallet address
            </p>
            <div className="py-[10px] px-3 flex items-center gap-x-3 text-[#5D5D5D] border-[.5px] border-[#D1D1D1] rounded-full">
              <img src="/braavos.svg" alt="" />
              0xA3B4…29ABn
            </div>
          </div>
        </div>

        <AdminTable />
      </div>
    </>
  );
}

export default page;
