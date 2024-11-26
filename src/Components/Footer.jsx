import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div
          className="row pt-5 mt-5 bg-light shadow"
          style={{ height: "100%" }}
        >
          <div className="col-md-10 mx-auto">
            <p className="text-pink mx-auto h5">Contact Us</p>
            <p className="text-pink">
              Thank you for your interest in Rehnuma. For any queries please
              email at <b>rahnuma178@gmail.com</b>
            </p>
            <Link
              className="fa fa-facebook-f text-decoration-none rounded bg-light"
              style={{ backgroundColor: "white", color: "#ae184f" }}
              to="https://www.facebook.com/profile.php?id=61551346086076"
              target="_blank"
            ></Link>
            <Link
              className="fa fa-linkedin text-decoration-none rounded bg-light mx-2"
              style={{ backgroundColor: "white", color: "#ae184f" }}
              to="https://www.linkedin.com/company/rehnuma/"
              target="_blank"
            ></Link>
            <Link
              className="fa fa-envelope text-decoration-none rounded bg-light mx-2"
              style={{ backgroundColor: "white", color: "#ae184f" }}
              to="mailto:rahnuma178@gmail.com"
              target="_blank"
            ></Link>
            <Outlet />
          </div>
          <div className="col-md-12">
          <p className="text-center">
              Designed & Developed by 
              <a
                rel="nofollow"
                href="https://bilal-19.github.io/portfolio/"
                target="_blank"
                className="text-decoration-none text-dark"
              > Bilal Muhammad Yousuf
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
