import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Menu from '../Components/Menu'
import Links from '../Components/Links'


const Contact = () => {
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
        
        <div className='contactSection'>
            <div style={{fontFamily: "ZT Mota", textAlign: "center", fontSize: "2.5em", marginTop: "5%", wordWrap: "break-word", width: "20%"}}>CONTACT US</div>
            <div style={{fontFamily: "Glegoo", textAlign: "center", fontSize: "1.1em", marginTop: "1%", width: "45%", wordWrap: "break-word"}}>Give us a detailed description of your queries and we'll get back to you within 24 hours during working days.</div>

            <div className='contactForm'>
                <div className='contactFormRowOne'>
                    <input type='text' className='inputFieldTemplate' placeholder='Name*' required></input>
                    <input type='email' className='inputFieldTemplate' placeholder='Email*' required></input>
                </div>

                <div className='contactFormRowTwo'>
                    <input type='tel' className='inputFieldTemplate' placeholder='Phone Number*' required></input>
                </div>

                <input type='text' className='inputFieldTemplate-comment' placeholder='Comment'></input>
                <button type='submit' className='contactFormButton'>Send Message</button>
            </div>
        </div>
        <Links />
    </div>
  )
}

export default Contact
