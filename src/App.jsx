import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, createHashRouter, Link, RouterProvider } from 'react-router-dom';
import { HashRouter} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import GameDetails from './GameDetails/GameDetails';
import Shooter from './Shooter/Shooter';
import Strategy from './Strategy/Strategy';
import SciFi from './Sci-Fi/SciFi';
import Sports from './Sports/Sports';
import Anime from './Anime/Anime';
import Horror from './Horror/Horror';
import Games from './Games/Games';
import About from './About/About';
import NotFound from './NotFound/NotFound';


const myRouter = createHashRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/shooter", element: <Shooter/>},
      {path: "/strategy", element: <Strategy/>},
      {path: "/sci-fi", element: <SciFi/>},
      {path: "/sports", element: <Sports/>},
      {path: "/anime", element: <Anime/>},
      {path: "/horror", element: <Horror/>},
      {path: "/about", element: <About/>},
      {path: "/games", element: <Games/>},
      {path: "/game/:id", element: <GameDetails/>},
      {path: "*", element: <NotFound/>}
    ]
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
