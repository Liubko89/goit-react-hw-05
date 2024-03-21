import axios from "axios";

const options = (url, query) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/${url}`,
    params: { query: `${query}`, include_adult: "false", language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGY3OTg1NmU1MmE1YmJjYTBlMTdkZjk2OTM4MGI2MyIsInN1YiI6IjY1ZmEwMjY1YTU4OTAyMDE4NjMxMjgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XQ-7eAT6xxMgwyekRiLe0JxWpCbYVL8JvRPCZc7gSY",
    },
  };
};

export const requestTrendMovies = async (url, query) => {
  const data = await axios.request(options(url, query));

  return data;
};

export const requestMovieDetails = async (id, adInfo) => {
  const data = await axios.request(options(`3/movie/${id}${adInfo}`));
  return data;
};
