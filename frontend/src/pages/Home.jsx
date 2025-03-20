import React, { useState, useEffect } from "react";
import AccessoryCard from "../components/AccessoryCard";
import { fetchAccessories } from "../api";

const Home = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback image URL in case the image URL from the backend is not accessible
  const fallbackImage = "https://via.placeholder.com/300x200?text=Hair+Accessory";

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const data = await fetchAccessories();
        setAccessories(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch accessories:", err);
        setError("Failed to load accessories. Please try again later.");
        setLoading(false);
      }
    };

    getAccessories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold">Loading accessories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  // If no accessories are found, show a message
  if (accessories.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold">No accessories found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Weird Hair Accessories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map((accessory) => (
          <AccessoryCard
            key={accessory._id}
            name={accessory.name}
            type={accessory.type}
            price={accessory.price}
            image={accessory.image || fallbackImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
