"use client";

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import { Ref, useState } from 'react';
import { BiSolidSearch } from 'react-icons/bi';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false)

  const searchRef = useOutsideClick(() => setShowInput(false)) as Ref<HTMLFormElement>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={searchRef} className="transition-all shadow-small duration-300 ease-in-out w-fit md:max-w-md flex items-center origin-right justify-start group border border-gray-200 rounded-lg group-focus:ring-blue-500 group-focus:border-transparent group-focus:outline-none focus:ring-2 p-3" onClick={() => setShowInput(true)}>
      <BiSolidSearch size={24} className="cursor-pointer md:size-8 text-neutral-600" />

      <div className={cn(
        "overflow-hidden transition-all md:origin-left origin-right  duration-300 ease-in-out",
        showInput ? "w-full opacity-100 ml-2" : "w-0 opacity-0"
      )}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          className="w-full group placeholder:text-neutral-300 text-body-large text-neutral-900 font-light outline-none md:text-body-18px-large"
          placeholder={placeholder}
          autoFocus={showInput} />
      </div>
    </form>
  );
}

export default SearchBar
