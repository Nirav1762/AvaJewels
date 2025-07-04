import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Links from '../Components/Links';

const Warranty = () => {
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

        <div className='legalsSection'>
            <div className='legalsHeader'>LIFETIME WARRANTY</div>
            <div className='legalsSubHeader'>EASY Lifetime Manufacturing Warranty</div>
            <div className='legalsText'>At AVA Jewels, we are dedicated to ensuring your complete satisfaction with every jewelry piece you purchase. That's why we offer our EASY Lifetime Manufacturing Warranty, designed to provide you with peace of mind and long-term assurance. This warranty covers any manufacturing defects related to the item's structure, such as issues with prongs, clasps, or any part of the piece that may compromise its integrity. If a manufacturing defect is identified that cannot be repaired, we will replace the item free of charge.</div>

            <div className='legalsText'>To maintain the validity of your EASY warranty, please ensure that any repairs or alterations are carried out exclusively by AVA Jewels. Any modifications made by an outside jeweler will void the warranty, as we cannot guarantee the quality or impact of third-party work on our pieces. With AVA's EASY warranty, you can trust that your jewelry is built to last, and if it doesn't, we've got you covered for life.</div>
        </div>
        <Links />
    </div>
  )
}

export default Warranty
