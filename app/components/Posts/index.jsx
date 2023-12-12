import Image from "next/image";

import Trace from "../Trace";
import PostItem from "./PostItem";

import "./styles.scss";

import post1 from "@/public/post1.jpg";
import post2 from "@/public/post2.jpg";
import post3 from "@/public/post3.jpg";

import postsBg from "@/public/posts-bg.svg";
import element from "@/public/element.svg";

export default function Posts() {
  return (
    <div className="posts">
      <div className="post-bg">
        <Image src={postsBg} alt="element" width={500} />
      </div>

      <div className="container">
        <div className="posts-wrap">
          <div className="posts-info">
            <h2>Check out our latest article</h2>
            <Trace color="#458ff6" margin="0 auto" />
          </div>

          <div className="posts-list">
            <div className="post-element">
              <Image src={element} alt="element" height={115} />
            </div>

            <PostItem
              imageSrc={post1}
              title="Disease detection, check up in the laboratory"
              excerpt="In this case, the role of the health laboratory is very important to do a disease detection..."
            />
            <PostItem
              imageSrc={post2}
              title="Herbal medicines that are safe for consumption"
              excerpt="Herbal medicine is very widely used at this time because of its very good for your health..."
            />
            <PostItem
              imageSrc={post3}
              title="Natural care for healthy facial skin"
              excerpt="A healthy lifestyle should start from now and also for your skin health. There are some..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
