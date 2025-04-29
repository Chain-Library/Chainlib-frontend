import { Button } from "../ui/button";



interface BooksPageNavProps{
    setDisplayedSection: React.Dispatch<React.SetStateAction<string>>;
    displayedSection: string;
}

export default function BooksPageNav({ setDisplayedSection, displayedSection}: BooksPageNavProps ) {

    const buttons = ["New Release", "Trending", "NFT Edition", "Explore", "All"]


    return (
        <nav  className="w-full min-h-[65px] flex items-center justify-start px-[20px] md:px-[60px] py-4 gap-4 border-[0.5px] border-[#D1D1D1] flex-wrap " >
           {buttons.map((button, index) => (
            <Button onClick={() => setDisplayedSection(button)} key={index} variant={"outline"} className={`cursor-pointer ${displayedSection === button? "bg-accent" : null} `}  > {button} </Button>
           ))}
        </nav>
    )
}