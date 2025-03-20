import { useEffect, useState } from "react";

function Home() {
    const [accessories, setAccessories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/accessories");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAccessories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAccessories();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Weird Hair Accessories</h1>

            {loading && <p className="text-blue-500 text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">Error: {error}</p>}

            {!loading && !error && accessories.length === 0 && (
                <p className="text-gray-500 text-center">No accessories found.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accessories.map((accessory) => (
                    <div key={accessory._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">{accessory.name}</h2>
                        <p className="text-gray-600 mb-1">Type: {accessory.type}</p>
                        {accessory.material && <p className="text-gray-600 mb-1">Material: {accessory.material}</p>}
                        {accessory.color && <p className="text-gray-600 mb-1">Color: {accessory.color}</p>}
                        <p className="text-gray-800 font-bold mt-2">Price: ${accessory.price}</p>
                        {accessory.availability && <p className="text-green-600 mt-1">{accessory.availability}</p>}
                        {accessory.description && <p className="text-gray-700 mt-2">{accessory.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
