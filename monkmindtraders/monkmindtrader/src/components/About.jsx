import React from "react";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/about.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50"/>
              <p className="lead mb-4">
                Monkmind Traders, we are a passionate and dedicated community of
                stock market enthusiasts who share a common goal: to excel in
                the world of trading. Founded by experienced traders, our
                community is built on the principles of knowledge-sharing,
                learning, and supporting one another on our trading journeys.
                Our mission is simple: to provide a platform where traders of
                all levels, from beginners to seasoned experts, can come
                together to gain insights, develop strategies, and ultimately
                achieve success in the stock market. We believe in the power of
                collaboration and continuous learning as essential tools for
                success in the ever-evolving financial markets. With daily
                market updates, expert analysis, and a vibrant online community,
                Monkmind Traders offers you the resources and support you need
                to make informed trading decisions and navigate the complexities
                of the stock market. Join us today and take a step closer to
                achieving your trading goals. Welcome to Monkmind Traders!
                📈💼🚀
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
