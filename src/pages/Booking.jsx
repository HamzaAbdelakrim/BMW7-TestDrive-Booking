import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../components/BookingForm.jsx";
import BookingConfirmation from "../components/BookingConfirmation.jsx";
import BookingList from "../components/BookingList.jsx";
import driveImage from "../assets/drive.jpg";
import { createBookingId, isSlotTaken, readBookings, saveBookings, checkCustomer, checkSlot } from "../utils/bookingUtils.js";

function Booking() {
  // useState stores our list, confirmation, and error message.
  const [bookings, setBookings] = useState([]);
  const [confirmed, setConfirmed] = useState(null);
  const [error, setError] = useState("");

  // useEffect runs when the booking page opens and reads localStorage + JSON.
  useEffect(() => {
    setBookings(readBookings());
  }, []);

  // The child form sends its inputs to this parent function using a prop.
  function handleBooking(details) {
    const slotError = checkSlot(details.date, details.time);
    const customerError = checkCustomer(details);

    if (slotError) {
      setError(slotError);
      return;
    }
    if (customerError) {
      setError(customerError);
      return;
    }

    const saved = readBookings();
    if (isSlotTaken(saved, details.date, details.time)) {
      setBookings(saved);
      setError("This time is already reserved in this browser. Choose another time.");
      return;
    }

    const newBooking = {
      id: createBookingId(),
      model: "BMW 7 Series",
      name: details.name.trim(),
      email: details.email.trim(),
      phone: details.phone.trim(),
      date: details.date,
      time: details.time
    };

    const updated = [];
    for (const booking of saved) updated.push(booking);
    updated.push(newBooking);
    try {
      saveBookings(updated);
      setBookings(updated);
      setConfirmed(newBooking);
      setError("");
    } catch (error) {
      setError("Booking could not be saved. Browser storage may be disabled.");
    }
  }

  function handleCancel(id) {
    const remaining = [];
    for (const booking of bookings) {
      if (booking.id !== id) remaining.push(booking);
    }
    try {
      saveBookings(remaining);
      setBookings(remaining);
      if (confirmed && confirmed.id === id) setConfirmed(null);
      setError("");
    } catch (error) {
      setError("Booking could not be cancelled. Browser storage may be disabled.");
    }
  }

  return (
    <div className="booking-page">
      <div className="booking-crumb"><Link to="/">Home</Link><span>/</span><span>Book a test drive</span></div>
      <section className="booking-layout page-section" aria-labelledby="booking-title">
        <aside className="booking-showcase" style={{ backgroundImage: `url(${driveImage})` }}>
          <div className="showcase-shade" />
          <div className="showcase-top"><span className="showcase-line" /> <span>THE 7 EXPERIENCE</span></div>
          <div className="showcase-bottom"><p className="eyebrow">BMW 7 Series</p><h1 id="booking-title">The drive<br />is yours.</h1><p>Make your first moment behind the wheel an unforgettable one.</p><div className="showcase-accent"><span>01</span><span>BOOK YOUR EXPERIENCE</span></div></div>
        </aside>
        {confirmed ? (
          <BookingConfirmation booking={confirmed} onBookAnother={() => setConfirmed(null)} />
        ) : (
          <BookingForm bookings={bookings} error={error} onBook={handleBooking} />
        )}
      </section>
      {confirmed && error && <p className="booking-alert booking-alert-outside" role="alert">{error}</p>}
      <div className="bookings-wrap"><BookingList bookings={bookings} onCancel={handleCancel} /></div>
    </div>
  );
}

export default Booking;
