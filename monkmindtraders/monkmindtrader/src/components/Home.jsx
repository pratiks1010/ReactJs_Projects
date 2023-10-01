import React from 'react'

export default function Home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                        Unlock your trading potential with Monkmind Traders! 
                        </h1>
                       <p className="lead text-center fs-4 mb-5 text-white">
                       Monkmind Traders is not just a community; it's a dynamic hub for traders seeking to excel in the stock market. Our group is driven by a passion for trading and a commitment to shared growth. We provide daily market updates, expert insights, and a supportive environment for traders of all levels. 
                       </p>
                       <div className="buttons d-flex justify-content-center">
                        <button className='btn btn-light me-4 rounded-pill px-4 py-2'>Join Now</button>
                        <button className='btn btn-outline-light  rounded-pill px-4 py-2'>Our Community</button>


                       </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
