import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Information from '../Components/Information';
import Links from '../Components/Links';
import { CartContext } from '../contexts/CartContext';
import earrings from '../Components/earrings.json';

const EarringFour = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [overrideScrolled] = useState(true);
    const [overrideDelay] = useState(true);
    const [visibleIndex, setVisibleIndex] = useState(null);

    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const earring = earrings.find(r => r.itemNumber === 4); // Load earring from JSON

    const toggleContentVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const handleAddToCart = () => {
        const items = { ...earring };
        addToCart(items);
    };

    const handleBookNow = () => {
        const item = { ...earring };
        navigate('/directbooknow', { state: { item } });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showSearch={showSearch} setShowSearch={setShowSearch} showCart={showCart} setShowCart={setShowCart} overrideScrolled={overrideScrolled} overrideDelay={overrideDelay} />
            {showMenu && <Menu setShowMenu={setShowMenu} />} 
            {showSearch && <Search setShowSearch={setShowSearch} />} 
            {showCart && <Cart setShowCart={setShowCart} />}

            <div className="navbar-spacer"></div>
            <div className='productPageSection'>
                <img className='productPageImage' src={earring.PrimarySource} alt={earring.ItemName} />
                <div className='productPageDescription'>
                    <div style={{ fontFamily: 'Glegoo', fontSize: "2em", width: "70%", lineHeight: 1.3, marginBottom: "2%" }}>
                        {earring.ItemName.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: 'Glegoo', fontSize: "1em", width: "70%", lineHeight: 1.3, marginBottom: "2%", color: "rgba(0, 0, 0, 0.8)" }}>
                        {earring.Price}
                    </div>

                    <div className='productPageButtonContainer'>
                        <button className='productPageButton' onClick={handleAddToCart}>Add To Cart</button>
                        <button className='productPageButton' onClick={handleBookNow}>Book It Now</button>
                    </div>

                    <div className="faqContainer">
                        <div className="faqContainerSummary" onClick={() => toggleContentVisibility(3)}>
                            AVA Jewels Characteristics
                            <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
                        </div>
                        <div className={`faqContainerContent ${visibleIndex === 3 ? 'visible' : 'hidden'}`}>
                            <div>Origin: Natural Diamond</div>
                            <div>Clarification: IGI</div>
                            <div>Clarity: VS1+</div>
                            <div>Cut: Ideal</div>
                            <div>Color: G+</div>
                        </div>
                    </div>
            
                    <div className="faqContainer">
                        <div className="faqContainerSummary" onClick={() => toggleContentVisibility(4)}>
                        FAST Money-Back Guarantee
                        <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
                        </div>
                        <div className={`faqContainerContent ${visibleIndex === 4 ? 'visible' : 'hidden'}`}>
                            <p>If you're not completely satisfied with your purchase, you can receive a full refund within 7 days of the booking date. FAST refunds are processed on the same business day we receive the request. Additionally, within 30 days of purchase of jewelry from the store, you can exchange the item for a full credit towards another item of equal or greater value.</p>
                        </div>
                    </div>
        
                    <div className="faqContainer">
                        <div className="faqContainerSummary" onClick={() => toggleContentVisibility(5)}>
                        EASY Lifetime Manufacturing Warranty
                        <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
                        </div>            
                        <div className={`faqContainerContent ${visibleIndex === 5 ? 'visible' : 'hidden'}`}>
                        <p>AVA Jewels is dedicated to ensuring complete customer satisfaction and peace of mind, which is why every jewelry purchase comes with our EASY lifetime warranty, covering any manufacturing defects related to the item's structure. If a manufacturing defect is beyond repair we will replace the jewelry. Any repairs done by an outside jeweler will void the EASY warranty.</p>
                        </div>
                    </div>
            
                    <div className="faqContainer">           
                        <div className="faqContainerSummary" onClick={() => toggleContentVisibility(6)}>
                        FAIR Trade-In Value
                        <span style={{ color: "rgba(0,0,0,0.7)" }}> {'▼'} </span>
                        </div>
                        <div className={`faqContainerContent ${visibleIndex === 6 ? 'visible' : 'hidden'}`}>
                            <p>We're always delighted to welcome back one of our diamonds for your next step up! When you're ready to upgrade a diamond you purchased from AVA Jewels, here's what we offer:</p>
                            <li>You'll receive the full amount you paid for your original diamond (excluding tax) as a credit towards your new diamond purchase.</li>
                            <li>All original diamond certificates need to be provided to complete the return.</li>
                        </div>
                    </div>
                </div>
            </div>

            <Information />
            <Links />
        </div>
    );
};

export default EarringFour;
