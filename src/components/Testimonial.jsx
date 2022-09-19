import React from 'react';
import "./testimonial.css";
import User1 from "../images/user1.jpeg";
import User2 from "../images/user2.jpeg";
import User3 from "../images/user3.jpg";

const Testimonial = () => {
  return (
    <div className='testimonial' id="testimonial">
        <div className="container">
            <h2>Testimonials</h2>
            <span className="line"></span>
            <div className="content">
                <div className="card">
                    <img src={User1} alt="user pic" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum labore magni voluptas! Commodi, libero vitae recusandae vero adipisci suscipit.</p>
                    <p><span>Somebody Name</span></p>
                    <p>person Title</p>
                </div>
                <div className="card">
                    <img src={User2} alt="user pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla molestiae illum officia eaque assumenda molestias eligendi eos!</p>
                    <p><span>maybe your Name</span></p>
                    <p>Title of job</p>
                </div>
                <div className="card">
                    <img src={User3} alt="user pic" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, eius! Ratione distinctio quam maiores aliquam accusantium laudantium sint optio nulla?</p>
                    <p><span>somebody..j</span></p>
                    <p>Another Title</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial