// components/OfferDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOfferById, deleteOffer } from "../utils/OffreService";

const OfferDetail = () => {
  const { offerId } = useParams(); // Get the offer ID from the URL
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const fetchedOffer = await getOfferById(offerId);
        setOffer(fetchedOffer);
      } catch (error) {
        console.error("Error fetching offer details:", error);
        setError("Failed to load offer details.");
      }
    };

    fetchOffer();
  }, [offerId]);

  const handleDelete = async () => {
    try {
      await deleteOffer(offerId);
      alert("Offer deleted successfully!");
      // Redirect to offer list page
      window.location.href = "/offers";
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  if (!offer) return <div>Loading offer details...</div>;

  return (
    <div>
      <h2>{offer.title}</h2>
      <p>{offer.description}</p>
      <p>Starting Price: ${offer.startingPrice}</p>
      <p>Current Bid: ${offer.currentBid}</p>
      <p>Auction Ends: {new Date(offer.auctionEnds).toLocaleString()}</p>
      <p>Status: {offer.status === "active" ? "Auction Active" : "Auction Ended"}</p>
      {offer.imageUrl && <img src={offer.imageUrl} alt={offer.title} width="300" />}
      <div>
        <Link to={`/edit-offer/${offer.id}`}>Edit Offer</Link>
        <button onClick={handleDelete}>Delete Offer</button>
      </div>
    </div>
  );
};

export default OfferDetail;
