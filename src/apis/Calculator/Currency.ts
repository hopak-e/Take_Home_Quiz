import axiosInstance from "./../Instance";
import axios from "axios";

const instance = axiosInstance();

const getCurrency = async (from: string, to: string) => {
  const response = await instance.get(`/convert?from=${from}&to=${to}`);
  return response.data;
};

export default getCurrency;
