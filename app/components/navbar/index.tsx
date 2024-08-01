"use client";
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link href="/">
          <span className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">Harsh</h1>
            <span>.</span>
          </span>
        </Link>
        <nav id="navmenu" className="navmenu me-5">
          <ul>
            <li>
              <Link href="/#hero">
                <span className="active">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link href="/#portfolio">
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing">
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <svg id="mobile-nav-toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            className="bi mobile-nav-toggle d-xl-none" viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </nav>
      </div>
    </header>
  );
}
