import React, { useState } from 'react'
import '../main.css'
import { Link } from 'react-router-dom'
import earringsData from './earrings.json';
import ringsData from './rings.json';
import SmartImage from './SmartImage';

const Search = ({ setShowSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');


    const filteredRings = ringsData.filter(ring => {
        const query = searchQuery.toLowerCase();
        const matchesItemName = ring.ItemName.toLowerCase().includes(query);
        const matchesShape = ring.Shape && ring.Shape.toLowerCase().includes(query);

        return matchesItemName || matchesShape;
    });

    const filteredEarrings = earringsData.filter(earring => {
        const query = searchQuery.toLowerCase();
        const matchesItemName = earring.ItemName.toLowerCase().includes(query);
        const matchesShape = earring.Shape && earring.Shape.toLowerCase().includes(query);
        const matchesStyle = earring.Style && earring.Style.toLowerCase().includes(query);

        return matchesItemName || matchesShape || matchesStyle;
    });

    const exploreTemplate = {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        fontFamily: 'Glegoo',
        fontSize: "1.5em",
        borderBottom: "solid 1px",
        borderColor: "rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        textDecoration: "none",
        color: "black"
    };

    function close() {
        document.querySelector(".searchBarSection").classList.add("closed");
        document.querySelector(".overlay").classList.add("removed");
        setTimeout(() => { setShowSearch(false) }, 300);
    }


    const noResults = filteredRings.length === 0 && filteredEarrings.length === 0;

    return (
        <div className='overlay' onClick={close}>
            <div className="searchBarSection" onClick={(e) => e.stopPropagation()}>
                <div className="searchContainer">
                    <input 
                        type="text" 
                        placeholder="Search for anything" 
                        className="searchInput"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={close} className="clearButton">✕</button>
                </div>


                {searchQuery && !noResults && (
                    <>

                        <div className="searchResults">
                            {filteredRings.map((item) => (
                                <Link 
                                    to={item.ItemNameLink} 
                                    key={item.itemNumber} 
                                    style={exploreTemplate}
                                    onClick={close}
                                    className="resultsItem"
                                >
                                    <div className='resultsContainer'>
                                        <div className='resultsImage'><SmartImage src={item.PrimarySource} /></div>
                                        <div className="resultsInfo">
                                            <div className="resultsName">{item.ItemName}</div>
                                            <div className="resultsPrice">{item.Price}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

  
                        <div className="searchResults">
                            {filteredEarrings.map((item) => (
                                <Link 
                                    to={item.ItemNameLink} 
                                    key={item.itemNumber} 
                                    style={exploreTemplate}
                                    onClick={close}
                                    className="resultsItem"
                                >
                                    <div className='resultsContainer'>
                                        <div className='resultsImage'><SmartImage src={item.PrimarySource} /></div>
                                        <div className="resultsInfo">
                                            <div className="resultsName">{item.ItemName}</div>
                                            <div className="resultsPrice">{item.Price}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}


                {searchQuery && noResults && (
                    <div style={{ marginTop: '20px', fontFamily: 'Glegoo' }}>
                        No products found.
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search;
