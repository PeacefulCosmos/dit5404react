import axios from "axios";
import { environment } from "../environment/environment";

const setRating = async (rate) => {
  axios.post(`${environment.baseUrl.api}/movie/rating`, { rating: rate });
};

export const fiveStarRatingService = Object.freeze({
  setRating,
});
