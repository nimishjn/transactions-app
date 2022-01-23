import { axiosInstance } from "./api";

export const requestLogin = async (params) => {
  return await axiosInstance
    .post("/login", params)
    .then((response) => {
      return { success: true, data: response.data };
    })
    .catch((error) => {
      return { success: false, data: error.response.data };
    });
};

export const requestSignup = async (params) => {
  return await axiosInstance
    .post("/signup", params)
    .then((response) => {
      return { success: true, data: response.data };
    })
    .catch((error) => {
      return { success: false, data: error.response.data };
    });
};
