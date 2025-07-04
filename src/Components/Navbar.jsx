import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../main.css'

const Navbar = ({setShowMenu, setShowSearch, setShowCart, overrideScrolled, overrideDelay}) => {

  const navigatorLinkTemplate = {
    display: "flex",
    flexDirection: "Column",
    height: "100%",
    width: "33%",
    justifyContent: "center"
  };

  const [scrolled, setScrolled] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    if (overrideScrolled) {
      setScrolled(true);
      setDelay(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [overrideScrolled]);

  useEffect(() => {
    if (overrideDelay) {
      setDelay(true);
      return;
    }

    let timer;
    if (scrolled) {
      timer = setTimeout(() => setDelay(true), 50);
    } else {
      setDelay(false);
    }
    return () => clearTimeout(timer);
  }, [scrolled, overrideDelay]);

  return (
    <>                                       
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <Link to={"/"} className='logo'><img src={delay ? 'src/assets/Images/Black AVA.png' : 'src/assets/Images/White AVA.png'}></img></Link>
      <div className='navigator'>
          <a onClick={() => setShowSearch(true)} className='search' style = {navigatorLinkTemplate}><img src={delay ? 'src/assets/Images/Black Search.png' : 'src/assets/Images/White Search.png'}></img></a>
          <a onClick={() => setShowCart(true)}className='addToCart' style = {navigatorLinkTemplate}><img src={delay ? 'src/assets/Images/Black Cart.png' : 'src/assets/Images/White Cart.png'}></img></a>
          <a onClick={() => setShowMenu(true)} className='menu' style = {navigatorLinkTemplate}><img src={delay ? 'src/assets/Images/Black Menu.png' : 'src/assets/Images/White Menu.png'}></img></a>
      </div>
    </nav>
    </>
  )
}

export default Navbar
