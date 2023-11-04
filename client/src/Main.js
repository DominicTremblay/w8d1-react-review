import React from 'react';
import RowItems from './RowItems';

function Main(props) {
  return (
    <main className="container products">
      <h3>Popular Products</h3>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  All Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kittens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="product-list">
        <RowItems />
        <RowItems />
        <RowItems />
        <RowItems />

      </section>
    </main>
  );
}

export default Main;
