function Prijzen() {
  return (
    <div className="page">
      <h1>Prijzen</h1>

      <div className="card-container">
        <div className="card">
          <h2>Losse Rijles</h2>
          <h3>€60 per les</h3>
        </div>

        <div className="card">
          <h2>Praktijkexamen</h2>
          <h3>€300</h3>
        </div>

        <div className="card">
          <h2>Tussentijdse Toets</h2>
          <h3>€250</h3>
        </div>
      </div>

      <h2>Extra kosten</h2>
      <p>Herexamen: €250</p>
      <p>BNOR examen: €350</p>
    </div>
  );
}

export default Prijzen;