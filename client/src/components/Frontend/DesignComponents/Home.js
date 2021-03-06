import React from 'react';
import IM from "./i1.jpg";
import IM2 from "./i2.jpg";
import IM3 from "./i3.jpg"
import Footer from "./HeaderFooter/Footer";

function Home() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"> </li>
                <li data-target="#demo" data-slide-to="1"> </li>
                <li data-target="#demo" data-slide-to="2"> </li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={IM} alt="Los Angeles" width="1500" height="710"/>
                        <div className="carousel-caption">
                            <h1>Welcome To FCT Library Management System</h1>
                            <p>HDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
                            <button type="button" className="btn btn-primary"><h5 id={"h-btn"}>About Us</h5></button>
                            <br/><br/><br/><br/>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={IM2} alt="Chicago" width="1500" height="710"/>
                        <div className="carousel-caption">
                            <h1>Sign In Here</h1>
                            <p>HDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
                            <button type="button" className="btn btn-primary"><h5 id={"h-btn"}>Sign In</h5></button>
                            <br/><br/><br/><br/>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={IM3} alt="New York" width="1500" height="710"/>
                        <div className="carousel-caption">
                            <h1>Register For Library Management System</h1>
                            <p>HDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
                            <button type="button" className="btn btn-primary"><h5 id={"h-btn"}>Sign Up</h5></button>
                            <br/><br/><br/><br/>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"> </span>
            </a>
            <a className="carousel-control-next" href="" data-slide="next">
                <span className="carousel-control-next-icon"> </span>
            </a>
        </div>
    );
}

export default Home;


