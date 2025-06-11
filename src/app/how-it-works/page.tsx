import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Vision from "../_components/Vision";
import FaqSection from "./_components/FaqSection";
import StepByStepSection from "./_components/StepByStepSection";

export default function Page() {

    return (
        <>
            <Navbar />

            <header className="px-6 lg:px-15 mt-54 sm:mt-40 lg:mt-54 mb-35 sm:mb-28 lg:mb-35 flex gap-14 xl:gap-32 justify-center md:items-center w-full flex-col lg:flex-row">
                <Vision />
            </header>

            <StepByStepSection />

            <section className="px-6 py-18 md:px-15 md:py-50 w-full grid place-content-center">
                <FaqSection />
            </section>

            <Footer />
        </>
    )
}
