import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Pakketten from "./pages/Pakketten";
import Prijzen from "./pages/Prijzen";
import Reviews from "./pages/Reviews";
import Examen from "./pages/Examen";
import Lesauto from "./pages/Lesauto";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Rijschool One-Minute</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pakketten">Pakketten</Link>
          <Link to="/prijzen">Prijzen</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/examen">Examen</Link>
          <Link to="/lesauto">Lesauto</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pakketten" element={<Pakketten />} />
        <Route path="/prijzen" element={<Prijzen />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/examen" element={<Examen />} />
        <Route path="/lesauto" element={<Lesauto />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;