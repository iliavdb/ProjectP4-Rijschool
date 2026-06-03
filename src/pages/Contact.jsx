function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>

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

      <h2>WhatsApp</h2>

      <p>Neem ook buiten kantooruren contact met ons op via WhatsApp.</p>
    </div>
  );
}

export default Contact;