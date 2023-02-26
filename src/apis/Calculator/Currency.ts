import axiosInstance from "./../Instance";

const instance = axiosInstance();

const getCurrency = async (from: string, to: string) => {
  const response = await instance.get(`/convert?from=${from}&to=${to}`);
  return response.data;
};

export default getCurrency;
