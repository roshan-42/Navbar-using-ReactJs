import { useRef } from "react";
import React from "react";
import "../Styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/mywork">My work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About me</Link>

        {/* <a href="/mywork">My work</a>
        <a href="/blog">Blog</a>
        <a href="/about">About me</a> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
