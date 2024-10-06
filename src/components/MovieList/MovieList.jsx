import PropTypes from "prop-types";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.title} />
      ))}
      </div>
  );
  };

export default MovieList;

MovieList.PropTypes = {
  movies: PropTypes.array.isRequired,
};