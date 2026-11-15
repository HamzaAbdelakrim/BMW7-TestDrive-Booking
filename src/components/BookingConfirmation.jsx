import { formatDate, formatTime } from "../utils/bookingUtils.js";

// The parent passes the finished reservation to this child as a prop.
function BookingConfirmation({ booking, onBookAnother }) {
  return (
    <div className="booking-confirmation" aria-live="polite">
      <div className="confirmation-symbol" aria-hidden="true">✓</div>
      <p className="eyebrow">Reservation saved</p>
      <h2>Your experience awaits.</h2>
      <p>Your BMW 7 Series test-drive reservation has been saved in this browser.</p>
      <div className="confirmation-details">
        <div><span>Reference</span><strong>{booking.id}</strong></div>
        <div><span>Vehicle</span><strong>BMW 7 Series</strong></div>
        <div><span>Date</span><strong>{formatDate(booking.date)}</strong></div>
        <div><span>Time</span><strong>{formatTime(booking.time)}</strong></div>
        <div><span>Guest</span><strong>{booking.name}</strong></div>
        <div><span>Email</span><strong className="wrap-anywhere">{booking.email}</strong></div>
        <div><span>Phone</span><strong>{booking.phone}</strong></div>
      </div>
      <p className="booking-privacy">Demo only — this does not send an email or notify a BMW dealership.</p>
      <div className="confirmation-actions">
        <button type="button" className="btn-primary" onClick={onBookAnother}>Book another</button>
        <a href="#my-bookings" className="btn-secondary">View my bookings ↓</a>
      </div>
    </div>
  );
}

export default BookingConfirmation;
