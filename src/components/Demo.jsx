import React from 'react';
import "./demo.css"

const Demo = () => {
  return (
    <div className='demo' id="demo">
        <div className="container">
            <div className="col-1">
                <p>More Than 100 Financial Planner</p>
                <p>One Philosphy</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique a, aut consequatur eum ea animi ducimus hic molestiae quisquam corrupti labore, quis, fuga soluta consequuntur maiores voluptatum nobis unde?</p>
                <button className="button">Get your Free financial Analysis</button>
            </div>
            <div className="col-2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JEVirFX6goE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Demo