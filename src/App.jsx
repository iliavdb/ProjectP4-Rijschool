import "./App.css";

import Home from "./pages/Home";
import Pakketten from "./pages/Pakketten";
import Prijzen from "./pages/Prijzen";
import Reviews from "./pages/Reviews";
import Examen from "./pages/Examen";
import Lesauto from "./pages/Lesauto";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">One-Minute</div>

        <div className="nav-links">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("pakketten")}>Pakketten</button>
          <button onClick={() => scrollToSection("prijzen")}>Prijzen</button>
          <button onClick={() => scrollToSection("reviews")}>Reviews</button>
          <button onClick={() => scrollToSection("examen")}>Examen</button>
          <button onClick={() => scrollToSection("lesauto")}>Lesauto</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      <section id="home">
        <Home />
      </section>

      <section id="pakketten">
        <Pakketten />
      </section>

      <section id="prijzen">
        <Prijzen />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="examen">
        <Examen />
      </section>

      <section id="lesauto">
        <Lesauto />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;