import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Navbar from "../Components/Navbar";
import Links from "../Components/Links";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [overrideScrolled] = useState(true);
  const [overrideDelay] = useState(true);
  const [visibleIndex, setVisibleIndex] = useState(null); 

  const toggleContentVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showSearch={showSearch} setShowSearch={setShowSearch} showCart={showCart} setShowCart={setShowCart} overrideScrolled={overrideScrolled} overrideDelay={overrideDelay} />
      {showMenu && <Menu setShowMenu={setShowMenu} />} {showSearch && <Search setShowSearch={setShowSearch} />} {showCart && <Cart setShowCart={setShowCart} />}
      <div className="navbar-spacer"></div>

      <div className="faqSection">
        <div className="faqLeft">
          <div>
            <div style={{ fontFamily: 'Glegoo', fontSize: "0.7em", color: "black" }}>
              <Link to="/" style={{ color: "black" }}>Home</Link>&nbsp; /&nbsp; FAQ
            </div>

            <div style={{ fontFamily: 'ZT Mota', width: "40vw", fontSize: "2em", marginTop: "10%", wordWrap: "break-word", overflowWrap: "break-word" }}>
              FREQUENTLY ASKED QUESTIONS
            </div>

          </div>

        </div>
        <div className="faqRight">
          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(0)}>
              What is AVA Jewels refund policy?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 0 ? 'visible' : 'hidden'}`}>
              <p>At AVA Jewels, we want you to love your experience. If you're not sure about the jewelry you booked, you can get a 100% refund within 72 hours of booking. For more information check out our&nbsp;<Link>Refund Policy</Link></p>
            </div>

          </div>

          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(1)}>
              How do I determine my ring size?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 1 ? 'visible' : 'hidden'}`}>
              <p>To find your perfect ring size, we recommend using our free &nbsp;<Link>Ring Size Guide</Link>.</p>
            </div>
          </div>

          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(2)}>
              How do I choose lab-grown or natural diamond?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 2 ? 'visible' : 'hidden'}`}>
              <p>Lab-grown diamonds are created in controlled environments using advanced technology, while natural diamonds are formed over billions of years beneath the Earth's surface. Both types are chemically, physically, and optically identical. The main differences are their origin and price, with lab-grown diamonds typically being more affordable.</p>
            </div>
          </div>

          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(3)}>
              How do I care for my diamonds jewelry?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 3 ? 'visible' : 'hidden'}`}>
              <p>To maintain the sparkle of your diamond jewelry, clean it regularly with a gentle jewelry cleaner or mild soap and water. Use a soft brush to gently scrub away dirt and oils. Avoid wearing your diamond jewelry during rough activities, and store it separately in a soft pouch or lined jewelry box to prevent scratches.</p>
            </div>
          </div>

          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(4)}>
              What is warranty on your jewelry?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 4 ? 'visible' : 'hidden'}`}>
              <p>We offer a lifetime warranty on all KOMO Diamonds jewelry. Our warranty covers any manufacturing defects, but it does not cover normal wear and tear, loss, or damage caused by misuse. For detailed information, please read our&nbsp;<Link style={{color: 'black'}} to="/warranty">Warranty Policy</Link></p>
            </div>
          </div>

          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(5)}>
              Do you offer gift wrapping or special packaging?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 5 ? 'visible' : 'hidden'}`}>
              <p>Yes, all AVA Jewels jewelry comes in our signature luxury packaging, perfect for gifting. If you would like to include a special note or request additional gift wrapping, simply add your request during the booking process.</p>
            </div>
          </div>

          <div className="faqContainer">

            <div className="faqContainerSummary" onClick={() => toggleContentVisibility(6)}>
              How do I contact customer service?
              <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
            </div>

            <div className={`faqContainerContent ${visibleIndex === 6 ? 'visible' : 'hidden'}`}>
              <p>Our customer service team is available to assist you with any questions or concerns. Visit&nbsp;<Link style={{color: 'black'}} to='/contactUs'>Contact Us</Link> to get in touch with us.</p>
            </div>
          </div>
          
        </div>
      </div>
      <Links />
    </>
  );
};

export default FAQ;
