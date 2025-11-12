import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const nights = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24));
    return nights * price;
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block font-medium">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border rounded-md p-2 w-full mt-2"
        />
      </div>

      <div className="mt-4">
        <label className="block font-medium">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border rounded-md p-2 w-full mt-2"
        />
      </div>

      <div className="mt-4 text-gray-700">
        <p>Total payment: <strong>${calculateTotal()}</strong></p>
      </div>

      <button className="mt-4 bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
