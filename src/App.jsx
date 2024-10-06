import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage';
import MovieListPage from './pages/MovieList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movies/:mood", //http://localhost:5173/movies/happy
    element: <MovieListPage />,
  }   
]) ;


function App() {
return <RouterProvider router={router}/> 

};

export default App;
