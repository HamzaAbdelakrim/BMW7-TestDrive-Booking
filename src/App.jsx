import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Features from "./pages/Features.jsx";
import Garage from "./pages/Garage.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";
import SignIn from "./pages/SignIn.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [loginName, setLoginName] = useState("");

  return (
    <UserContext.Provider value={{ loginName, setLoginName }}>
      <div className="app">
        <Navbar />
        <main>
          <div className="page-transition">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/specs" element={<Features />} />
              <Route path="/garage" element={<Garage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
