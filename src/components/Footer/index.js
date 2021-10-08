import React from 'react';

export const Footer = () => {
  return (
    <>
      <section class="footers bg-light pt-5 pb-3">
        <div class="container pt-5">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 footers-one">
              <div
                style={{
                  fontFamily: 'Sans-serif',
                  fontWeight: 'bold',
                  fontSize: '30px',
                }}
              >
                Fast Exotic Cars
              </div>
              <div class="footers-info mt-3">
                <p>
                  Find new oppurtunities and dream cars ay Fast Exotic Cars Pty
                  Ltd
                </p>
              </div>
              <div class="social-icons">
                <a href="https://www.facebook.com/">
                  <i
                    id="social-fb"
                    class="fa fa-facebook-square fa-2x social"
                  ></i>
                </a>
                <a href="https://twitter.com/">
                  <i
                    id="social-tw"
                    class="fa fa-twitter-square fa-2x social"
                  ></i>
                </a>
                <a href="https://plus.google.com/">
                  <i
                    id="social-gp"
                    class="fa fa-google-plus-square fa-2x social"
                  ></i>
                </a>
                <a href="mailto:bootsnipp@gmail.com">
                  <i
                    id="social-em"
                    class="fa fa-envelope-square fa-2x social"
                  ></i>
                </a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 footers-two">
              <h5>Essentials </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/">Search</a>
                </li>
                <li>
                  <a href="/">Sell your Car</a>
                </li>
                <li>
                  <a href="/">Advertise with us</a>
                </li>
                <li>
                  <a href="/">Dealers Portal</a>
                </li>
                <li>
                  <a href="/">Post Requirements</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 footers-three">
              <h5>Information </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/">Register Now</a>
                </li>
                <li>
                  <a href="/">Advice</a>
                </li>
                <li>
                  <a href="/">Videos</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 footers-four">
              <h5>Explore </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">Sitemap</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">Feedbacks</a>
                </li>
                <li>
                  <a href="/">User Agreement</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 footers-five">
              <h5>Company </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">For Parters</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
                <li>
                  <a href="/">Policy</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="disclaimer bg-light border">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12 py-2">
              <p class="text-muted">
                Copyright © Fast Exotic Cars Pty Ltd 2021. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
