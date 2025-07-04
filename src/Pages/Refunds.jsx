import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Links from '../Components/Links';

const Refunds = () => {
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
            <div className='legalsHeader'>REFUND POLICY</div>
            <div className='legalsText'>We have a 14-day return policy, which means you have 14 days after receiving your item to request a return. To be eligible, your item must be in the same condition as when you received it, unworn, with tags, and in its original packaging. A receipt or proof of purchase is required.</div>

            <div className='legalsSubHeader'>Booking Cancellation Policy</div>
            <div className='legalsText'>We understand that sometimes more time is needed to decide. That's why we offer a 30-day booking cancellation policy. To be eligible for it, your booking must be cancelled withing 30 days after initial payment.</div>

            <div className='legalsSubHeader'>Damage and Issues</div>
            <div className='legalsText'>Please inspect your purchase during visitation to your local shop. Any purchase of jewelry made therein after will be classified as "final sale item" and will be ineligible for refunds or returns if found damaged.</div>

            <div className='legalsSubHeader'>Exceptions/Non-Returnable Items</div>
            <div className='legalsText'>We do not accept returns on final sale items.</div>

            <div className='legalsSubHeader'>Refunds</div>
            <div className='legalsText'>Once we've received and inspected your return, we'll notify you of approval or denial. If approved, you'll be refunded to your original payment method within 1 business day. Please note, it may take time for your bank or credit card company to process the refund. If more than 10 business days have passed since approval, please contact support.    </div>
        </div>
        <Links />
    </div>
  )
}

export default Refunds
