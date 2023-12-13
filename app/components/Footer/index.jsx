import Image from "next/image";
import "./styles.scss";

import logo from "@/public/logo-white.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-item">
            <Image
              src={logo}
              alt="Trafalgar Healthcare"
              width={160}
              quality={100}
            />
            <div className="logo-info">
              <p>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <p>&copy; Trafalgar PTY LTD 2020. All rights reserved.</p>
            </div>
          </div>

          <div className="footer-item">
            <div className="footer-links">
              <h4>Company</h4>

              <Link href="/">About</Link>
              <Link href="/">Testimonials</Link>
              <Link href="/">Find a doctor</Link>
              <Link href="/">Apps</Link>
            </div>
          </div>

          <div className="footer-item">
            <div className="footer-links">
              <h4>Region</h4>

              <Link href="/">Indonesia</Link>
              <Link href="/">Singapore</Link>
              <Link href="/">Hong Kong</Link>
              <Link href="/">Canada</Link>
            </div>
          </div>

          <div className="footer-item">
            <div className="footer-links">
              <h4>Help</h4>

              <Link href="/">Help center</Link>
              <Link href="/">Contact support</Link>
              <Link href="/">Instructions</Link>
              <Link href="/">How it works</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
