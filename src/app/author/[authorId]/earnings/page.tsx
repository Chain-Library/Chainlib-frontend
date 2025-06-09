import { Header } from "../_components/header";


function Page() {
  return (
    <div>
      <Header title="Earnings" />

      <div className="p-6">
        <p className="text-gray-600">
          This is the earnings page. You can view your earnings here.
        </p>
      </div>
    </div>
  );
}
export default Page;