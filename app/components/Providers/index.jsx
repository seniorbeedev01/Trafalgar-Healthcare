import Image from "next/image";
import "./styles.scss";

import providersImage from "@/public/providers.jpg";
import Trace from "../Trace";

export default function Providers() {
  return (
    <div className="container">
      <div className="providers">
        <div className="provider-image">
          <Image
            src={providersImage}
            alt="Leading Healthcare Providers"
            height={477}
          />
        </div>
        <div className="provider-info">
          <h2>Leading healthcare providers</h2>

          <Trace color="#458ff6" margin="0" />

          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver.
          </p>
        </div>
      </div>
    </div>
  );
}
