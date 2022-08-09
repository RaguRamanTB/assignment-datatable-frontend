import countries from "../apis/countries";

export const fetchCountries = () => {
  return countries.get("/countries");
}