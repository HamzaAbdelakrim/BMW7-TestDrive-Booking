import { Link } from "react-router-dom";
import backpose from "../assets/backpose.jpg";
import interior from "../assets/interior.jpg";
import drive from "../assets/drive.jpg";

function Garage() {
  return (
    <section className="panels page-section" aria-label="BMW garage gallery">
      <div className="panels-sm">
        <article className="panel panel-text cyan-panel">
          <div>
            <div className="icon">🔥</div>
            <h2>Power and speed unleashed</h2>
            <Link to="/features">
              <span>Learn More</span>
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </article>

        <article className="panel image-panel" style={{ backgroundImage: `url(${backpose})` }}>
          <span className="sr-only">Rear BMW 7 Series view</span>
        </article>

        <article className="panel image-panel" style={{ backgroundImage: `url(${interior})` }}>
          <span className="sr-only">BMW 7 Series interior</span>
        </article>

        <article className="panel panel-text light-panel">
          <div>
            <div className="icon">💧</div>
            <h2>Premium comfort and modern engineering</h2>
          </div>
        </article>
      </div>

      <article className="panel-lg" style={{ backgroundImage: `url(${drive})` }}>
        <div>
          <p className="eyebrow">Garage</p>
          <h2>Built for the road</h2>
        </div>
      </article>
    </section>
  );
}

export default Garage;
