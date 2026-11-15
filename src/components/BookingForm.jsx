import { useState } from "react";
import { BUSINESS_HOURS, SUGGESTED_TIMES, formatTime, isSlotTaken, getToday, checkSlot } from "../utils/bookingUtils.js";

function BookingForm({ bookings, error, onBook }) {
  // Basic controlled inputs, exactly like the course's useState examples.
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleDateChange(event) {
    setDate(event.target.value);
    setTime(""); // Selecting another day clears the previous time.
  }

  function handleSubmit(event) {
    event.preventDefault();
    // The form sends information to its parent using the onBook prop.
    onBook({ name: name, email: email, phone: phone, date: date, time: time });
  }

  const taken = date && time && isSlotTaken(bookings, date, time);
  const sunday = date && new Date(date + "T12:00:00").getDay() === 0;

  return (
    <div className="booking-form-shell">
      <div className="booking-form-top">
        <span className="step-label">01 / SELECT YOUR APPOINTMENT</span>
        <h2>Make time for extraordinary.</h2>
        <p>Choose a convenient time to experience the BMW 7 Series in person.</p>
      </div>
      <form id="test-drive-form" className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-fields appointment-fields">
          <label htmlFor="booking-date">
            <span>Preferred date</span>
            <span className="input-wrap">
              <svg className="field-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>
              <input id="booking-date" type="date" min={getToday()} value={date} onChange={handleDateChange} required />
            </span>
          </label>
          <label htmlFor="booking-time">
            <span>Preferred time</span>
            <span className="input-wrap">
              <svg className="field-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <input id="booking-time" type="time" min="09:00" max="17:30" step="1800" value={time} onChange={(e) => setTime(e.target.value)} required />
            </span>
          </label>
        </div>
        <p className="booking-hint">Select date and time just like setting an alarm. Demo hours: {BUSINESS_HOURS}. Slots start every 30 minutes.</p>

        <div className="slot-header"><span>Quick-select a time</span><span className="slot-info">Local time</span></div>
        <div className="time-slots" aria-label="Suggested appointment times">
          {SUGGESTED_TIMES.map((suggested) => {
            const unavailable = !date || checkSlot(date, suggested) !== "" || isSlotTaken(bookings, date, suggested);
            return (
              <button type="button" key={suggested} className={time === suggested ? "time-slot selected" : "time-slot"}
                disabled={unavailable} aria-pressed={time === suggested}
                onClick={() => setTime(suggested)}>
                {formatTime(suggested)}
              </button>
            );
          })}
        </div>
        {sunday && <p className="booking-inline-error" role="status">Our demo calendar is closed on Sundays.</p>}
        {taken && <p className="booking-inline-error" role="status">This time is already reserved in this browser. Choose another.</p>}

        <div className="form-divider" />
        <div className="booking-form-top personal-heading">
          <span className="step-label">02 / YOUR DETAILS</span>
          <h2>A few details, please.</h2>
        </div>
        <div className="booking-fields personal-fields">
          <label htmlFor="booking-name"><span>Full name</span><input id="booking-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" maxLength="80" autoComplete="name" required /></label>
          <label htmlFor="booking-email"><span>Email address</span><input id="booking-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" maxLength="120" autoComplete="email" required /></label>
          <label htmlFor="booking-phone"><span>Phone number</span><input id="booking-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+961 70 123 456" maxLength="22" autoComplete="tel" required /></label>
        </div>
        {error && <p className="booking-alert" role="alert">{error}</p>}
        <button type="submit" className="btn-primary book-confirm-btn">Confirm test drive <span aria-hidden="true">↗</span></button>
        <p className="booking-privacy">Frontend demonstration only. Your booking is saved on this browser; no email is sent and no dealership is contacted.</p>
      </form>
    </div>
  );
}

export default BookingForm;
