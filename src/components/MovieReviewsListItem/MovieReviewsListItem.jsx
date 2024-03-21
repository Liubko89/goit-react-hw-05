const MovieReviewsListItem = ({ author, content }) => {
  return (
    <div>
      <h3>Author: {author}</h3> <p>{content}</p>
    </div>
  );
};

export default MovieReviewsListItem;
