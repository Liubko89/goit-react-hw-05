import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { requestTrendMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await requestTrendMovies("3/trending/movie/day");
        setMovies(data.results);
      } catch (error) {
        setError(true);
        toast.error("Oops, something went wrong, please try again later", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList moviesList={movies} />
    </>
  );
};

export default HomePage;
