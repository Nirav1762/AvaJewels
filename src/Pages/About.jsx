import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Cart from "../Components/Cart"
import Search from "../Components/Search";
import Links from "../Components/Links";

const About = () => {

  const badge = {
    border: "solid",
    borderWidth: "1px",
    backgroundColor: "Black",
    width: "fit-content",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontSize: "0.8em",
    color: "white",
    borderRadius: "20px"
  };

    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [overrideScrolled] = useState(true);
    const [overrideDelay] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

  return (
    <div>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showSearch={showSearch} setShowSearch={setShowSearch} showCart={showCart} setShowCart={setShowCart} overrideScrolled={overrideScrolled} overrideDelay={overrideDelay} />
        {showMenu && <Menu setShowMenu={setShowMenu} />} {showSearch && <Search setShowSearch={setShowSearch} />} {showCart && <Cart setShowCart={setShowCart} />}
        <div className="navbar-spacer"></div>

        <div className='aboutSection'>
          <div className='aboutHeroSection'>
            <img className="aboutHero"  src='src\assets\Images\aboutHero.png'></img>
            <div className='aboutHeroText'>MOMENTS MATTER</div>
          </div>

          <div className='aboutPromoText1'>
            <div className='aboutHeader'>
              KEY TO OUTSTANDING MOMENTS
            </div>
            <p style={{textAlign:"center", fontFamily: 'Glegoo', fontSize:"1em", width: "80%"}}>At AVA Jewels, our mission is to provide timeless, versatile diamond jewelry that's easy to choose, effortless to wear, and designed for the everyday hero. We believe life's most meaningful moments deserve to be celebrated with comfort and confidence, so our pieces are built to move with you from morning to night. With a focus on quality, durability, and a stress-free shopping experience, we ensure that you shine every day — not just on special occasions. Backed by the best warranties and trade-in programs, AVA  offers jewelry you can trust for a lifetime.</p>
          </div>
          <div style={{width: "80%", borderBottom:"solid", borderWidth: "0.2px", borderColor: "rgba(0,0,0,0.2)", marginLeft:"9%", marginTop:"1%", marginBottom: "1%"}}></div>

          <div className='aboutPromoText2'>
              <img className='aboutPromoTextImage' src='src\assets\Images\promoImage.png'></img>
            <div className='aboutPromoText'>
              <p style = {badge}>WHEN COMFORT MEETS ELEGANCE</p>
              <h1 style={{fontSize: "2.2em", textAlign: "left", width: "100vw", fontFamily: 'ZT Mota', fontWeight: 'normal'}}>WEARABLE LUXURY</h1>
              <p>We provide the most comfortable jewelry in the world, and backed it up by best warranties, allowing you to spend more time wearing it with an absolute peace of mind.</p>
              <li>Our preselected, heighest-quality diamonds ensure a stress-free buying experience at AVA Jewels.</li>
              <li>We offer a curated selection of must-have, timeless designs optimized for comfortable daily wear.</li>
              <li>Heavy-duty lock mechanisms are designed to withstand the demands of activewear.</li>
              <li>Our no-nonsense lifetime warranties and trade-in programs guarantee a lifelong, trusting relationship with a jeweler who truly cares.</li>
            </div>
          </div>
          <div style={{width: "80%", borderBottom:"solid", borderWidth: "0.2px", borderColor: "rgba(0,0,0,0.2)", marginLeft:"9%", marginTop:"3%", marginBottom: "1%"}}></div>
        </div>
        <Links />
    </div>
  )
}

export default About
