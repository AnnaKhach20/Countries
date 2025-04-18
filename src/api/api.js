import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const API = {
  getAll() {
    return instance.get("/all");
  },
  getCountry(cca3) {
    return instance.get(`/alpha/${cca3}`);
  },
  getRegion(region) {
    const endpoint = region === "All" ? "/all" : `/region/${region}`;
    return instance.get(endpoint);
  }
};
