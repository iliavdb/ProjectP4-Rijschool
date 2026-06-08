function Contact() {
  return (
    <div className="section contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-wrapper">
        <form className="contact-form">
          <input type="text" placeholder="Naam" />

          <input type="email" placeholder="E-mailadres" />

          <input type="tel" placeholder="Telefoonnummer" />

          <textarea
            rows="6"
            placeholder="Typ hier je bericht..."
          ></textarea>

          <button type="submit">Verzenden</button>
        </form>

        <div className="contact-info">
          <h3>WhatsApp Support</h3>

          <p>
            Ook buiten kantooruren bereikbaar via WhatsApp.
          </p>
<br />
          <h4> 06 2539 2539</h4>
          <br />
          <h4>info@rijschool-oneminute.nl</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;