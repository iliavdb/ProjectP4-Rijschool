function Pakketten() {
  return (
    <div className="page">
      <h1>Rijlespakketten</h1>

      <div className="card-container">
        <div className="card">
          <h2>Pakket A</h2>
          <p>20 lessen</p>
          <p>Praktijkexamen inbegrepen</p>
          <h3>€1200</h3>
        </div>

        <div className="card">
          <h2>Pakket B</h2>
          <p>30 lessen</p>
          <p>Tussentijdse toets inbegrepen</p>
          <h3>€1800</h3>
        </div>

        <div className="card">
          <h2>Pakket C</h2>
          <p>40 lessen</p>
          <p>Praktijkexamen inbegrepen</p>
          <h3>€2400</h3>
        </div>
      </div>
    </div>
  );
}

export default Pakketten;