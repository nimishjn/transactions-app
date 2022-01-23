import { axiosInstance } from "./api";

export const requestLogin = async ({ email, password }) => {
  return await axiosInstance
    .post("/login", { email: email, password: password })
    .then((response) => {
      return { success: true, data: response.data };
    })
    .catch((error) => {
      return { success: false, data: error.response.data };
    });
};
