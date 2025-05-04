import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import StepByStepSection from "./_components/StepByStepSection";

export default function Page() {

    return (
        <>
            <Navbar />

            <header className="px-6 lg:px-15 mt-54 sm:mt-40 lg:mt-54 mb-35 sm:mb-28 lg:mb-35 flex gap-14 xl:gap-32 justify-center md:items-center w-full flex-col lg:flex-row">
                <h1 className="text-headline-x-large leading-12.5 font-bold text-primary-950 text-left sm:text-center lg:text-left">
                    <span>Building More</span>
                    <br />
                    <span>Than an <span className="text-primary-600">e-Library</span></span>
                </h1>
                <p className="text-body-18px-large font-light text-left max-w-[34rem] sm:text-center lg:text-left">A decentralized world where stories live on-chain and creators stay in control. Powered by StarkNet, our platform gives writers the freedom to publish without intermediaries and gives readers direct access to original, verifiable content they can truly own.</p>
            </header>

            <StepByStepSection />

            <section className="px-6 py-18 md:px-15 md:py-50 w-full grid place-content-center">
                <FaqSection />
            </section>

            <Footer />
        </>
    )
}
