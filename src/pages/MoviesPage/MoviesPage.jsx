import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import toast from "react-hot-toast";
import { requestMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const onSubmit = (value) => {
    if (value === query) {
      toast(`You have already got the result by request "${value}"`, {
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
      return;
    }
    setMovies(null);
    setError(false);
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query === "" || query === null) return;

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await requestMovies(query);
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
