import Navbar from "@/components/common/Navbar";
import FaqSection from "@/components/layout/FaqSection";
import Footer from "@/components/layout/Footer";
import StepByStepSection from "@/components/layout/StepByStepSection";

export default function Page() {

    return (
        <>
            <Navbar />

            <section className="p-6 md:px-15 pt-28 mt-24 flex gap-14 md:gap-32 justify-center w-full flex-col md:flex-row">
                <h1 className="text-headline-x-large leading-12.5 font-bold text-primary-950 text-left">
                    <span>Building More</span>
                    <br />
                    <span>Than an <span className="text-primary-600">e-Library</span></span>
                </h1>
                <p className="text-body-18px-large font-light text-left max-w-[34rem]">A decentralized world where stories live on-chain and creators stay in control. Powered by StarkNet, our platform gives writers the freedom to publish without intermediaries and gives readers direct access to original, verifiable content they can truly own.</p>
            </section>

            <StepByStepSection />

            <section className="px-6 py-18 md:px-15 md:py-50 w-full grid place-content-center">
                <FaqSection />
            </section>

            <Footer />
        </>
    )
}
