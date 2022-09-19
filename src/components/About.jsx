import React from 'react'
import "./about.css";
import John from "../images/john-doe.png";

const About = () => {
  return (
    <div className='about' id="about">
        <div className="container">
            <img src={John} alt="male picture" />
            <div className="col-2">
                <h2>About</h2>
                <span className="line"></span>
                <p>Intense Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus laboriosam reiciendis eveniet facere consequuntur placeat accusamus fuga officia. Similique.</p>
                <p>I am John, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione vel ut culpa sint nis</p>
                <button className='button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About