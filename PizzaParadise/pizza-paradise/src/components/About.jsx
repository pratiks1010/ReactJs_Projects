import React from 'react'

const About = () => {
  return (
    <div className='about'>

        <div className="container">

          <div className="row">
            <div className="col-6 p-25">
            <h3>About us</h3>
            <h1>Welcome to Pizza Paradise</h1>
            <p>
            We tried searching for reason but it led us nowhere. But we wanted more of those lovely toppings in our pizza. So, we decided to take it upon ourselves to create what we want the way it is supposed to be. were we able to craft a Pizza that we would love toeat. And we called it Pizza Paradise.
            </p>
            <div className="about_btn">
                <a href="" className='btn btn-smart'>READ MORE</a>
            </div>
            </div>
            <div className="col-6">
                <div className="about_img">
                    <img src="/img/about.jpg" alt="pizza" />
                </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default About