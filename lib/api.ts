import axios from "axios";

export type Car = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: "automatic" | "manual";
  engine: "diesel" | "petrol";
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: {
    thumb: string;
    original: string;
  }[];
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
};

export type CarListResponse = {
  items: Car[];
  total: number;
};

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getCars = async () => {
  const respopnse = await axios.get<CarListResponse>("");
  return respopnse.data;
};
