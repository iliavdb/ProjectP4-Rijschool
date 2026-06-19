import { useState } from "react";

function Lesauto() {
  const images = [
    "public/golf7voor.jpg",
    "public/golf7schuinvoor.jpg",
    "public/golf7achter.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="section">
      <h2 className="section-title">Onze Lesauto</h2>

      <p className="car-text">
        We rijden in een moderne Volkswagen Golf, uitgerust met alle
        actuele veiligheidssystemen voor een veilige en comfortabele rijles.
      </p>

      <div className="slider">
        <button onClick={prevSlide}>❮</button>

        <img src={images[current]} alt="Lesauto" />

        <button onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
}

export default Lesauto;