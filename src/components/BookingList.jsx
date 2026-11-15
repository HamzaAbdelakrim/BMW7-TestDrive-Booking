import { useState } from "react";
import { formatDate, formatTime } from "../utils/bookingUtils.js";

function BookingList({ bookings, onCancel }) {
  const [pendingCancelId, setPendingCancelId] = useState(null);

  function confirmCancel(id) {
    onCancel(id);
    setPendingCancelId(null);
  }

  return (
    <section className="my-bookings" id="my-bookings" aria-labelledby="my-bookings-title">
      <div className="my-bookings-head">
        <div><p className="eyebrow">Your experience</p><h2 id="my-bookings-title">My bookings</h2></div>
        <span className="booking-count">{bookings.length} {bookings.length === 1 ? "reservation" : "reservations"}</span>
      </div>
      {bookings.length === 0 ? (
        <div className="bookings-empty"><span aria-hidden="true">◷</span><p>No test drives booked on this device yet. Choose your first appointment above.</p></div>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <article className="booking-ticket" key={booking.id}>
              <div className="ticket-main"><span className="ticket-tag">BMW 7 SERIES · TEST DRIVE</span><h3>{formatDate(booking.date)}</h3><p>{formatTime(booking.time)} <span aria-hidden="true">·</span> {booking.name}</p></div>
              <div className="ticket-actions">
                <span className="ticket-id">{booking.id}</span>
                {pendingCancelId === booking.id ? (
                  <div className="cancel-actions">
                    <span className="cancel-prompt">Cancel this booking?</span>
                    <button type="button" className="cancel-booking confirm-cancel" onClick={() => confirmCancel(booking.id)}>Yes, cancel</button>
                    <button type="button" className="cancel-booking" onClick={() => setPendingCancelId(null)}>Keep it</button>
                  </div>
                ) : (
                  <button type="button" className="cancel-booking" onClick={() => setPendingCancelId(booking.id)}>Cancel booking</button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
      <p className="booking-privacy">These demo bookings exist only in this browser. Clearing browser storage removes them.</p>
    </section>
  );
}

export default BookingList;
