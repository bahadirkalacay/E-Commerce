import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import Facebook from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div>
      <footer id="contact" className="bg-dark-blue">
        <div className="contact-form">
          <form>
            <h4 className="text-center heading-medium">Contact Us</h4>

            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Your Name..."
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="E-Mail..."
              />
            </div>
            <div className="form-group">
              <label for="message">Messsage</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="button btn-primary">
              Submit
            </button>
          </form>
          <ul>
            <li>
              <a href="#">
                <Facebook fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
