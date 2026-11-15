import blurImage from "../assets/blur.jpg";
import { specs } from "../data/carData.js";

function Features() {
  return (
    <section className="specs page-section" style={{ backgroundImage: `url(${blurImage})` }}>
      <div className="specs-card">
        <div className="specs-header">
          <h2>Features &amp; Tech Specs</h2>
          <span>Engine</span>
        </div>
        <ul className="spec-list">
          {specs.map((item) => (
            <li key={item[0]}>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </li>
          ))}
        </ul>
        <p className="specs-disclaimer">Illustrative performance figures for a BMW 7 Series V8 configuration. Actual specifications vary by year and market.</p>
      </div>
    </section>
  );
}

export default Features;
