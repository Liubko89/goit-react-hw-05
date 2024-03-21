import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await requestMovieDetails(movieId);
        setMovie(data);
        setImageUrl(`https://image.tmdb.org/t/p/w500/${data.poster_path}`);
      } catch (err) {
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
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {movie !== null && (
        <div>
          <div>
            <img src={imageUrl} alt={movie.title} width="400" />
            <h1>{movie.title}</h1>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres.map((el) => (
                <span key={el.id}>{el.name} </span>
              ))}
            </p>
          </div>
          <AdditionalInformation />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
