"use client";

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center">
        <FiSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </form>
  );
}
// "use client"

// import clsx from "clsx"
// import { useEffect, useRef, useState } from "react"
// import { BiSolidSearch } from "react-icons/bi"

// function SearchBar() {
//     const [active, setActive] = useState(false)

//     const searchRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         function handleClickOutside(event: MouseEvent) {
//             if (searchRef.current && !(searchRef.current).contains(event.target as Node)) {
//                 setActive(false)
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside)
//         return () => document.removeEventListener("mousedown", handleClickOutside)
//     }, [])

//     return (
//         <div ref={searchRef} onClick={() => setActive(() => true)} className={clsx(
//             "cursor-pointer hover:bg-neutral-50 border border-neutral-300 py-3 px-3.5 rounded-small text-neutral-300 shadow-base flex items-center transition-all duration-300 ease-in-out",
//             { "bg-neutral-50": active }
//         )}>
//             <BiSolidSearch size={24} />
//             <div className={clsx(
//                 "overflow-hidden transition-all duration-300 ease-in-out",
//                 active ? "w-48 opacity-100 ml-3" : "w-0 opacity-0"
//             )}>
//                 <input className="w-full bg-transparent outline-none placeholder:text-neutral-300 text-body-large text-neutral-900 font-light" placeholder="What are you looking for" autoFocus={active} />
//             </div>
//         </div>
//     )
// }

// export default SearchBar
