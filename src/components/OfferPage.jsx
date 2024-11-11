import React, { useEffect, useState } from "react";
import { getAllOffers } from "../utils/OffreService"; // Import de la fonction pour récupérer les offres
import { Link } from "react-router-dom"; // Assure-toi d'importer Link

const OffersPage = () => {
  const [offers, setOffers] = useState([]); // État pour stocker les offres récupérées
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Récupérer les offres au montage du composant
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const fetchedOffers = await getAllOffers();
        setOffers(fetchedOffers);
      } catch (error) {
        setError(`Erreur lors de la récupération des offres: ${error.message || "Erreur inconnue"}`);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []); // Le tableau vide garantit que cet effet est exécuté une seule fois au montage

  return (
    <div className="offers-page">
      <div className="mt-8">
        <h1>Offres</h1>
        <p>Voici toutes les offres disponibles.</p>

        {loading ? (
          <p>Chargement des offres...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="offer-list">
            {offers.length === 0 ? (
              <div>Aucune offre disponible pour le moment.</div>
            ) : (
              <ul>
                {offers.map((offer) => (
                  <li key={offer.id}>
                    <Link to={`/offer/${offer.id}`}>
                      <h3>{offer.title}</h3>
                    </Link>
                    <p>{offer.description}</p>
                    <p>Prix de départ: ${offer.startingPrice}</p>
                    <p>Status: {offer.status === "active" ? "Active" : "Terminé"}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OffersPage;
