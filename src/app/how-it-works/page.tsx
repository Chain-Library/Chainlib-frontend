import NavBar from "@/components/landingpage/NavBar";
import FaqSection from "./_components/FaqSection";
import StepByStepSection from "./_components/StepByStepSection";
import Footer from "@/components/landingpage/Footer";

export default function Page() {
  return (
    <>
      <NavBar />
      <header className="px-6 lg:px-15 py-40 flex gap-14 xl:gap-32 justify-center md:items-center w-full flex-col lg:flex-row">
        <h1 className="text-headline-x-large leading-12.5 font-bold text-primary-950 text-left sm:text-center lg:text-left">
          <span>Building More</span>
          <br />
          <span>
            Than an <span className="text-primary-600">e-Library</span>
          </span>
        </h1>
        <p className="text-body-18px-large font-light text-left max-w-[34rem] text-[#3D3D3D] sm:text-center lg:text-left">
          A decentralized world where stories live on-chain and creators stay in
          control. Powered by StarkNet, our platform gives writers the freedom
          to publish without intermediaries and gives readers direct access to
          original, verifiable content they can truly own.
        </p>
      </header>

      <StepByStepSection />

      <section className="px-6 py-18 md:px-15 md:py-50 w-full grid place-content-center">
        <FaqSection />
      </section>
      <Footer />
    </>
  );
}
