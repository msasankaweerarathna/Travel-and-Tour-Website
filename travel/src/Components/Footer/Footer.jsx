import React, {useEffect} from "react";
import './footer.css'

//Import icons
import { ImPrevious } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

//Import assets
import video2 from '../../Assets/Video7.mp4'

// Importing AOS (Animate On Scroll) library for scroll animations
import Aos from 'aos'
// Importing the AOS CSS file to apply default styles for animations
import 'aos/dist/aos.css'


const Footer = () => {

     // React hook to add a scroll animation
     useEffect (()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="Video.mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contentDiv flex">
                    <div data-aos = "fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos = "fade-up" type="text" placeholder='Enter Email Address'/>
                        <button data-aos = "fade-up" className='btn flex' type="submit">
                            SEND <FiSend className="icons"/>
                        </button>
                    </div>
                </div>

                <div data-aos = "fade-up" className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icons"/> Travel.
                            </a>
                        </div>

                        <div data-aos = "fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi sit quam debitis. Officia sequi nostrum, consectetur soluta explicabo odit, voluptates iusto cupiditate quo quibusdam alias atque, suscipit voluptas rem?
                        </div>

                        <div data-aos = "fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icons"/>
                            <AiFillYoutube className="icons"/>
                            <AiFillInstagram className="icons"/>
                            <FaTripadvisor className="icons"/>
                        </div>
                    </div>
                    
                    <div data-aos = "fade-up" data-aos-duration = "3000" className="footerLinks grid">
                        {/* Group One */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Service
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Payment
                            </li>

                        </div>

                        {/* Group Two */}
                        <div data-aos = "fade-up" data-aos-duration = "4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> HotelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> TripAdvisor
                            </li>

                        </div>

                        {/* Group Tree */}
                        <div data-aos = "fade-up" data-aos-duration = "5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Califonia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons"/> Oceania
                            </li>

                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>TRAVEL WEBSITE TEMPLATE</small>
                        <small>© COPYRIGHT RESERVED - MANUJAYASASANKA 2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Footer