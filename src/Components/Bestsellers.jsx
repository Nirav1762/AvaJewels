import React, { useState, useEffect } from 'react';
import '../main.css'
import Items from './bestsellerItem.json'
import { Link } from 'react-router';

const Bestsellers = () => {
  const buttonStyle = {
    color: "white",
    backgroundColor : "black",
    fontFamily: "Glegoo",
    marginTop: "2%",
    marginBottom: "2%",
    paddingTop: "0.7%",
    paddingBottom: "0.7%",
    paddingLeft: "1.5%",
    paddingRight: "1.5%",
    borderRadius: "6px",
    fontSize: "70%",
    cursor: "pointer"
 };

 const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <>
      <div className='bestsellersSection'>
        <div className='bestsellersHeader'>
          BOOK OUR BESTSELLERS
        </div>
        <p style={{textAlign:"center", fontFamily: 'Glegoo', fontSize:"110%"}}>Celebrate all special occasions by pre-booking our timeless jewelery</p>
        <div className='bestsellerProductsSection'>
          {Items.slice(0,3).map((item, index) => (
            <div className='bestsellerProductCard' key={item.itemNumber} onMouseEnter={() => setHoveredCardIndex(index)} onMouseLeave={() => setHoveredCardIndex(null)} style={{ position: 'relative' }}>
              {hoveredCardIndex === index && (
                <Link to ={item.ItemNameLink}><button className='buttonActive'>View</button></Link>
              )}
            <div className='bestsellerProductImage'>
              <img style={{width: "100%", objectFit: "cover"}} src={item.PrimarySource}></img>
            </div>
            <div className='bestsellerProductInfo'>
              <p style={{fontSize: "100%", overflowWrap: "break-word", wordWrap:"break-word", marginBottom: "0%"}}>{item.ItemName}</p>
              <p style={{fontSize: "90%", overflowWrap: "break-word", wordWrap:"break-word",color:"#c62a32", marginTop: "0%"}}>{item.Price}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      <div style={{width: "81%", borderBottom:"solid", borderWidth: "0.2px", borderColor: "rgba(0,0,0,0.2)", marginLeft:"9%", marginTop:"1%", marginBottom: "1%"}}></div>
    </>
  )
}

export default Bestsellers
