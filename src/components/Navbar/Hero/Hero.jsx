import { ArrowRight } from "lucide-react";
import { PropTypes } from "prop-types";
import { useState } from "react";
import  {Link} from "react-router-dom";

const Hero = ({moods}) => {
  const [selectedMood, setSelectedMood] = useState(null);

  
  return (
   <section className="relative w-full py-12 md:py-24 lg:py-32 cl:py-48 bg-[url('./background.png')]">
    <div className="absolute inset-0 bg-black bg-opacity-80"></div>
    <div className="relative px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="space-y-2"></div>
        <h1 className="text-3xl font-bold text-white md:text-5xl sm:text-4xl lg:text-6xl tracking-tigher ">
          How are you feeling today?
        </h1>
        <p className="mx-auto text-gray-300 md:text-xl max-w-[700px]">Select your mood and let Moodflix recommend the perfect movie for you</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3">
      {moods.map((mood) => (
       <button
       key={mood.name}
       onClick={() => setSelectedMood(mood)}
       className={`text-lg rounded-lg p-4 ${selectedMood?.name === mood.name ? "bg-red-600" : "bg-white"} hover:text-white transition duration-500 ease-in hover:bg-red-600`}
      >
       {mood.emoji} {mood.name}
      </button>
      ))}
      </div>
      <div className="flex items-center justify-center h-16 mt-6">
       <Link to={`/movies/${selectedMood?.name}`}>
       <button className="flex items-center px-4 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700">
        Find Movies for {selectedMood?.name}
        <ArrowRight className="w-4 h-4 ml-2" />
         
      </button>
       </Link>
      </div>

       </div>
   </section>
  );
};

export default Hero;

Hero.propTypes = {
  moods: PropTypes.arrayOf(
    PropTypes.shape({
      emoji: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};