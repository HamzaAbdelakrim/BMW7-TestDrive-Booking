import { Link } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Simple form validation using if statements.
    if (name.trim().length < 2) {
      setStatus("Please enter your full name (at least 2 characters).");
      setHasError(true);
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setStatus("Please enter a valid email address.");
      setHasError(true);
      return;
    }
    if (message.trim().length < 10) {
      setStatus("Please enter a message of at least 10 characters.");
      setHasError(true);
      return;
    }

    setHasError(false);
    setStatus("Thanks, " + name.trim() + ". Your demo message was validated; no email was sent.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact page-section">
      <div className="contact-content">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Book your BMW experience</h1>
          <p>
            Explore our BMW 7 Series demo. For test-drive appointments, use our interactive booking calendar. The message form below is a frontend demonstration and does not send email.
          </p>
          <Link to="/booking" className="btn-primary contact-book-cta">Book a Test Drive ↗</Link>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
          </label>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </label>
          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message" rows="5" required></textarea>
          </label>
          <button type="submit">Send Message</button>
          {status && <p className={hasError ? "form-message form-error" : "form-message"} role={hasError ? "alert" : "status"}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
