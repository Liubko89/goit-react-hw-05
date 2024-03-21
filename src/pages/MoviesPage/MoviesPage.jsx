import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import toast from "react-hot-toast";
import { requestTrendMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const onSubmit = (value) => {
    setMovies(null);
    setError(false);
    setQuery(value);
  };

  useEffect(() => {
    if (query === "") return;

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await requestTrendMovies(`3/search/multi`, query);
        if (results.length === 0) {
          toast("Sorry! There is nothing found", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
        }
        setMovies(results);
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
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies !== null && Array.isArray(movies) && (
        <MovieList moviesList={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
