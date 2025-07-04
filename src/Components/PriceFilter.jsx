import React, { useState } from 'react';
import '../main.css';

const PriceFilter = ({ onFilterChange }) => {
    const [priceRange, setPriceRange] = useState([0, 300000]); 

    const handlePriceChange = (event) => {
        const newValue = Number(event.target.value);
        setPriceRange([0, newValue]); 
        onFilterChange([0, newValue]);
    };

    return (
        <div className="priceFilterContainer">
            <div className="priceFilterSection">
                <div className="priceFilterHeader">Price</div>
                <p className="priceFilterInfo">The highest price is ₹3,00,000</p>
                
                <div className="priceSlider">
                    <input
                        type="range"
                        min="0"
                        max="300000"
                        value={priceRange[1]} 
                        onChange={handlePriceChange}
                        className="priceRange"
                    />
                </div>

                <div className="priceInputs">
                    <input
                        type="number"
                        value={priceRange[1]}   
                        onChange={handlePriceChange}
                        className="priceInput"
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;
