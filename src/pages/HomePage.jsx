import Hero from "../components/Navbar/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer/Footer";
import Home from "../components/Home.js/Home";

const Homepage = () => {
  const moods = [
    {
      emoji: "😊",
      name: "Happy",
    },
    {
      emoji: "😞",
      name: "Sad",
    },
    {
      emoji: "😡",
      name: "Angry",
    },
    {
      emoji: "😮‍💨",
      name: "Relaxed",
    },
    {
      emoji: "😆",
      name: "Excited",
    },
    {
      emoji: "🤔",
      name: "Thoughtful",
    },
  ];

  return (
    <div> 
      <Navbar />
      <main className="flex-1"> {/* Fixed the typo from 'felx-1' to 'flex-1' */}
        <Hero moods={moods} />
        <Home /> {/* Include the Home component here */}
      </main>
      <Footer /> {/* Added Footer component closing tag */}
    </div>
  );
};

export default Homepage;