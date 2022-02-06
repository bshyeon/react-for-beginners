import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import detail__styles from "../Detail.module.css";
import movie__styles from "../Movie.module.css";

function Movie({ coverImg, title, runtime, rating, description, genres }) {
  return (
    <div className={detail__styles.detail}>
      <div>
        <Link className={movie__styles.a} to={"/"}>
          Home &rarr;
        </Link>
      </div>
      <div className={detail__styles.detailFlex}>
        <div>
          <img src={coverImg} alt={title} />
          <h2>{title}</h2>
          <h4>Runtime: {runtime} minutes</h4>
          <h4>Rating: {rating}/10</h4>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <p className={detail__styles.p}>{description}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
