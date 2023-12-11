import "./styles.scss";

import Image from "next/image";

export default function ServiceItem({ imageSrc, imageHeight, title, text }) {
  return (
    <div className="service-item">
      <div className="service-image">
        <Image src={imageSrc} alt={title} height={imageHeight} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
