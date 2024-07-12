import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video3.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

// Importing AOS (Animate On Scroll) library for scroll animations
import Aos from 'aos'
// Importing the AOS CSS file to apply default styles for animations
import 'aos/dist/aos.css'


const Home = () => {

    // React hook to add a scroll animation
    useEffect (()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="home">
            <div className="overlay">
                <video src={video} muted autoPlay loop type = "video/mp4"></video>
            </div>

            <div className="homeContent container">
                <div className="textDiv">

                    <span data-aos = "fade-up" className="smallText">
                        Our Packages
                    </span>

                    <h1 data-aos = "fade-up" className="homeTitle">
                        Search your Holiday
                    </h1>  
                </div>

                <div data-aos = "fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name hear..."/>
                            <GrLocation className="icons"/>
                        </div>
                    </div>
                    
                    <div className="dateInput">
                        <label htmlFor="city">Select your date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                      <div className="label_total flex">
                        <label htmlFor="price">Max Price:</label>
                        <h3 className="total">$5000</h3>
                      </div>
                      <div className="input flex">
                        <input type="range" max="5000" min="1000"/>
                      </div>
                    </div>

                    <div className="searchOption flex">
                    <HiFilter className="icons" />
                    <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos = "fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icons"/>
                        <AiOutlineInstagram className="icons"/>
                        <SiTripadvisor className="icons"/>
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icons"/>
                        <TbApps className="icons"/>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Home