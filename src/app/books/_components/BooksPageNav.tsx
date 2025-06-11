import { Button } from "@/components/ui/button";

interface BooksPageNavProps {
    setDisplayedSection: React.Dispatch<React.SetStateAction<string>>;
    displayedSection: string;
}

export default function BooksPageNav({ setDisplayedSection, displayedSection }: BooksPageNavProps) {
    const buttons = ["New Release", "Trending", "NFT Edition", "Explore"]

    return (
        <header className="w-full flex flex-col-reverse gap-y-6 md:flex-row items-start md:items-center justify-start md:justify-between py-4">
            <ul className="flex justify-start items-center gap-y-2 gap-4 flex-wrap">
                {buttons.map((button, index) => (
                    <li key={index}>
                        <Button onClick={() => setDisplayedSection(button)} variant={"outline"} className={`cursor-pointer ${displayedSection === button ? "bg-accent" : ""} `}  > {button} </Button>
                    </li>
                ))}
            </ul>
        </header>
    )
}