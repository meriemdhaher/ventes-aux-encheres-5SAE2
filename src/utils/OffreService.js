import axios from 'axios';

// Remplace par ton URL d'API réelle
const API_URL = 'http://localhost:8083/api/offers';

// 1. Récupérer toutes les offres
const getAllOffers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Retourne les offres récupérées
  } catch (error) {
    console.error('Erreur lors de la récupération des offres:', error);
    throw error; // Propager l'erreur pour être gérée dans le composant
  }
};

// 2. Récupérer une offre par ID
const getOfferById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`); // Récupérer l'offre par ID
    return response.data; // Retourne l'offre récupérée
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'offre avec l'ID ${id}:`, error);
    return null; // Retourne null si l'offre n'est pas trouvée
  }
};

// 3. Créer une nouvelle offre
const createOffer = async (offer) => {
  try {
    const response = await axios.post(API_URL, offer); // Envoie une requête POST pour créer l'offre
    console.log('Offre créée:', response.data); // Log l'offre créée
    return response.data; // Retourne les données de l'offre créée
  } catch (error) {
    console.error('Erreur lors de la création de l\'offre:', error);
    return null; // Retourne null si une erreur se produit
  }
};

// 4. Mettre à jour une offre
const updateOffer = async (id, updatedOffer) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedOffer); // Envoie une requête PUT pour mettre à jour l'offre
    console.log('Offre mise à jour:', response.data); // Log l'offre mise à jour
    return response.data; // Retourne les données de l'offre mise à jour
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'offre avec l'ID ${id}:`, error);
    return null; // Retourne null si une erreur se produit
  }
};

// 5. Supprimer une offre
const deleteOffer = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); // Envoie une requête DELETE pour supprimer l'offre
    console.log(`Offre avec l'ID ${id} supprimée`, response.data); // Log l'offre supprimée
    return response.data; // Retourne la réponse de l'API
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'offre avec l'ID ${id}:`, error);
    return null; // Retourne null si une erreur se produit
  }
};

export { getAllOffers, getOfferById, createOffer, updateOffer, deleteOffer };
