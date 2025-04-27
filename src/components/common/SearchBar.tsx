import { BiSolidSearch } from "react-icons/bi";


function SearchBar() {
    return (
        <button className="cursor-pointer hover:bg-neutral-50 border-1 radius-x-small border-neutral-300 py-3 px-3.5 text-neutral-300 flex justify-center items-center rounded-small">
            <BiSolidSearch size={24} />
        </button>
    )
}


export default SearchBar;