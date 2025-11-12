import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500 text-sm">{review.rating} ★</p>
            </div>
          </div>
          <p className="mt-2 text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
