import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
  return (
    <footer>
      <div className="container footer">
        <div>
          <h4>About Us</h4>

          <ul>
            <li>Home</li>
            <li>Catalog</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h4>Shop</h4>

          <ul>
            <li>Kittens</li>
            <li>Cats</li>
            <li>Dog</li>
          </ul>
        </div>
        <div>
          <h4>Information</h4>

          <ul>
            <li>Blog</li>
            <li>News</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <h4>Pages</h4>

          <ul>
            <li>Products</li>
            <li>Contact</li>
            <li>Shipping</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h4>Subscribe To News</h4>

          <form>
            <input placeholder="Your e-mail" type="text" />
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <div className="container">TheStore © Copyright 2021</div>
      </div>
    </footer>
  );
}

export default Footer;
