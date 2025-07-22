import { BookOpen } from "lucide-react";
import { Header } from "@/components/dashboard/header";
import StarknetProvider from "@/components/blockchain/StarknetProviders";
import { WalletProvider } from "@/components/blockchain/wallet-connect-context";


export default function Dashboard() {
 
  return (
    <StarknetProvider>
      <WalletProvider>
        <div>
          <Header title="Dashboard" />
          <div className="p-6 mt-16">
            <div className="bg-white p-6 rounded-lg border border-[#e7e7e7] mb-8">
              <h3 className="font-semibold mb-4">Monthly Sales</h3>
              <div className="h-64 bg-[#f6f6f6] rounded-lg flex items-center justify-center">
                <p className="text-[#5d5d5d]">
                  Sales chart would be displayed here
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-[#e7e7e7]">
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 bg-[#f6f6f6] rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#edf7ff] flex items-center justify-center">
                        <BookOpen className="text-[#096cff]" size={18} />
                      </div>
                      <div>
                        <div className="font-medium">New book published</div>
                        <div className="text-sm text-[#5d5d5d]">
                          Native Invisibility - 2 hours ago
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#e7e7e7]">
                <h3 className="font-semibold mb-4">Top Performing Books</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-3 bg-[#f6f6f6] rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-md"></div>
                        <div>
                          <div className="font-medium">Native Invisibility</div>
                          <div className="text-sm text-[#5d5d5d]">
                            124 sales this month
                          </div>
                        </div>
                      </div>
                      <div className="font-medium">$1,240</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </WalletProvider>
    </StarknetProvider>
  );
}
