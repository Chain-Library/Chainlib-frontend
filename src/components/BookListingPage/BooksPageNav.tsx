import { Button } from "../ui/button";


export default function BooksPageNav() {

    const buttons = ["New Release", "Trending", "NFT Edition", "Explore"]


    return (
        <nav  className="w-full min-h-[65px] flex items-center justify-start px-[20px] md:px-[60px] py-4 gap-4 border-[0.5px] border-[#D1D1D1] flex-wrap " >
           {buttons.map((button, index) => (
            <Button key={index} variant={"outline"} className="cursor-pointer" > {button} </Button>
           ))}
        </nav>
    )
}