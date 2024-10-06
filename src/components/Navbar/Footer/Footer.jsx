import { Link } from "react-router-dom";

const Footer = () => {
  return (  
<footer className="text-gray-400 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 px-4 border-t border-red-800">
    <p className="text-xs">2024 MoodFlix, All rights reserved</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-xs">
        <Link to="/terms-of-service">Terms of service</Link>
        <Link to="/privacy">Privacy</Link>
    </nav>
</footer>
  );
};

export default Footer;