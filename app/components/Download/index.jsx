import Image from "next/image";
import "./styles.scss";

import downloadImage from "@/public/download-mobile.jpg";
import Trace from "../Trace";

export default function Download() {
  return (
    <div className="container">
      <div className="download">
        <div className="download-info">
          <h2>Download our mobile apps</h2>

          <Trace color="#458ff6" margin="0" />

          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely.
          </p>
        </div>

        <div className="download-image">
          <Image
            src={downloadImage}
            alt="Download Trafalgar Mobile App"
            height={434}
          />
        </div>
      </div>
    </div>
  );
}
