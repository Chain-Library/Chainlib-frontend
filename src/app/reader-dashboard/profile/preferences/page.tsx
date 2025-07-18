// PreferencesPage.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";

const allGenres = [
  "Fiction",
  "Drama",
  "Horror",
  "Comedy",
  "Sci-Fi",
  "Fantasy",
  "Romance",
  "Mystery",
  "Thriller",
  "Non-Fiction",
];
const allFormats = [
  "short stories",
  "novels",
  "poetry",
  "essays",
  "biographies",
  "memoirs",
];

export default function PreferencesPage() {
  const router = useRouter();
  const { openMobileMenu } = useMobileMenu();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([
    "Fiction",
    "Drama",
  ]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([
    "short stories",
  ]);
  const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
  const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false);

  const handleGenreSelect = (genre: string) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    }
    setIsGenreDropdownOpen(false);
  };

  const handleFormatSelect = (format: string) => {
    if (!selectedFormats.includes(format)) {
      setSelectedFormats([...selectedFormats, format]);
    }
    setIsFormatDropdownOpen(false);
  };

  const removeGenre = (genre: string) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  const removeFormat = (format: string) => {
    setSelectedFormats(selectedFormats.filter((f) => f !== format));
  };

  const handleSave = () => {
    console.log("Saving preferences:", { selectedGenres, selectedFormats });
  };

  const handleCancel = () => {
    setSelectedGenres(["Fiction", "Drama"]);
    setSelectedFormats(["short stories"]);
  };

  return (
    <div className="bg-white min-h-screen m-4 md:m-6 rounded-xl">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-50 p-4 flex items-center gap-3">
        <button onClick={openMobileMenu} className="p-1">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Preference</h1>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-start gap-3 mb-10">
          <h1 className="text-xl font-semibold text-gray-800">Preferences</h1>
        </div>

        <div className="space-y-8">
          {/* Genre Specialization */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-3">
              Genre specialization(s)
            </label>

            <div className="relative mb-4">
              <button
                onClick={() => setIsGenreDropdownOpen(!isGenreDropdownOpen)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <span className="text-gray-400">Genres</span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>

              {isGenreDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {allGenres
                    .filter((genre) => !selectedGenres.includes(genre))
                    .map((genre) => (
                      <button
                        key={genre}
                        onClick={() => handleGenreSelect(genre)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        {genre}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedGenres.map((genre) => (
                <span
                  key={genre}
                  className="bg-blue-50 text-gray-700 px-2.5 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  {genre}
                  <button
                    onClick={() => removeGenre(genre)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Favorite Formats */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-3">
              Favorite formats
            </label>

            <div className="relative mb-4">
              <button
                onClick={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <span className="text-gray-400">Formats</span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>

              {isFormatDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {allFormats
                    .filter((format) => !selectedFormats.includes(format))
                    .map((format) => (
                      <button
                        key={format}
                        onClick={() => handleFormatSelect(format)}
                        className="w-full px-2.5 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        {format}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedFormats.map((format) => (
                <span
                  key={format}
                  className="bg-blue-50 text-gray-700 px-2.5 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  {format}
                  <button
                    onClick={() => removeFormat(format)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              onClick={handleCancel}
              className="flex-1 py-3 px-6 bg-gradient-to-b from-[#EDF7FF] via-[#cee6f9] to-[#5f9efd] text-blue-950 rounded-lg font-medium hover:bg-blue-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
