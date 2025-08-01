import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../main.css'
import SmartImage from './SmartImage';

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
      <Link to={"/"} className='logo'><SmartImage src={delay ? 'Images/BlackAVA.png' : 'Images/WhiteAVA.png'}></SmartImage></Link>
      <div className='navigator'>
          <a onClick={() => setShowSearch(true)} className='search' style = {navigatorLinkTemplate}><SmartImage src={delay ? 'Images/BlackSearch.png' : 'Images/WhiteSearch.png'}></SmartImage></a>
          <a onClick={() => setShowCart(true)}className='addToCart' style = {navigatorLinkTemplate}><SmartImage src={delay ? 'Images/BlackCart.png' : 'Images/WhiteCart.png'}></SmartImage></a>
          <a onClick={() => setShowMenu(true)} className='menu' style = {navigatorLinkTemplate}><SmartImage src={delay ? 'Images/BlackMenu.png' : 'Images/WhiteMenu.png'}></SmartImage></a>
      </div>
    </nav>
    </>
  )
}

export default Navbar
