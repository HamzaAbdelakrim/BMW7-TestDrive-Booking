import { features } from "../data/carData.js";
import roadImage from "../assets/road.jpg";

function About() {
  return (
    <section className="about page-section">
      <div className="heading">
        <h2>Take a journey, <br /> bend space</h2>
        <p>The BMW 7 Series steals the spotlight with sharp lines, confident road presence, premium engineering, and advanced comfort features.</p>
      </div>

      <div className="infos">
        {features.map((feature) => (
          <article className="info" key={feature.title}>
            <img src={feature.image} alt={feature.alt} width="120" />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="split-section">
        <div>
          <p className="eyebrow">About the concept</p>
          <h2>Designed for comfort and performance</h2>
          <p>
            This React project presents the BMW 7 Series as a premium vehicle website.
            It uses reusable components, page navigation, and responsive layouts for desktop and mobile screens.
          </p>
        </div>
        <img src={roadImage} alt="BMW driving on the road" />
      </div>
    </section>
  );
}

export default About;
