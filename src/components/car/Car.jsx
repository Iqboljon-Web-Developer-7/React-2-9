import { useGetCarQuery } from "@/redux/api/sclices/productSlice";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Car = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [valid, setValid] = useState(true);

  let id = searchParams.get("id");
  let { data: car } = useGetCarQuery({ id });

  car = car?.payload;

  return (
    <div className="bg-white wrapper flex  flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden mt-10">
      <img
        onError={() => setValid(false)}
        src={
          valid
            ? car?.images[0]
            : "https://www.thecarwiz.com/images/listing_vehicle_placeholder.jpg"
        }
        alt={car?.name}
        className="w-full max-h-96 object-contain"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{car?.name}</h2>
        <p
          className="text-gray-700 mb-2"
          dangerouslySetInnerHTML={{ __html: car?.description }}
        ></p>
        <p className="font-bold text-lg text-blue-600">${car?.price}</p>
        <p className="text-sm text-gray-500">
          Rent Price: ${car?.rent_price} / day
        </p>
        <div className="grid grid-cols-2 mt-4">
          <span className="text-sm text-gray-600">Fuel: {car?.fuel}</span>
          <span className="text-sm text-gray-600">Seats: {car?.seats}</span>
          <span className="text-sm text-gray-600">
            Transmission: {car?.transmission}
          </span>
        </div>
        <div className="imgs flex mt-6">
          {car?.images.length > 1
            ? car?.images.map((item, idx) => (
                <img key={idx} className="max-w-24" src={car?.images[0]} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Car;
