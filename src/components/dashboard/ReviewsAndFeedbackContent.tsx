"use client";

import React, { useState } from "react";
import { Star, Trash2 } from "lucide-react";
import DeleteReviewModal from "./DeleteReviewModal";

interface Review {
  id: string;
  bookTitle: string;
  author: string;
  reviewerName: string;
  reviewerAvatar: string;
  timestamp: string;
  rating: number;
  reviewText: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    bookTitle: "Native Invisible",
    author: "Darrin Collins",
    reviewerName: "Adeja Samad",
    reviewerAvatar: "/api/placeholder/40/40",
    timestamp: "Yesterday",
    rating: 4,
    reviewText:
      "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
  },
  {
    id: "2",
    bookTitle: "Love at Night",
    author: "Joe Graphix",
    reviewerName: "Adeja Samad",
    reviewerAvatar: "/api/placeholder/40/40",
    timestamp: "Yesterday",
    rating: 4,
    reviewText:
      "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
  },
  {
    id: "3",
    bookTitle: "Designing For Humans",
    author: "Joe Terkuma",
    reviewerName: "Adeja Samad",
    reviewerAvatar: "/api/placeholder/40/40",
    timestamp: "Yesterday",
    rating: 4,
    reviewText:
      "This was a great read, and I was hooked. However, the death of my favorite character impacted my overall enjoyment, which is why I'm rating it 4 stars instead of 5.",
  },
];

const ReviewCard: React.FC<{
  review: Review;
  onDelete: (review: Review) => void;
}> = ({ review, onDelete }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Book Title Tag */}
      <div className="mb-4">
        <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
          {review.bookTitle} by {review.author}
        </span>
      </div>

      {/* Review Content */}
      <div className="flex items-start gap-4">
        {/* Reviewer Avatar */}
        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm">
            {review.reviewerName.charAt(0)}
          </div>
        </div>

        {/* Review Details */}
        <div className="flex-1">
          {/* Reviewer Info and Rating */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                {review.reviewerName}
              </h3>
              <p className="text-xs text-gray-500">{review.timestamp}</p>
            </div>

            {/* Delete Button and Rating */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => onDelete(review)}
                className="text-gray-400 hover:text-red-500 text-xs bg-gray-100 hover:bg-red-50 px-3 py-1.5 rounded-2xl transition-colors"
              >
                Delete
              </button>
              <div className="flex items-center gap-1">
                {renderStars(review.rating)}
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {review.reviewText}
          </p>
        </div>
      </div>
    </div>
  );
};

const ReviewsAndFeedbackContent: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [reviewToDelete, setReviewToDelete] = useState<Review | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteReview = (review: Review) => {
    setReviewToDelete(review);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (reviewToDelete) {
      setReviews(reviews.filter((review) => review.id !== reviewToDelete.id));
      setReviewToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setReviewToDelete(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onDelete={handleDeleteReview}
          />
        ))}
      </div>

      {/* Empty State */}
      {reviews.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No reviews found</div>
          <div className="text-gray-400 text-sm">
            This user hasn't received any reviews yet
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteReviewModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        review={reviewToDelete}
      />
    </div>
  );
};

export default ReviewsAndFeedbackContent;
