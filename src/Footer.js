import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap's CSS file
import './Footer.css'; // Import your custom CSS file for additional styling


const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>Address: 123 Main St, City, State</p>
              <p>Email: info@example.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="col-md-3">
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  