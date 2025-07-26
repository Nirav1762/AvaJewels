import React from 'react'
import '../main.css'
import { Link } from 'react-router-dom'
import SmartImage from './SmartImage';

const Explore = () => {
    const exploreButton = {
        color: "black",
        fontFamily: "Glegoo",
        fontSize: "40%",
        backgroundColor: "white",
        border: "none",
        marginTop: "30%",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "20%",
        paddingRight: "20%",
        borderRadius: "4px",
        cursor: "pointer"
    };
  return (
    <>
    <div className='exploreSection'>    
        <div className='exploreSectionContainer'>
            <div className='exploreItemName'>
                <div>RINGS</div>
                <Link to="/rings"><button style={exploreButton}>Explore</button></Link>
            </div>
            <SmartImage className='exploreSectionImage' src='Images/exploreRings.png'></SmartImage>
        </div>
        <div className='exploreSectionContainer'>
            <div className='exploreItemName'>
                <div>EARRINGS</div>
                <Link to="/earrings"><button style={exploreButton}>Explore</button></Link>
            </div>
            <SmartImage className='exploreSectionImage' src='Images/exploreEarrings.png'></SmartImage>
        </div>
    </div>
    </>
  )
}

export default Explore
