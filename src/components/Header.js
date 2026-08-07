import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import { Link, NavLink } from "react-router-dom";
import { Image } from "./common/Image";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
  let mounted = true;
  axios
    .get("/api/information")
    .then((response) => mounted && setInformation(response.data))
    .catch((error) => console.error("Gagal memuat information:", error));
  return () => {
    mounted = false;
  };
}, []);

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <Image
              src={information.brandImage}
              loader="/images/about-image-placeholder.png"
              alt="brandimage"
            />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Beranda</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>Profil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>Proyek</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
              <span>Artikel</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Kontak</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://portofolio7.vercel.app"
            >
              Muhamad Soleh
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
