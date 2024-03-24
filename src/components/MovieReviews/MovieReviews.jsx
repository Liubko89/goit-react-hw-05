import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieReviews } from "../../services/api";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await requestMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
        toast.error("Oops, something went wrong, please try again later", {
          style: {
            background: "#000",
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
      {reviews !== null && Array.isArray(reviews) && (
        <MovieReviewsList reviews={reviews} />
      )}
    </div>
  );
};

export default MovieReviews;
