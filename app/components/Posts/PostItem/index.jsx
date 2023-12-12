import Image from "next/image";
import "./styles.scss";
import Link from "next/link";

import arrow from "@/public/arrow.svg";

export default function PostItem({ imageSrc, title, excerpt }) {
  return (
    <div className="post-item">
      <div className="image-wrap">
        <Image src={imageSrc} alt={title} quality={100} height={240} />
      </div>
      <div className="post-content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Link href="/">
          Read more{" "}
          <Image src={arrow} quality={100} height={10} alt="Read more" />
        </Link>
      </div>
    </div>
  );
}
