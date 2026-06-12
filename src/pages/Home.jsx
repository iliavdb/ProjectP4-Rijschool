function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay">
          <h1>Haal jouw rijbewijs sneller & slimmer</h1>

          <p>
            Professionele rijlessen met moderne begeleiding,
            flexibele lestijden en een hoog slagingspercentage.
          </p>

          <button
            className="primary-button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Plan Gratis Proefles
          </button>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Waarom kiezen voor One-Minute?</h2>

        <div className="cards">
          <div className="card">
            <h3>Hoog slagingspercentage</h3>
            <p>
              Onze leerlingen slagen sneller dankzij persoonlijke begeleiding.
            </p>
          </div>

          <div className="card">
            <h3>Flexibele lestijden</h3>
            <p>
              Ook beschikbaar in de avond en in het weekend.
            </p>
          </div>

          <div className="card">
            <h3>Moderne lesmethodes</h3>
            <p>
              Efficiënt leren rijden met duidelijke coaching.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;