import Image from "next/image";
import "./styles.scss";

import homehero from "@/public/homehero.jpg";
import Button from "../Button";

export default function Homehero() {
  return (
    <div className="container">
      <div className="homehero">
        <div className="homehero-content">
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <div className="homehero-content-cta">
            <Button text="Consult Today" />
          </div>
        </div>
        <div className="homehero-img">
          <Image
            src={homehero}
            alt="Virtual healthcare for you"
            height={598}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
