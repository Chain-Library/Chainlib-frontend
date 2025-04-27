import Navbar from "@/components/common/Navbar";
import SelectOption from "@/components/common/SelectOption";
import FaqSection from "@/components/layout/FaqSection";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function page() {
    return (
        <>
            <Navbar />
            <section className="pt-28 mt-24 flex gap-32 justify-center w-full">
                <h1 className="text-headline-x-large leading-12.5 font-bold text-primary-950 text-left">
                    <span>Building More</span>
                    <br />
                    <span>Than an <span className="text-primary-600">e-Library</span></span>
                </h1>
                <p className="text-body-18px-large font-light text-left max-w-[34rem]">A decentralized world where stories live on-chain and creators stay in control. Powered by StarkNet, our platform gives writers the freedom to publish without intermediaries and gives readers direct access to original, verifiable content they can truly own.</p>
            </section>

            <section className="pt-35 w-full flex flex-col justify-center items-center">
                <SelectOption />

                <div className="grid grid-cols-2 gap-28">
                    <div className="grid grid-cols-[2.5rem_auto] gap-10 place-content-start max-w-md pt-42">
                        <div className="flex flex-col justify-center items-center gap-0 w-fit">
                            <span className="rounded-full size-10 grid place-content-center bg-primary-950 font-bold text-background">1</span>
                            <div className="w-0.75 bg-primary-900 h-64"></div>
                        </div>
                        <div>
                            <h2 className="text-title-large font-bold text-primary-950 mb-4">
                                Sign Up & Connect Wallet
                            </h2>
                            <p className="text-body-large font-light">
                                Join ChainLib as a writer by connecting your StarkNet wallet (e.g., Braavos or Argent).
                            </p>
                        </div>
                    </div>

                    <div className="relative p-5">
                        <Image alt="Sign up and connect wallet image" src="./HIWSignup.svg" width={360} height={360} className="ml-12" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-28 mt-25">
                    <div className="relative p-5 -ml-21">
                        <Image alt="Login up and connect wallet image" src="./HIWLogin.svg" width={360} height={360} className="" />
                    </div>

                    <div className="grid grid-cols-[2.5rem_auto] gap-10 place-content-start max-w-md pt-42">
                        <div className="flex flex-col justify-center items-center gap-0 w-fit">
                            <span className="rounded-full size-10 grid place-content-center bg-primary-950 font-bold text-background">1</span>
                            <div className="w-0.75 bg-primary-900 h-64"></div>
                        </div>
                        <div>
                            <h2 className="text-title-large font-bold text-primary-950 mb-4">
                                Join & Connect Wallet
                            </h2>
                            <p className="text-body-large font-light">
                                Sign up quickly with your wallet and start exploring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-50 w-full grid place-content-center">
                <FaqSection />
            </section>

            <Footer />
        </>
    )
}
