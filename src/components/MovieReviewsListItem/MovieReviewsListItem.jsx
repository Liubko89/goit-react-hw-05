import css from "./MovieReviewsListItem.module.css";

const MovieReviewsListItem = ({ author, content }) => {
  return (
    <div>
      <h3 className={css.title}>Author: {author}</h3>{" "}
      <p className={css.descr}>{content}</p>
    </div>
  );
};

export default MovieReviewsListItem;
