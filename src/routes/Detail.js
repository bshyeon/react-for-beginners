import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Page
            coverImg={movie.medium_cover_image}
            title={movie.title}
            runtime={movie.runtime}
            rating={movie.rating}
            description={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
