import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please fill in the search field.", {
        style: {
          border: "1px solid #000",
          padding: "16px",
          color: "#000",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          onChange={handleChange}
          value={query}
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </div>
  );
};

export default SearchForm;
