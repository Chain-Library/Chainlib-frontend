

'use client'

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
    <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl w-full mx-auto">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Genre specialization(s)
      </label>

      <div className="relative mb-4">
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none bg-white text-gray-700"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">Genres</option>
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
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

      <div className="flex flex-col md:flex-row gap-4">
        <button
          type="button"
          className="flex-1 bg-blue-50 text-blue-800 py-3 rounded-md text-sm font-medium hover:bg-blue-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Save Change
        </button>
      </div>
    </div>
  )
}

export default GenreSelector
