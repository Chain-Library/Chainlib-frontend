"use client";

import type React from "react";

type GenreTagProps = {
  name: string;
  selected: boolean;
  onClick: () => void;
};

function GenreTag({ name, selected, onClick }: GenreTagProps): React.JSX.Element {
  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-md text-sm ${
        selected ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
      } cursor-pointer`}
      onClick={onClick}
    >
      {name}
      {selected && <span className="ml-1 text-xs">×</span>}
    </div>
  );
}
export default GenreTag;
