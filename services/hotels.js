// services/hotels.js
import api from "./api";

export const createHotel = async (hotel) => {
  try {
    const response = await api.post("/hotels", hotel);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllHotels = async () => {
  try {
    const response = await api.get("/hotels");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
