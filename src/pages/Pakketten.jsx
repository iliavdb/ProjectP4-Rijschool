function Pakketten() {
  const pakketten = [
    {
      name: "Losse les",
      price: "€60",
      lessons: "60 minuten",
      color: "bronze",
    },
    {
      name: "BRONZE",
      price: "€939",
      lessons: "10 lessen à 60 min",
      extra: "Praktijkexamen",
      color: "bronze",
    },
    {
      name: "SILVER",
      price: "€1519",
      lessons: "20 lessen à 60 min",
      extra: "Praktijkexamen",
      color: "silver",
    },
    {
      name: "GOLD",
      price: "€2099",
      lessons: "30 lessen à 60 min",
      extra: "Praktijkexamen",
      color: "gold",
    },
    {
      name: "PLATINUM",
      price: "€2679",
      lessons: "40 lessen à 60 min",
      extra: "Praktijkexamen",
      color: "platinum",
    },
    {
      name: "DIAMOND",
      price: "€3249",
      lessons: "50 lessen à 60 min",
      extra: "Praktijkexamen",
      color: "diamond",
    },
  ];

  return (
    <div className="section pakketten-section">
      <div className="pakketten-header">
        <span className="section-tag">
          Rijles pakketten
        </span>

        <h2 className="section-title">
          Kies het pakket dat bij jou past
        </h2>

        <p className="pakketten-subtitle">
          Professionele rijlessen met persoonlijke begeleiding
          en een hoge slagingskans.
        </p>
      </div>

      <div className="pakketten-grid">
        {pakketten.map((pakket, index) => (
          <div
            className={`pakket-card ${pakket.color}`}
            key={index}
          >
            <h3>{pakket.name}</h3>

            <div className="pakket-price">
              {pakket.price}
            </div>

            <p>{pakket.lessons}</p>

            {pakket.extra && (
              <span className="pakket-extra">
                {pakket.extra}
              </span>
            )}

            <button
              className="pakket-btn"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Kies pakket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pakketten;