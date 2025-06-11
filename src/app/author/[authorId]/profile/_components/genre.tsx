

'use client'

import PageDetail from '@/app/_components/PageDetail'
import { useState } from 'react'

const allGenres = ['Fiction', 'Drama', 'Horror', 'Comedy', 'Sci-Fi', 'Fantasy', 'Romance']

const GenreSelector = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const handleSelect = (genre: string) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  const removeGenre = (genre: string) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre))
  }

  return (
    <>
      <PageDetail title="Genre Specialization">
      </PageDetail>
      <div className="px-6 w-full mx-auto md:flex flex-col justify-center items-center lg:flex-col">
        <label className="text-label-large text-neutral-600 md:text-neutral-300  text-start w-full font-semibold mb-2">
          Genre specialization(s)
        </label>

        <select
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md appearance-none bg-white text-gray-700"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">Genres</option>
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <div className="flex flex-wrap gap-2 w-full mt-4">
          {selectedGenres.map((genre) => (
            <span
              key={genre}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {genre}
              <button onClick={() => removeGenre(genre)} className="text-blue-500 hover:text-blue-800">
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="flex flex-col-reverse w-full md:flex-row gap-4 mt-15 md:mt-10">
          <button
            type="button"
            className="bg-[linear-gradient(179.56deg,_#EDF7FF_60.22%,_#096CFF_317.32%)] flex-1 bg-blue-50 text-blue-800 py-3 rounded-md text-sm font-medium hover:bg-blue-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[linear-gradient(to_right,#EDF7FF_2px,transparent_2px),linear-gradient(to_bottom,#EDF7FF_2px,transparent_2px)] flex-1 bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Save Change
          </button>
        </div>
      </div>
    </>
  )
}

export default GenreSelector
