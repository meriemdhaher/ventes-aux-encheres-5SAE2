import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Remove the duplicate import here
import { createOffer, getOfferById, updateOffer } from "../utils/OffreService";

const OfferForm = () => {
  const [offer, setOffer] = useState({
    title: "",
    description: "",
    startingPrice: "",
    currentBid: "",
    auctionEnds: "",
  });
  const { offerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (offerId) {
      const fetchOffer = async () => {
        try {
          const fetchedOffer = await getOfferById(offerId);
          setOffer(fetchedOffer);
        } catch (error) {
          console.error("Error fetching offer details for editing:", error);
        }
      };
      fetchOffer();
    }
  }, [offerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (offerId) {
        const updatedOffer = await updateOffer(offerId, offer);
        console.log("Offer updated:", updatedOffer);
      } else {
        const newOffer = await createOffer(offer);
        console.log("Offer created:", newOffer);
      }
      navigate("/offers");
    } catch (error) {
      console.error("Error submitting offer:", error);
    }
  };

  return (
    <div>
      <h2>{offerId ? "Edit Offer" : "Create a New Offer"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={offer.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={offer.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Starting Price:
          <input
            type="number"
            name="startingPrice"
            value={offer.startingPrice}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Current Bid:
          <input
            type="number"
            name="currentBid"
            value={offer.currentBid}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Auction Ends:
          <input
            type="datetime-local"
            name="auctionEnds"
            value={offer.auctionEnds}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">{offerId ? "Update Offer" : "Create Offer"}</button>
      </form>
    </div>
  );
};

export default OfferForm;
