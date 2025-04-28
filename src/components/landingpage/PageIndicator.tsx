type PaginationIndicatorProps = {
  current: number;
  total:number;
}

export default function PaginationIndicator({ current, total } : PaginationIndicatorProps ) {
    return (
      <div className="flex justify-center mt-8">
        {[...Array(total)].map((_, index) => (
          <div
            key={index}
            className={`mx-1 w-10 h-1 rounded ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  }
  