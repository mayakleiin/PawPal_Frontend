import axios from "axios";
import { refresh } from "../services/AuthService";
import { tokenStorage } from "./tokenStorage";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + "/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      tokenStorage.getRefreshToken()
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = tokenStorage.getRefreshToken();
        if (refreshToken) {
          const { accessToken, refreshToken: newRefreshToken } = await refresh(
            refreshToken
          );
          tokenStorage.setTokens(accessToken, newRefreshToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        tokenStorage.clearTokens();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
