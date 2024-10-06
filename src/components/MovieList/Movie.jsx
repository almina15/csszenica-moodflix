import PropTypes from "prop-types";
import { Calendar, Star } from "lucide-react";

const Movie = ({ movie }) => {
    console.log(movie);

  return (
    <div className="relative transition-transform duration-500 transform hover:scale-105">
      <img
      className="object-cover w-full rounded-lg shadow-lg"
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white duration-300 rounded-lg opacity-0 bg-gradient-to-t from-black via-transparent to-transparent hover:opacity-100 ">
        <h2 className="mb-1 text-2xl font-bold">{movie.title}</h2>
        <h2 className="mb-2 text-xs line-clamp-3">{movie.overview}</h2>
          <p className="text-xs">
            <Calendar className="w-4 h-4 mr-2" />
            Release Date: {movie.release_date}
          </p>
          <p className="mt-1 mb-4 text-xs ems-center mtflex">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Rating: {movie.vote_average} ({movie.vote_count} votes)
          </p>
          <button className="px-6 py-2 text-white transition bg-red-600 rounded-lg hover:bg-red-500-colors">
            Watch Now
          </button>
      </div>
    </div>
  ); 
  
}

export default Movie
Movie.propTypes = {
    movie: PropTypes.object.isRequired,
}