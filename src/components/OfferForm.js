import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OfferForm.css"; // Include a CSS file for styling

const API_URL = "http://localhost:8080/api/offers";

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

  // Fetch offer details if editing an existing offer
  useEffect(() => {
    if (offerId) {
      const fetchOffer = async () => {
        try {
          const response = await fetch(`${API_URL}/${offerId}`);
          const data = await response.json();
          setOffer(data);
        } catch (error) {
          console.error("Error fetching offer details for editing:", error);
        }
      };
      fetchOffer();
    }
  }, [offerId]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = offerId ? "PUT" : "POST";
      const response = await fetch(`http://localhost:8083/api/offers${offerId ? `/${offerId}` : ""}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(offer),
      });

      if (!response.ok) {
        throw new Error("Failed to submit offer");
      }

      alert(offerId ? "Offer updated successfully!" : "Offer created successfully!");
      navigate("/offers");
    } catch (error) {
      console.error("Error submitting offer:", error);
      alert("Failed to submit offer. Please try again.");
    }
  };

  return (
    <div className="offer-form-container">
      <div className="form-card">
        <h2>{offerId ? "Edit Offer" : "Create a New Offer"}</h2>

        {/* Image Preview */}
        <div className="image-preview">
          <img
            src={offer.imageUrl || "https://via.placeholder.com/600x400?text=Offer+Image"}
            alt="Offer Preview"
            className="preview-image"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={offer.title}
              onChange={handleChange}
              placeholder="Enter offer title"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={offer.description}
              onChange={handleChange}
              placeholder="Enter offer description"
              required
            />
          </div>

          <div className="form-group">
            <label>Starting Price ($)</label>
            <input
              type="number"
              name="startingPrice"
              value={offer.startingPrice}
              onChange={handleChange}
              placeholder="Enter starting price"
              required
            />
          </div>

          <div className="form-group">
            <label>Current Bid ($)</label>
            <input
              type="number"
              name="currentBid"
              value={offer.currentBid}
              onChange={handleChange}
              placeholder="Enter current bid amount"
              required
            />
          </div>

          <div className="form-group">
            <label>Auction Ends</label>
            <input
              type="datetime-local"
              name="auctionEnds"
              value={offer.auctionEnds}
              onChange={handleChange}
              required
            />
          </div>

          

          {/* Buttons */}
          <div className="form-actions">
            <button type="submit" className="submit-button bg-black">
              {offerId ? "Update Offer" : "Create Offer"}
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/offers")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferForm;
