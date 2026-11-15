// Small JavaScript helper functions for the FRONTEND-ONLY test-drive demo.
export const BOOKING_STORAGE_KEY = "bmw7-test-drive-bookings-v1";
export const BUSINESS_HOURS = "Monday–Saturday, 9:00 AM–6:00 PM";
export const SUGGESTED_TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

// A date input expects today's date in YYYY-MM-DD format.
export function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

export function formatDate(date) {
  return new Date(date + "T12:00:00").toDateString();
}

export function formatTime(time) {
  const pieces = time.split(":");
  let hour = Number(pieces[0]);
  const period = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour = hour - 12;
  if (hour === 0) hour = 12;
  return hour + ":" + pieces[1] + " " + period;
}

export function checkSlot(date, time) {
  if (!date || !time) return "Please choose a date and time.";

  const appointment = new Date(date + "T" + time + ":00");
  if (isNaN(appointment.getTime())) return "Please choose a valid date and time.";
  if (appointment <= new Date()) return "Please select a future appointment.";
  if (appointment.getDay() === 0) return "Sunday is unavailable. Choose Monday to Saturday.";

  // Times are written as HH:MM, so string comparison works in 24-hour format.
  if (time < "09:00" || time > "17:30") return "Available times are from 9:00 AM to 5:30 PM.";
  const minute = time.split(":")[1];
  if (minute !== "00" && minute !== "30") return "Please choose a 30-minute time slot.";
  return "";
}

export function isSlotTaken(bookings, date, time) {
  for (const booking of bookings) {
    if (booking.date === date && booking.time === time) return true;
  }
  return false;
}

export function checkCustomer(details) {
  if (details.name.trim().length < 2) return "Please enter your full name.";
  if (!details.email.includes("@") || !details.email.includes(".")) return "Please enter a valid email address.";

  let digits = 0;
  for (const character of details.phone) {
    if (character >= "0" && character <= "9") digits = digits + 1;
  }
  if (digits < 7 || digits > 15) return "Please enter a phone number with 7 to 15 digits.";
  return "";
}

// JSON converts our JavaScript array to text so the browser can save it.
export function readBookings() {
  try {
    const saved = localStorage.getItem(BOOKING_STORAGE_KEY);
    if (!saved) return [];
    const bookings = JSON.parse(saved);
    if (Array.isArray(bookings)) return bookings;
    return [];
  } catch (error) {
    return [];
  }
}

export function saveBookings(bookings) {
  localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookings));
}

export function createBookingId() {
  return "BMW7-" + Date.now();
}
