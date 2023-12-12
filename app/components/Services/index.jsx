import Image from "next/image";

import ServiceItem from "./ServiceItem";
import "./styles.scss";

import element from "@/public/element.svg";

import searchDoctor from "@/public/search-doctor.svg";
import onlinePharmacy from "@/public/online-pharmacy.svg";
import consultation from "@/public/consultation.svg";
import detailsInfo from "@/public/details-info.svg";
import emergencyCare from "@/public/emergency-care.svg";
import tracking from "@/public/tracking.svg";
import Trace from "../Trace";

export default function Services() {
  return (
    <div className="services">
      <div className="service-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="765"
          height="619"
          viewBox="0 0 765 619"
          fill="none"
        >
          <path
            d="M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176955C574.431 3.48723 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z"
            fill="url(#paint0_linear_23_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_23_3"
              x1="429.823"
              y1="-145.173"
              x2="195.583"
              y2="560.635"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F3F7FF" />
              <stop offset="1" stop-color="#DEEEFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <div className="services-info">
          <h2>Our services</h2>
          <div className="trace-wrap">
            <Trace color="#458ff6" margin="0 auto" />
          </div>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>

        <div className="services-list">
          <div className="element">
            <Image src={element} alt="element" height={115} />
          </div>

          <ServiceItem
            imageSrc={searchDoctor}
            imageHeight={90}
            title="Search Doctor"
            text="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          />

          <ServiceItem
            imageSrc={onlinePharmacy}
            imageHeight={85}
            title="Online Pharmacy"
            text="Buy  your medicines with our mobile application with a simple delivery system"
          />

          <ServiceItem
            imageSrc={consultation}
            imageHeight={95}
            title="Consultation"
            text="Free consultation with our trusted doctors and get the best recomendations"
          />

          <ServiceItem
            imageSrc={detailsInfo}
            imageHeight={95}
            title="Details Info"
            text="Free consultation with our trusted doctors and get the best recomendations"
          />

          <ServiceItem
            imageSrc={emergencyCare}
            imageHeight={71.15}
            title="Emergency Care"
            text="You can get 24/7 urgent care for yourself or your children and your lovely family"
          />

          <ServiceItem
            imageSrc={tracking}
            imageHeight={95}
            title="Tracking"
            text="Track and save your medical history and health data"
          />
        </div>
      </div>
    </div>
  );
}
