import React from "react";
import qr from "../assets/imgs/qr.png";

const Footer = () => {
  return (
    <section id="contact" className="pt-4">
      <h2 class="sec-title">Contact us</h2>
      <div class="container">
        <div class="row mt-3">
          <div class="col-md-5">
            <div class="pe-3">
              <h3>Get In Touch</h3>
              <p>
                Always keep in touch with us through e-mail or WhatsApp and we
                will respond to you as soon as possible.
              </p>
              <div class="d-flex align-items-center mb-3">
                <div class="icon-holder ms-3 me-4">
                  <i class="fa-solid fa-building fa-2x"></i>
                </div>
                <div class="contact-text">
                  <h4 class="mb-1">Name of Business</h4>
                  <p>TIBA SWISS GMBH</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="icon-holder ms-3 me-4">
                  <i class="fa-solid fa-location-dot fa-2x"></i>
                </div>
                <div class="contact-text">
                  <h4 class="mb-1">Location</h4>
                  <p>Poststrasse 17 2504 Biel/Bienne , Switzerland</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="icon-holder ms-3 me-4">
                  <i class="fa-solid fa-envelope fa-2x"></i>
                </div>
                <div class="contact-text">
                  <h4 class="mb-1">E-mail</h4>
                  <p>
                    <a href="mailto:info@tibaswiss.ch">info@tibaswiss.ch</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1">
            <img src={qr} class="w-100 mt-5 pt-5" alt="qr" />
          </div>
          <div class="col-md-6">
            <form
              action="mailto:info@tibaswiss.ch"
              method="post"
              enctype="text/plain"
            >
              <h3>Message Us</h3>
              <div class="row">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control mb-2"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <input
                class="form-control mt-2"
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                required
              />
              <textarea
                class="form-control my-2"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button type="submit" class="btn btn-success">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <a
        href="https://wa.link/1e0co9"
        target="_blank"
        rel="noreferrer"
        class="whats"
      >
        <i class="fa-brands fa-whatsapp fa-3x text-success"></i>
      </a>
    </section>
  );
};

export default Footer;
