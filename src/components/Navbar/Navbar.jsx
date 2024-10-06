import { ArrowLeft, Film } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const path = useResolvedPath();

  // Smooth scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center h-20 px-4 border border-b border-red-800 lg:px-40">
      <Link to="/" className="flex items-center justify-center">
        <Film className="h-8 text-red-600" />
        <span className="ml-2 text-4xl font-bold text-red-600">Moodflix</span>
      </Link>
      <nav className="ml-auto">
        {path.pathname === "/" ? (
          <ul className="flex gap-4"> 
            <li>
              <button
                onClick={() => handleScroll("features")}
                className="font-medium text-white transition duration-500 ease-in text-md hover:text-red-600"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("how-it-works")}
                className="font-medium text-white transition duration-500 ease-in text-md hover:text-red-600"
              >
                How It Works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("newsletter")}
                className="font-medium text-white transition duration-500 ease-in text-md hover:text-red-600"
              >
                Newsletter
              </button>
            </li>
          </ul>
        ) : (
          <Link to="/">
            <button className="flex items-center text-white">
              <ArrowLeft className="w-4 h-4 mr-2 " />
              Change Mood
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
