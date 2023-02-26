import axiosInstance from "./../Instance";

const instance = axiosInstance();

const getCurrency = async (from: string, to: string) => {
  try {
    const response = await instance.get(`/convert?from=${from}&to=${to}`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export default getCurrency;
