import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="lg:flex lg:space-x-8">
      {/* LEFT SECTION */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
          {/* You can add extra small images here */}
        </div>

        {/* Description Tabs (simplified) */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">What this place offers</h2>
          <ul className="flex flex-wrap gap-2">
            {property.category.map((amenity, i) => (
              <li key={i} className="bg-gray-200 px-3 py-1 rounded-md">{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
