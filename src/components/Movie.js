import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movieFlex}>
      <img className={styles.img} src={coverImg} alt={title} />
      <div>
        <h2>
          <Link className={styles.a} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
