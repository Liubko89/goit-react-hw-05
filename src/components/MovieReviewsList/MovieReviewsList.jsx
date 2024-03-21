import MovieReviewsListItem from "../MovieReviewsListItem/MovieReviewsListItem";

const MovieReviewsList = ({ reviews }) => {
  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <MovieReviewsListItem author={author} content={content} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>The movie has no reviews</p>
  );
};

export default MovieReviewsList;
