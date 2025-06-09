
export default function Loader() {
    return (
        <div className="flex-1 bg-white rounded-md animate-pulse">
            <div className="bg-white p-6 rounded-lg mb-6">
                <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>

                <div className="space-y-5">
                    {/* Author Name Field */}
                    <div>
                        <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
                        <div className="w-full h-12 bg-gray-200 rounded-md"></div>
                    </div>

                    {/* Genre Field */}
                    <div>
                        <div className="h-5 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="w-full h-12 bg-gray-200 rounded-md"></div>
                        <div className="flex flex-wrap gap-2 mt-3"></div>
                    </div>

                    {/* Tags Field */}
                    <div>
                        <div className="h-5 w-20 bg-gray-200 rounded mb-2"></div>
                        <div className="w-full h-12 bg-gray-200 rounded-md"></div>
                        <div className="flex flex-wrap gap-2 mt-3"></div>
                    </div>

                    {/* Book Description Field */}
                    <div>
                        <div className="h-5 w-40 bg-gray-200 rounded mb-2"></div>
                        <div className="w-full h-32 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-8 p-6 space-x-6 bg-white rounded-bl-md rounded-br-md">
                <div className="px-4 w-full h-12 bg-gray-200 rounded-md"></div>
                <div className="px-4 w-full h-12 bg-gray-200 rounded-md"></div>
            </div>
        </div>
    )
}
