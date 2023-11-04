import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faShareSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function TopNav(props) {
  return (
    <nav id="top-nav">
      <div className="container">
        <section className="contact-nav">
          <ul className="contact">
            <li>
              <FontAwesomeIcon icon={faPhone} /> +1 433 232-9876
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> customer@thestore.com
            </li>
          </ul>

          <ul className="social">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faShareSquare} />
            </li>
          </ul>
        </section>

        <section className="brand-nav">
          <div className="logo">
            <img src="./cat_logo.png" alt="Cat Logo" />
          </div>

          <ul className="nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="fa fa-heart" aria-hidden="true"></i>{' '}
                <span className="label">Wishlist (1)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="fa fa-sign-in" aria-hidden="true"></i>{' '}
                <span className="label">Registration / Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
                <span className="label">Cart (0)</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="catalog">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Catalog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </nav>
  );
}

export default TopNav;
