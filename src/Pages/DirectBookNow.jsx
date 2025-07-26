import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DirectBookNow = () => {
    const location = useLocation();
    const item = location.state?.item;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
    });

    const getCleanPrice = (price) =>
        typeof price === "string" ? parseFloat(price.replace(/[^0-9.-]+/g, "")) : price;

    if (!item) {
        return (
            <div className="bookNowContainer">
                <div style={{ fontFamily: "Glegoo", fontSize: "1.2em", padding: "2em" }}>
                    No item selected for booking. Please return to the product page.
                </div>
            </div>
        );
    }

    const total = getCleanPrice(item.Price) * 0.1;
    const formattedTotal = total.toLocaleString('en-IN');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booked!');
    };

    return (
        <div className="bookNowContainer">
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h2>Contact</h2>

                <div className="name-fields">
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="pay-now">Pay Now</button>
            </form>

            <div className="order-summary">
                <Link to="/"><img style={{width: "15%", cursor: "pointer"}} src='/Images/White AVA.png' alt="AVA Logo" /></Link>
                <h3>Your Item</h3>

                <div className="summary-item">
                    <img src={item.PrimarySource} alt={item.ItemName} />
                    <div className="item-details">
                        <div>{item.ItemName}</div>
                        <div>Size: {item.selectedSize || "One Size"}</div>
                        <div>₹{getCleanPrice(item.Price).toLocaleString('en-IN')}</div>
                    </div>
                </div>

                <div className="summary-total">
                    <div>Total</div>
                    <div className="total-price">
                        <span style={{ fontFamily: "Glegoo", color: "#888", fontSize: "0.6em" }}>INR</span> ₹{formattedTotal}
                    </div>
                </div>

                <div style={{ fontSize: "0.6em", color: "white" }}>
                    Booking prices are 10% of original prices displayed
                </div>
            </div>
        </div>
    );
};

export default DirectBookNow;
