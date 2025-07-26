import React from 'react'
import '../main.css'
import { Link } from 'react-router-dom'

const Menu = ( {setShowMenu} ) => {
    const exploreTemplate = {
        display: "flex",
        justifyContent: "space-between",
        Width: "80%",
        fontFamily: 'Glegoo',
        fontSize: "1.5em",
        borderBottom: "solid 1px",
        borderColor: "rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        underline: "none",
        textDecoration : "none",
        color: "black"
    };

    function close(){
        document.querySelector(".menuBarSection").classList.add("closed");
        document.querySelector(".overlay").classList.add("removed");
        setTimeout(() => {setShowMenu(false)}, 300);
    }

  return (
    <div className='overlay' onClick={() => close()}>
        <div className="menuBarSection">
            <div className='menuBarHeader'>
                <Link to="/" className='menuLogo'><img src='/Images/Black AVA.png' ></img></Link>
                <button onClick={close} className="clearButton">✕</button>
            </div>
            <div className='menuExploreSection'>
                <Link to= '/rings' style={exploreTemplate}>Rings
                    <button className="linkButton"> {'>'} </button>
                </Link> 
                <Link to="/earrings" style={exploreTemplate}>Earrings 
                    <button className="linkButton"> {'>'} </button>
                </Link> 
                <Link to="/about" style={exploreTemplate}>About Us 
                    <button className="linkButton"> {'>'} </button>
                </Link> 
                <Link to="/contactUs" style={exploreTemplate}>Contact Us 
                <   button className="linkButton"> {'>'} </button>
                </Link> 
            </div>
            <div style={{fontFamily: 'Glegoo', fontSize: "90%", textAlign: "center", marginTop: "20%" ,marginBottom: "1%", color: "rgba(0,0,0,0.8)"}}>© 2025 AVA Jewels, All rights reserved.</div>
        </div>
    </div>
  )
}

export default Menu
