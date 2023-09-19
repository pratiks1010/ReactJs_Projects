

import React from 'react'

import { container } from 'reactstrap';
import './header.css'


const navLinks =
[
     {
          display : "Home",
          url :"#"
     },
     {
          display : "About",
          url :"#"
     },
     {
          display : "Course",
          url :"#"
     },
     {
          display : "Page",
          url :"#"
     },
     {
          display : "Blog",
          url :"#"
     }, 

]



const Header = () => {
  return  <section>
     <container>
          <div className="navigation">
               <div className="logo">
                    <h2><i class="ri-pantone-fill"></i>Learners.</h2>
               </div>
               <div className="nav">
                    <div className="nav_menu">
                         <ul className="nav_list">
                              {
                                   navLinks.map((item,index)=>(
                                        <li key={index} className="nav_item">
                                        <a href={item.url}>{item.display}</a>
                                   </li>
                                   ))
                              }
                             
                         </ul>
                    </div>

                    <div className="nav_right">
                         <p><i class="ri-phone-fill"></i> +91 9214563214</p>
                    </div>
               </div>
          </div>
     </container>
  </section>
}

export default Header