import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Alleen tonen wanneer alle velden zijn ingevuld
    if (name && email && phone && message) {
      setShowPopup(true);

      // Verberg popup na 3 seconden
      setTimeout(() => setShowPopup(false), 3000);

      // Optioneel: formulier leegmaken
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <div className="section contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Naam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Telefoonnummer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            rows="6"
            placeholder="Typ hier je bericht..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Verzenden</button>
        </form>

        <div className="contact-info">
          <h3>WhatsApp Support</h3>

          <p>Ook buiten kantooruren bereikbaar via WhatsApp.</p>
          <br />
          <h4> 06 2539 2539</h4>
          <br />
          <h4>info@rijschool-oneminute.nl</h4>
        </div>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#2b6cb0",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          Uw bericht is verstuurd
        </div>
      )}
    </div>
  );
}

export default Contact;