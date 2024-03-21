import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { requestMovieDetails } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieCastList from "../MovieCastList/MovieCastList";

const MovieCast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await requestMovieDetails(movieId, "/credits");
        setCast(data.cast);
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
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {cast !== null && Array.isArray(cast) && <MovieCastList cast={cast} />}
    </div>
  );
};

export default MovieCast;
