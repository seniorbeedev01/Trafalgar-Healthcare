"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "./styles.scss";

import open from "@/public/icon-hamburger.svg";
import close from "@/public/icon-close.svg";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  {
    /* Get the current route */
  }
  const currentRoute = usePathname();
  // console.log(currentRoute);

  return (
    <div className="container">
      <header className="mobileHeader">
        <Image src={logo} alt="Trafalgar" width={160} quality={100} />
        <Image
          src={toggle ? close : open}
          alt="Responsive Menu"
          width={30}
          height={25}
          quality={100}
          onClick={() => setToggle(!toggle)}
        />
      </header>

      {toggle && (
        <div className="mobileMenuExpand">
          <nav>
            <li>
              <Link href="/" className="activeClass">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#find" className="activeClass">
                Find a Doctor
              </Link>
            </li>
            <li>
              <Link href="/#app" className="activeClass">
                Apps
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="activeClass">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/#aboutus" className="activeClass">
                About Us
              </Link>
            </li>
          </nav>
        </div>
      )}

      <header className="desktopHeader">
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
