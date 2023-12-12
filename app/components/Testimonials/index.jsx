import Trace from "../Trace";
import "./styles.scss";

export default function Testimonials() {
  return (
    <div className="container">
      <div className="testimonials-wrap">
        <div className="testimonials-content">
          <h2>What our customer are saying</h2>

          <Trace color="#ffffff" margin="0 auto" />

          <div className="testimonial-slide">
            <div className="perfil"></div>
            <div className="speech"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
