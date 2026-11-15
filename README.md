# BMW 7 Series – Test Drive Booking

A React website for exploring the BMW 7 Series and reserving a demo test-drive time.
The site keeps the dark and cyan styling of the original BMW website.

## Run locally

Requires Node.js and npm. Open the project folder (where `package.json` is located).

```bash
npm install
npm run dev
```

Open the local link shown in the terminal (normally `http://localhost:5173`).
To check the production build:

```bash
npm run build
```

On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is blocked.

## Pages

- **Home:** BMW introduction and test-drive link.
- **About:** information about the vehicle and its features.
- **Features:** technical specifications.
- **Garage:** photo gallery.
- **Contact:** contact form with basic validation (demo only; no email is sent).
- **Booking:** choose a date and time, enter details, confirm, view and cancel reservations.
- **Sign In:** enter a display name shared with the navbar using React Context. Not real authentication.

## Technologies

React, JavaScript, HTML, CSS, React Router and Vite.

The booking page uses `useState`, `useEffect`, props, `onClick` and form events. It saves demo bookings with `localStorage` and JSON. Other pages demonstrate `map()` and conditional rendering.

**Note:** Bookings are saved only in the current browser. They are not shared across devices and do not reserve a real appointment with BMW.

## Before submission

- Test the pages, booking and mobile layout.
- Add actual screenshots of the running website to this README.
- Push the project to GitHub with genuine development commits.
- Deploy the website (configured for Vercel).
- Complete the CSCI426 PDF report and contribution statement.
- Confirm project idea approval and accurately credit the original CSCI390 project contributor(s) and subsequent work.

The report outline is in `REPORT_DRAFT.md`.
