import React, { useState } from "react";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import Cart from "../Components/Cart"
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Philosophy from "../Components/Philosophy";
import Explore from "../Components/Explore";
import Bestsellers from "../Components/Bestsellers";
import Information from "../Components/Information";
import Links from "../Components/Links";

const Home = () => {
      const [showMenu, setShowMenu] = useState(false);
      const [showSearch, setShowSearch] = useState(false);
      const [showCart, setShowCart] = useState(false);
  return (
    <div>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showSearch={showSearch} setShowSearch={setShowSearch} showCart={showCart} setShowCart={setShowCart}/>
        {showMenu && <Menu setShowMenu={setShowMenu} />} {showSearch && <Search setShowSearch={setShowSearch} />} {showCart && <Cart setShowCart={setShowCart} />}
        <Hero />
        <Explore />
        <Philosophy />
        <Bestsellers />
        <Information />
        <Links />
    </div>
  )
}

export default Home
