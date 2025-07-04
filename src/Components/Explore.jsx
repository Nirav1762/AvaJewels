import React from 'react'
import '../main.css'
import { Link } from 'react-router-dom'

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
            <img className='exploreSectionImage' src='src\assets\Images\exploreRings.png'></img>
        </div>
        <div className='exploreSectionContainer'>
            <div className='exploreItemName'>
                <div>EARRINGS</div>
                <Link to="/earrings"><button style={exploreButton}>Explore</button></Link>
            </div>
            <img className='exploreSectionImage' src='src\assets\Images\exploreEarrings.png'></img>
        </div>
    </div>
    </>
  )
}

export default Explore
