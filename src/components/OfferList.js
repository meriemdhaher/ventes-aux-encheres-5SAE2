import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllOffers } from "../utils/OffreService"; // Import de la fonction pour récupérer les offres

const OfferList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getAllOffers()
      .then((response) => {
        setOffers(response); // Mise à jour de l'état avec les offres récupérées
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des offres", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des offres</h2>
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
  );
};

export default OfferList;
