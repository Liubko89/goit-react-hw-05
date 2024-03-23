import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { requestMovieDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await requestMovieDetails(movieId);
        setMovie(data);
        setImageUrl(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
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
      <Link className={css.backLink} to={backLinkRef.current}>
        Go back
      </Link>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {movie !== null && (
        <div>
          <div className={css.wrap}>
            <div className={css.imgWrap}>
              <img
                className={css.img}
                src={imageUrl}
                alt={movie.title}
                width="300"
              />
            </div>

            <div className={css.contentWrap}>
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
          </div>
          <AdditionalInformation />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
