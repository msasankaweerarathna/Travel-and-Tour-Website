import React from "react";
import './home.css'
import video from '../../Assets/Video1.mp4'

const Home = () => {
    return (
        <section className="home">
            <div className="overlay">
                <video src={video} muted autoPlay loop type = "Video/mp4"></video>
            </div>

            <div className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Our Packages
                    </span>

                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                    
                </div>
            </div>
        </section>
    )
} 

export default Home