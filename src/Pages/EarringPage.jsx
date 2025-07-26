import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import { Link } from 'react-router-dom';
import Items from '../Components/earrings.json';
import Links from '../Components/Links';
import EarringStyleFilter from '../Components/EarringStyleFilter';
import EarringDiamondShapeFilter from '../Components/EarringDiamondShapeFilter';
import PriceFilter from '../Components/PriceFilter';
import SmartImage from '../Components/SmartImage';

const EarringPage = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [overrideScrolled] = useState(true);
    const [overrideDelay] = useState(true);
    const [selectedShapes, setSelectedShapes] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 300000]);
    const [filteredItems, setFilteredItems] = useState(Items);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = 3;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        filterProducts(selectedShapes, selectedStyles, selectedPriceRange);
    }, [selectedShapes, selectedStyles, selectedPriceRange]);

    const handleFilterChange = (selectedShapes) => {
        setSelectedShapes(selectedShapes);
    };

    const handleStyleFilterChange = (selectedStyles) => {
        setSelectedStyles(selectedStyles);
    };

    const handlePriceFilterChange = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };

    const filterProducts = (shapes, styles, priceRange) => {
        const filtered = Items.filter(item => {
            const itemPrice = parseInt(item.Price.replace(/[^0-9]/g, ''), 10);
            const matchesShape = shapes.length === 0 || shapes.includes(item.Shape);
            const matchesStyle = styles.length === 0 || styles.includes(item.Style); // assumes 'Style' key exists in data
            const matchesPrice = itemPrice >= priceRange[0] && itemPrice <= priceRange[1];

            return matchesShape && matchesStyle && matchesPrice;
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
                    <Link to="/" style={{ color: "black" }}>Home</Link>&nbsp; /&nbsp; Earrings
                </div>

                <div className='productDescription'>
                    <div className='productHeader'>EARRINGS</div>
                    <div className='productInformation'>
                    Elevate your style with AVA Jewels earrings. From classic to contemporary designs, each pair showcases IGI-certified Natural diamonds and uncompromising comfort for everyday elegance.
                    </div>
                </div>

                <div className='productsMain'>
                    <div className='productsFilter'>
                        <PriceFilter onFilterChange={handlePriceFilterChange} />
                        <EarringStyleFilter onFilterChange={handleStyleFilterChange} />
                        <EarringDiamondShapeFilter onFilterChange={handleFilterChange} />
                    </div>

                    <div className='productsCardSection'>
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <div
                                    className='productsCard'
                                    key={index}
                                    onMouseEnter={() => setHoveredCardIndex(index)}
                                    onMouseLeave={() => setHoveredCardIndex(null)}
                                    style={{ position: 'relative' }}
                                >
                                    {hoveredCardIndex === index && (
                                        <Link to={item.ItemNameLink}>
                                            <button className='buttonActive'>View</button>
                                        </Link>
                                    )}
                                    <SmartImage className='productsImage' src={item.PrimarySource} alt={item.ItemName} />
                                    <div className='productsDescription'>
                                        <div style={{ fontSize: '1em' }}>{item.ItemName}</div>
                                        <div style={{ fontSize: '0.95em' }}>{item.Price}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="noResults">
                                <SmartImage src="Images/noProducts.png" className="noResultsImage" />
                            </div>
                        )}
                    </div>
                </div>

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

export default EarringPage;
