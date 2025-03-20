import React from "react";

const AccessoryCard = ({ name, type, price, image }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white max-w-sm">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Type: {type}</p>
      <p className="text-gray-800 font-bold">Price: ${price}</p>
    </div>
  );
};

export default AccessoryCard;
