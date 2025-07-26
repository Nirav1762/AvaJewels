import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 
import { Link } from 'react-router-dom'
import SmartImage from './SmartImage';

const Cart = ({ setShowCart }) => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const total = cartItems.reduce((acc, item) => {
        const price = typeof item.Price === "string" ? parseFloat(item.Price.replace(/[^0-9.-]+/g,"")) : item.Price;
        return acc + price;
    }, 0);
    
    const formattedTotal = total.toLocaleString('en-IN'); 
    
    
    function close() {
        document.querySelector(".CartSection").classList.add("closed");
        document.querySelector(".overlay").classList.add("removed");
        setTimeout(() => { setShowCart(false) }, 300);
    }

    return (
        <div className='overlay' onClick={close}>
            <div className="CartSection" onClick={e => e.stopPropagation()}>
                <div className='CartHeader'>
                    <span style={{ fontSize: "1.2em" }}>Cart</span>
                    <button onClick={close} className="clearButton">✕</button>
                </div>
                {cartItems.length === 0 ? (
                    <div style={{marginTop: "3%", textAlign: "center", fontFamily: "Glegoo"}}>Your cart is empty.</div>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cartItems">
                            <div className='cartItemContainer'>
                                <div className='cartItemImage'><SmartImage src={item.PrimarySource}/></div>
                                    <div className='cartItemInfo'>
                                        <div className='cartItemName'>{item.ItemName}</div>
                                        <div className='cartItemSize'>Size: {item.selectedSize || "One Size"}</div>
                                        <div className='cartItemPrice'>Price: {item.Price}</div>
                                    </div>
                                <button onClick={() => removeFromCart(item.itemNumber, item.selectedSize)} className="removeButton">Remove</button>
                            </div>
                        </div>
                    ))
                )}
                {cartItems.length > 0 && (
                    <>
                        <div style={{width: "80%", borderBottom:"solid", borderWidth: "0.2px", borderColor: "rgba(0,0,0,0.5)", marginTop:"2%", marginLeft: "10%", marginBottom: "1%"}}></div>
                        <div className='totalPriceSection'>
                            <div className='totalPriceInfo'>
                                <span style={{fontSize: "1em"}}>Total</span>
                                <span style={{fontSize: "0.8em", color: "#888"}}>Booking prices calculated at checkout</span>
                            </div>
                            <div className='totalPrice'>₹{formattedTotal}</div>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}> <Link to= '/cartbooknow'><button className='bookButton'>Book Now</button></Link></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
