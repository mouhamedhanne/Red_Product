// services/auth.js
import api from "./api";

export const register = async (user) => {
  try {
    const response = await api.post("/auth/register", user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
