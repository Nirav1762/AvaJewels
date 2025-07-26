import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import { Link } from 'react-router-dom';
import Items from '../Components/rings.json';
import Links from '../Components/Links';
import DiamondShapeFilter from '../Components/DiamondShapeFilter';
import PriceFilter from '../Components/PriceFilter';

const RingPage = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [overrideScrolled] = useState(true);
    const [overrideDelay] = useState(true);
    const [selectedShapes, setSelectedShapes] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 300000]);
    const [filteredItems, setFilteredItems] = useState(Items);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // 👈 New state

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = 3;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setCurrentPage(1); // Reset to page 1 on filter change
        filterProducts(selectedShapes, selectedPriceRange);
    }, [selectedShapes, selectedPriceRange]);

    const handleFilterChange = (selectedShapes) => {
        setSelectedShapes(selectedShapes);
    };

    const handlePriceFilterChange = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };

    const filterProducts = (shapes, priceRange) => {
        const filtered = Items.filter(item => {
            const itemPrice = parseInt(item.Price.replace(/[^0-9]/g, ''), 10);
            return (
                (shapes.length === 0 || shapes.includes(item.Shape)) &&
                itemPrice >= priceRange[0] && itemPrice <= priceRange[1]
            );
        });

        setFilteredItems(filtered);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showSearch={showSearch} setShowSearch={setShowSearch} showCart={showCart} setShowCart={setShowCart} overrideScrolled={overrideScrolled} overrideDelay={overrideDelay} />
            {showMenu && <Menu setShowMenu={setShowMenu} />} {showSearch && <Search setShowSearch={setShowSearch} />} {showCart && <Cart setShowCart={setShowCart} />}
            <div className="navbar-spacer"></div>

            <div className="productsSection">
                <div style={{ fontFamily: 'Glegoo', fontSize: "0.7em", color: "black" }}>
                    <Link to="/" style={{ color: "black" }}>Home</Link>&nbsp; /&nbsp; Rings
                </div>

                <div className='productDescription'>
                    <div className='productHeader'>RINGS</div>
                    <div className='productInformation'>
                        Discover rings that combine timeless elegance with modern sophistication.
                        AVA's hand-picked natural diamond selection, featuring VS1+ clarity,
                        are crafted for style and comfort. Designed for everyday wear or special
                        moments, each piece reflects your unique story and lasting beauty.
                    </div>
                </div>

                <div className='productsMain'>
                    <div className='productsFilter'>
                        <PriceFilter onFilterChange={handlePriceFilterChange} />
                        <DiamondShapeFilter onFilterChange={handleFilterChange} />
                    </div>

                    <div className='productsCardSection'>
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <div className='productsCard' key={index} onMouseEnter={() => setHoveredCardIndex(index)} onMouseLeave={() => setHoveredCardIndex(null)} style={{ position: 'relative' }}>
                                    {hoveredCardIndex === index && (
                                        <Link to ={item.ItemNameLink}><button className='buttonActive'>View</button></Link>
                                    )}
                                    <img className='productsImage' src={item.PrimarySource} alt={item.ItemName} />
                                    <div className='productsDescription'>
                                        <div style={{ fontSize: '1em' }}>{item.ItemName}</div>
                                        <div style={{ fontSize: '0.95em' }}>{item.Price}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="noResults">
                                <img src="/Images/noProducts.png" className="noResultsImage" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Separated Pagination */}
                {filteredItems.length > 0 && (
                    <div className="paginationContainer">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`paginationArrow ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            &lt;
                        </button>

                        {[1, 2, 3].map((pageNum) => (
                            <button
                                key={pageNum}
                                className={`paginationNumber ${currentPage === pageNum ? 'active' : ''}`}
                                onClick={() => setCurrentPage(pageNum)}
                            >
                                {pageNum}
                            </button>
                        ))}

                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`paginationArrow ${currentPage === totalPages ? 'disabled' : ''}`}
                        >
                            &gt;
                        </button>
                    </div>
                )}
            </div>

            <div className='spacer'></div>
            <Links />
        </div>
    );
};

export default RingPage;
