import axios from "axios";
const catPets = axios.create({
  baseURL: "https://catfact.ninja/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function catpets_get_fact_read(payload) {
  return catPets.get(`/fact`);
}

export const apiService = {
  catpets_get_fact_read
};