import { Link, Outlet } from "react-router-dom";

const AdditionalInformation = () => {
  return (
    <div>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdditionalInformation;
