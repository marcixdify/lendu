import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a class="navbar-brand">LenDu</a>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">
              <a class="nav-link">Strona główna</a>
            </Link>
          </li>
          <Link to="/login/">
            <a class="nav-link">Logowanie</a>
          </Link>
          <Link to="/register/">
            <a class="nav-link">Rejestracja</a>
          </Link>
          <li class="nav-item">
            <Link to="/notices/">
              <a class="nav-link">Lista ogłoszeń</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/notice/add">
              <a class="nav-link">Dodaj ogłoszenie</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
