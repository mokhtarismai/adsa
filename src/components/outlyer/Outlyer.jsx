import React from "react";
import imgsrs from "../../assets/logo-GdqARQRt.png";
import "./Outlyer.css";
import posts from "../../data/posts.json";
import { Link, NavLink } from "react-router-dom"; // استيراد Link ضروري جداً

export default function Outlyer() {
  return (
    <nav className="navbar p-2 fixed-top navbar-expand-lg navbar-light bg-black-500 ">
      <div className="container">
        <Link className="navbar-brand text-white ms-3" to="/">
          <img className="w-img" src={imgsrs} alt="Logo" />
        </Link>

        <div className="d-flex flex-column">
          <Link to="/" className="text-decoration-none text-white titleweb">
            {posts.siteInfo.name}
          </Link>
          <span className="detaltitle">{posts.siteInfo.tagline}</span>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa-solid fa-bars tooglenav" />
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="m-auto mb-2 mb-lg-0 p-4 p-lg-2 ">
            <ul className="list-unstyled d-flex align-items-center m-0 bord">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold activeLink"
                      : "nav-link fw-bold acolor"
                  }
                  end
                >
                  الرئيسية
                </NavLink>
              </li>

              <li className="nav-item me-lg-2 ms-lg-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold activeLink me-lg-4 ms-lg-4"
                      : "nav-link fw-bold acolor me-lg-4 ms-lg-4"
                  }
                >
                  المدونة
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/NotFound"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold activeLink"
                      : "nav-link fw-bold acolor"
                  }
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <div className="iconseach">
              <i className="fa-solid fa-magnifying-glass text-white "></i>
            </div>
            <Link
              to="/blog"
              className="btn-me text-decoration-none text-white me-2 text-center"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
