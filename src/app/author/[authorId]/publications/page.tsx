import { Header } from "../_components/header";

function Page() {
    return (
        <div>
            <Header title="Your Published Books" />

            <div className="p-6">
                <p className="text-gray-600">
                    This is the publication page. You can view your published books here.
                </p>
            </div>
        </div>
    );
}
export default Page;