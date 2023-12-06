"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import "./styles.scss";

import logo from "@/public/logo.png";
import Link from "next/link";

export default function Header() {
  {
    /* Get the current route */
  }
  const currentRoute = usePathname();
  console.log(currentRoute);

  return (
    <div className="container">
      <header>
        <Image src={logo} alt="" width={160} quality={100} />
        <nav>
          <li>
            <Link
              href="/"
              className={
                currentRoute === "/" ? "activeClass" : "desactiveClass"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#find"
              className={
                currentRoute === "/#find" ? "activeClass" : "desactiveClass"
              }
            >
              Find a Doctor
            </Link>
          </li>
          <li>
            <Link
              href="/#app"
              className={
                currentRoute === "/#app" ? "activeClass" : "desactiveClass"
              }
            >
              Apps
            </Link>
          </li>
          <li>
            <Link
              href="/#testimonials"
              className={
                currentRoute === "/#testimonials"
                  ? "activeClass"
                  : "desactiveClass"
              }
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/#aboutus"
              className={
                currentRoute === "/#aboutus" ? "activeClass" : "desactiveClass"
              }
            >
              About Us
            </Link>
          </li>
        </nav>
      </header>
    </div>
  );
}
