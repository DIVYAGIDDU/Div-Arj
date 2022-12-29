import React from "react";
import arjun from '../Images/arj.jpg'
import divya from '../Images/div1.jpeg'
import './Imges.css'
const Image=()=>{
    return  <>
    <div className="container-1">
    <div className="div-1">
    <div class="main-wrapper">
        <div className="layer divya">
            <img src={divya} alt=""/>
        </div>
        <div className="layer arjun">
            <img src={arjun} alt=""/>
        </div>
    </div>
    </div>
    <div className="content">
    <h1>MALLIKARJUN</h1>
     <center>
    <img src="https://img.freepik.com/premium-vector/realistic-red-heart-with-shadow_177006-321.jpg?w=360" width="260px" height="200px"/>
    <h1>DIVYA GIDDU</h1>
    </center>
    </div>
    </div>
    </>
}
export default Image