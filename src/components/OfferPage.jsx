import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/offers");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOffers(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch offers. Please try again later.");
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  return (
    <div className="offers-page p-4">
      <h1 className="text-3xl font-bold mb-4">Offres Disponibles</h1>
      <p className="mb-8 text-gray-600">Découvrez toutes les offres disponibles et trouvez ce qui vous intéresse.</p>

      {loading ? (
        <p className="text-center text-lg">Chargement des offres...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.length === 0 ? (
            <div className="text-center col-span-full">Aucune offre disponible pour le moment.</div>
          ) : (
            offers.map((offer) => (
              <div key={offer.id} className="offer-card border rounded-lg shadow-lg p-4 bg-white">
                <Link to={`/offer/${offer.id}`} className="hover:underline">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                </Link>
                <p className="text-gray-700 mb-2">{offer.description}</p>
                <p className="text-sm text-gray-500 mb-2">Prix de départ: <strong>${offer.startingPrice}</strong></p>
                <div className="flex items-center justify-between">
                  <span
                    className={`status-tag px-2 py-1 rounded-full text-sm ${
                      offer.status === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {offer.status === "active" ? "Active" : "Terminé"}
                  </span>
                  <Link
                    to={`/offer/${offer.id}`}
                    className="view-details-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Voir Détails
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default OffersPage;
