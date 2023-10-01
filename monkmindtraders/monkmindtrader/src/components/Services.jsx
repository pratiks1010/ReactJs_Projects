import React from "react";

export default function () {
  return (
    <div>
      <section id="services">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awosome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 ">
                <div class="card-body text-center">
                  <i className="fa fa-pencil-square fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Daily Market Updates
                  </h5>
                  <p class="card-text">
                    Stay informed with our daily market analyses, including key
                    news, market trends, and potential trading opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card p-3 ">
                <div class="card-body text-center">
                  <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                  Educational Resources
                  </h5>
                  <p class="card-text">
                  Explore a wealth of educational materials, including articles, videos, webinars, and courses, designed to help traders of all levels improve their knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card p-3 ">
                <div class="card-body text-center">
                  <i className="fa fa-exclamation fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                  Trading Challenges
                  </h5>
                  <p class="card-text">
                   Participate in trading challenges and competitions within the community to test your skills and win prizes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 ">
                <div class="card-body text-center">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                  Portfolio Review
                  </h5>
                  <p class="card-text">
                  Receive personalized portfolio reviews and trading advice from experienced professionals to optimize your investment strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card p-3 ">
                <div class="card-body text-center">
                  <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                  Community Support
                  </h5>
                  <p class="card-text">
                  EConnect with a vibrant community of traders who share ideas, experiences, and trading strategies. Learn from each other and receive support on your trading journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card p-3 ">
                <div class="card-body text-center">
                  <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                  Market Events
                  </h5>
                  <p class="card-text">
                  Stay updated on important market events, earnings reports, and economic releases that can impact your trading decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
