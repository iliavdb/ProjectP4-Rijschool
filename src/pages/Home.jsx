function Home() {
  return (
    <>
      <div className="hero">
        <h1>Welkom bij Rijschool One-Minute</h1>
        <p>Snel, veilig en professioneel je rijbewijs halen.</p>
      </div>

      <div className="page">
        <h2>Acties & Kortingen</h2>

        <div className="card-container">
          <div className="card">
            <h3>Starterspakket korting</h3>
            <p>Nu tijdelijk €100 korting op pakket B.</p>
            <p>Geldig tot: 31 december 2025</p>
          </div>

          <div className="card">
            <h3>Gratis proefles</h3>
            <p>Bij aankoop van een pakket krijg je een gratis proefles.</p>
            <p>Alleen voor nieuwe leerlingen.</p>
          </div>
        </div>

        <h2>Lestijden</h2>

        <p>Wij geven rijlessen:</p>

        <ul>
          <li>Maandag t/m vrijdag: 08:00 - 22:00</li>
          <li>Zaterdag: 09:00 - 18:00</li>
          <li>Avondlessen beschikbaar</li>
          <li>Weekendlessen beschikbaar</li>
        </ul>
      </div>
    </>
  );
}

export default Home;