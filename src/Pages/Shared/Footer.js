import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-300 text-base-content">
      <footer class="footer p-10 max-w-7xl container mx-auto">
        <div>
          <span class="footer-title">Services</span>
          <Link to="/" class="link link-hover">
            Branding
          </Link>
          <Link to="/" class="link link-hover">
            Design
          </Link>
          <Link to="/" class="link link-hover">
            Marketing
          </Link>
          <Link to="/" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="/" class="link link-hover">
            About us
          </Link>
          <Link to="/" class="link link-hover">
            Contact
          </Link>
          <Link to="/" class="link link-hover">
            Jobs
          </Link>
          <Link to="/" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="/" class="link link-hover">
            Terms of use
          </Link>
          <Link to="/" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer class="footer py-4 flex items-center justify-center bg-black text-white">
          <p class="">
            Sura Tools Industries Ltd. Providing reliable service since 1978.
          </p>
      </footer>
    </div>
  );
};

export default Footer;
