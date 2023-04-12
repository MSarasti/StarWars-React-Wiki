import  { Route, Routes, BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import NotFound from '../pages/NotFound'
import People from '../pages/PeopleView'
import Planet from '../pages/PlanetView'
import Ship from '../pages/ShipView'
import App from '../App'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/planet",
        element: <Planet />,
    },
    {
        path: "/people",
        element: <People />
    },
    {
        path: "/ship",
        element: <Ship />
    },
    {
        path: "*",
        element: <NotFound />,
    }
  ]);

const routes =  (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route paht="/StarWars-React-Wiki" element={<App />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/planet" element={<Planet/>} />
            <Route path="/people" element={<People/>} />
            <Route path="/ship" element={<Ship/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
)

export default routes