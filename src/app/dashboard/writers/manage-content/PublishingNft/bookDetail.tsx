"use client";

import React, { useState } from "react";
import GenreTag from "./genre";
import Image from "next/image";
import basildocument from "../../../../../../public/basildocument.png";


const AVAILABLE_GENRES = ["Fiction", "Drama", "Science Fiction", "Fantasy", "Mystery", "Romance"];
const AVAILABLE_TAGS = ["Adventure", "Sci-Fi", "Bestseller", "New Release", "Fantasy"];

interface BookDetailsProps {
    bookData: {
        authorName: string;
        genre: string[];
        tags: string[];
        description: string;
    };
    updateBookData: (data: Partial<BookDetailsProps["bookData"]>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function BookDetails({ bookData, updateBookData, nextStep, prevStep }: BookDetailsProps) {
    const [selectedGenres, setSelectedGenres] = useState<string[]>(bookData.genre || []);
    const [selectedTags, setSelectedTags] = useState<string[]>(bookData.tags || []);

    const toggleGenre = (genre: string) => {
        const updated = selectedGenres.includes(genre)
            ? selectedGenres.filter(g => g !== genre)
            : [...selectedGenres, genre];
        setSelectedGenres(updated);
        updateBookData({ genre: updated });
    };

    const toggleTag = (tag: string) => {
        const updated = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];
        setSelectedTags(updated);
        updateBookData({ tags: updated });
    };

    const renderTags = (items: string[], selected: string[], onToggle: (item: string) => void) =>
        items.map(item => (
            <GenreTag key={item} name={item} selected={selected.includes(item)} onClick={() => onToggle(item)} />
        ));

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-medium mb-6">Exclusive NFT Book</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="border-2 border-dashed border-blue-200 rounded-md p-4 flex flex-col items-center justify-center h-64 bg-blue-50">
                        <Image
                            src={basildocument}
                            alt="document upload"
                            width={20}
                            height={10}
                            className="w-15 h-10"
                        />
                        <p className="text-sm text-gray-500 text-center">
                            Drag and drop or Click to<br />choose file from device
                        </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Supported format: JPEG & PNG</p>
                </div>

                <div className="md:col-span-2">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-medium mb-4">Book Details</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                                <input
                                    type="text"
                                    placeholder="Author Name"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={bookData.authorName}
                                    onChange={e => updateBookData({ authorName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {renderTags(AVAILABLE_GENRES, selectedGenres, toggleGenre)}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {renderTags(AVAILABLE_TAGS, selectedTags, toggleTag)}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Book Description</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 h-32"
                                    placeholder="Type here"
                                    value={bookData.description}
                                    onChange={e => updateBookData({ description: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <button
                                className="px-6 py-2 bg-blue-100 text-gray-800 rounded-md font-medium hover:bg-gray-200"
                                onClick={prevStep}
                            >
                                Previous Page
                            </button>
                            <button
                                className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600"
                                onClick={nextStep}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
