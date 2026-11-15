import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import footerCar from "../assets/footer-car.png";
import { stats } from "../data/carData.js";

function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <p className="eyebrow">Luxury • Performance • Technology</p>
          <h1>Join The Journey</h1>
          <p>Leaner and meaner than ever. The BMW 7 Series goes where no car has gone before.</p>
          <div className="hero-actions">
            <Link to="/booking" className="btn-primary">Book a Test Drive <span aria-hidden="true">↗</span></Link>
            <Link to="/features" className="btn-secondary">View Features</Link>
          </div>
        </div>
      </section>

      <section className="car-stats">
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={stat.label} style={{ animationDelay: `${index * 0.2}s` }}>
              <h1 className="counter">{stat.value}</h1>
              <h1 className="stat-unit">{stat.unit}</h1>
              <h5>{stat.label}</h5>
            </div>
          ))}
        </div>
        <div className="car">
          <div className="circle"><img src={footerCar} alt="BMW 7 Series" /><div className="inner-md-circle" /><div className="inner-sm-circle" /></div>
        </div>
        <div className="home-booking-banner">
          <div>
            <p className="eyebrow">Your next drive</p>
            <h2>Meet the BMW 7 Series in person.</h2>
            <p>Pick your date. Set your time. Save your test-drive reservation.</p>
          </div>
          <Link to="/booking" className="btn-primary">Reserve a test drive <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}

export default Home;
