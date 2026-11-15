# CSCI426 — Advanced Web Programming
## Project Phase 1 Report (draft)

**Project title:** BMW 7 Series — Interactive Showroom & Test-Drive Booking  
**Student(s):** [Full name(s)]  
**Student ID(s):** [ID(s)]  
**Instructor:** [Instructor name]  
**Submission date:** [Date]

### Abstract
This project upgrades an existing BMW 7 Series promotional website into an interactive ReactJS frontend application. Users can browse photographs and specifications and book a test drive by selecting a date/time and submitting their details. React state manages input values, props pass customer information between components, `useEffect` loads bookings, and `useContext` shares a demonstration display name with the navbar. Event handlers update the interface without page reloads. Validations check future slots and prevent duplicate times in the same browser. Browser localStorage retains demo bookings after refresh, and the user may cancel them. The application is responsive and preserves the original dark/cyan design. No backend or real dealership integration is used.

### 1. Objective
Provide a simple, easy-to-use way to demonstrate how visitors could book a test drive, instead of only viewing vehicle information.

### 2. System design
**Pages:** Home (`/`), About (`/about`), Features (`/features`), Garage (`/garage`), Contact (`/contact`), Booking (`/booking`), and demo name form (`/signin`).

**Component flow:**

```text
Home -> Link to Booking
Booking (parent: bookings, confirmation, errors)
  -> BookingForm (child: date, time, name, email, phone state)
  -> BookingConfirmation (receives booking prop)
  -> BookingList (receives bookings + onCancel prop)
```

**Steps:** Choose date/time -> enter details -> submit -> validate -> check local bookings -> save -> show confirmation -> view/cancel.

**Business rules:** Future booking only, Monday–Saturday, 09:00–17:30 start time in 30-minute steps. A date/time already stored in this browser is unavailable. This is not a global multi-user calendar.

### 3. Technologies used
- ReactJS functional components, JSX, props, `useState`, `useEffect`, `useContext` and events.
- React Router for navigation.
- HTML5 date/time and text inputs.
- CSS3 Grid, Flexbox, animations, and media queries (existing charcoal/cyan theme).
- JavaScript basic functions, loops, arrays, objects and checks.
- Browser localStorage + JSON (`JSON.stringify`, `JSON.parse`) for saving demo reservations.
- Vite development server, Git/GitHub version control and Vercel/Netlify deployment (once published).

### 4. Key code snippets

**Navigation:**
```jsx
<Link to="/booking" className="btn-primary">Book a Test Drive</Link>
```

**Controlled date/time inputs:**
```jsx
<input type="date" value={date} onChange={handleDateChange} required />
<input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
```

**`onClick` quick time button:**
```jsx
<button type="button" onClick={() => setTime("10:30")}>10:30 AM</button>
```

**Child-to-parent callback prop:**
```jsx
<BookingForm onBook={handleBooking} />
// In BookingForm: onBook({ name, email, phone, date, time });
```

**Confirmation prop:**
```jsx
<BookingConfirmation booking={confirmed} />
```

**Prevent duplicate times:**
```js
for (const booking of bookings) {
  if (booking.date === date && booking.time === time) return true;
}
```

**Effect: load bookings when the booking page first opens:**
```jsx
useEffect(() => {
  setBookings(readBookings());
}, []);
```

**Context: show the demo display name in the navbar:**
```jsx
const { loginName } = useContext(UserContext);
```

**Contact validation:**
```js
if (name.trim().length < 2) {
  setStatus("Please enter your full name.");
  return;
}
```

### 5. Screenshots (insert real screenshots before submission)
[Home page] [Booking page] [Time picker] [Confirmation] [My Bookings] [Mobile view]

### 6. Limitations and future enhancements
The project does not provide real authentication, actual dealership bookings, shared availability, or emails. In the future, a backend and central database could support real reservations and notifications.

### 7. Author contributions and attribution
**Original project contributor(s):** [Names and permission/credit information]  
**New adaptation work:** [Describe true contributions]  
**Group contribution statement:** [Describe real roles for 1 or 2 students]

**Final submission:** Complete the placeholders, capture screenshots, add GitHub and live links, export this as PDF, then submit the report and repository URL via Google Classroom.
