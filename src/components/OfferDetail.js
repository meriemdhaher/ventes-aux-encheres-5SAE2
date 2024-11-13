import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./OfferDetail.css"; // Include this CSS file for styling

const API_URL = 'http://localhost:8083/api/offers';

const OfferDetail = () => {
  const { offerId } = useParams();
  console.log("Offer ID from useParams:", offerId);
  const [offer, setOffer] = useState(null);

  // Function to fetch offer details by ID
  const fetchOfferById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch offer with ID ${id}. Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching offer details:", error);
      throw error;
    }
  };

  // Function to delete the offer
  const deleteOffer = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to delete offer with ID ${id}. Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting offer:", error);
      throw error;
    }
  };

  // Fetch the offer details when the component mounts
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const fetchedOffer = await fetchOfferById(offerId);
        setOffer(fetchedOffer);
      } catch (error) {
        console.error("Error fetching offer details:", error);
      }
    };

    fetchOffer();
  }, [offerId]);

  // Handle the delete button click
  const handleDelete = async () => {
    try {
      await deleteOffer(offerId);
      alert("Offer deleted successfully!");
      window.location.href = "/offers";
    } catch (error) {
      console.error("Error deleting offer:", error);
      alert("Failed to delete offer. Please try again.");
    }
  };

  if (!offer) return <div className="loading">Loading offer details...</div>;

  // Placeholder image if no image is provided
  const placeholderImage = "https://via.placeholder.com/600x400?text=Product+Image";

  return (
    <div className="offer-detail-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={offer.imageUrl || placeholderImage}
          alt={offer.title}
          className="hero-image"
        />
        <div className="hero-content">
          <h1>{offer.title}</h1>
          <p className="hero-description">{offer.description}</p>
          <div className="badge-container">
            <span className={`status-badge ${offer.status}`}>
              {offer.status === "active" ? "Auction Active" : "Auction Ended"}
            </span>
          </div>
        </div>
      </div>

      {/* Offer Details Section */}
      <div className="details-section">
        <h2>Offer Details</h2>
        <p><strong>Starting Price:</strong> ${offer.startingPrice}</p>
        <p><strong>Current Bid:</strong> ${offer.currentBid}</p>
        <p><strong>Auction Ends:</strong> {new Date(offer.auctionEnds).toLocaleString()}</p>

        {/* Bid Action Area */}
        <div className="bid-action">
          <button className="bid-button">Place a Bid</button>
          <button className="delete-button" onClick={handleDelete}>Delete Offer</button>
        </div>

        {/* Edit Link */}
        <div className="edit-link-container">
          <Link to={`/edit-offer/${offer.id}`} className="edit-link">Edit Offer</Link>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
