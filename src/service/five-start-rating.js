import axios from "axios";
import { environment } from "../environment/environment";

const setRating = async (id, rate) => {
  axios.post(`${environment.baseUrl.api}/movie/rating`, {
    movie_id: id,
    rating: rate,
  });
};

export const fiveStarRatingService = Object.freeze({
  setRating,
});
