import { useState } from "react";

function Reviews() {
  const reviews = [
    {
      name: "Kadir",
      date: "19 mei 2026",
      text: "Yess vandaag geslaagd!! 🙏🏻🤍 Dankjewel One Minute!!",
    },
    {
      name: "Tarik",
      date: "13 mei 2026",
      text: "Top rijschool, in 1 keer geslaagd.",
    },
    {
      name: "Kirsten",
      date: "23 april 2026",
      text: "Top top top! Hele vriendelijk en gezellig rijinstructeur en ook goed in uitleggen.",
    },
    {
      name: "Enis",
      date: "03 april 2026",
      text: "Ik ben super tevreden over deze rijschool en mijn instructeur Duran.",
    },
    {
      name: "Jeremy Browett",
      date: "18 februari 2026",
      text: "Big thanks to rijschool one minute. They made learning to drive easy.",
    },
    {
      name: "Fatima Anjum",
      date: "27 januari 2026",
      text: "Beste rijschool! Zoveel geleerd en zelfvertrouwen gekregen!",
    },
    {
      name: "Mike",
      date: "14 januari 2025",
      text: "Echt super tevreden ik zou iedereen deze rijschool aanraden!",
    },
    {
      name: "Polina",
      date: "13 december 2024",
      text: "I had a great experience with my instructor and this school!",
    },
    {
      name: "Boris",
      date: "27 september 2024",
      text: "Ik ben ontzettend blij met Rijschool one minute!",
    },
    {
      name: "Ricky",
      date: "15 maart 2024",
      text: "In één keer geslaagd! Meedenkend, duidelijk en gezellig.",
    },
    {
      name: "Asmae",
      date: "16 augustus 2023",
      text: "Ik kan rijschool One Minute zeker aanbevelen!",
    },
    {
      name: "Yusuf Inan",
      date: "10 juni 2022",
      text: "Ik ben in de eerste keer geslaagd voor mijn rijbewijs!!!!!",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll
    ? reviews
    : reviews.slice(0, 3);

  return (
    <div className="section reviews-section">
      <div className="reviews-header">
        <span className="review-badge">
          4.9 ★ Google Reviews
        </span>

        <h2 className="section-title">
          Meer dan 500 tevreden leerlingen
        </h2>

        <p className="reviews-subtitle">
          Bekijk ervaringen van leerlingen die hun rijbewijs
          succesvol hebben gehaald bij Rijschool One-Minute.
        </p>
      </div>

      <div className="reviews-grid">
        {visibleReviews.map((review, index) => (
          <div className="review-card-modern" key={index}>
            <div className="review-top">
              <div className="review-avatar">
                {review.name.charAt(0)}
              </div>

              <div>
                <h3>{review.name}</h3>
                <span>{review.date}</span>
              </div>
            </div>

            <div className="review-stars">
              ★★★★★
            </div>

            <p>{review.text}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="reviews-button-wrapper">
          <button
            className="show-reviews-btn"
            onClick={() => setShowAll(true)}
          >
            Zie alle reviews
          </button>
        </div>
      )}
    </div>
  );
}

export default Reviews;