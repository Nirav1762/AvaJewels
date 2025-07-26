import React from 'react'
import '../main.css'
import SmartImage from './SmartImage';

function philosophy() {
  const badge = {
    border: "solid",
    borderWidth: "1px",
    backgroundColor: "Black",
    width: "fit-content",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontSize: "70%",
    color: "white",
    borderRadius: "20px"
  };
  return (
    <>
    <div className='philosophySection'>
    <SmartImage className='philosophySectionImage' src='Images/homePageRing.png'></SmartImage>
    <div className='philosophySectionText'>
      <p style = {badge}>● AVA JEWELS PHILOSOPHY</p>
      <h1 style={{fontSize: "140%", textAlign: "left", width: "100vw", fontFamily: 'ZT Mota', fontWeight: 'normal'}}>EFFORTLESSLY ELEGANT</h1>
      <p><strong>QUALITY:</strong> Selecting diamonds can be daunting, so we simplify it by offering only the best — VS1+ clarity, G+ color, and Ideal Cut — ensuring a brilliance that even trained jewellers admire.</p>
      <p><strong>DESIGN:</strong> Our collection is carefully selected from feedback of over 10,000 customers, blending timeless and modern styles that remain relevant as modern-day classics.</p>
      <strong>OUR SECRET:</strong> Crafted for daily wear, our pieces feature premium natural diamonds and 37% more solid gold for added durability.
      <p><strong>CHERRY ON TOP:</strong> Versatility is key; our jewelry seamlessly transitions from your daily office tour to the luxurious wedding nights, keeping up with your dynamic lifestyle.</p>
      </div>
    </div>
    </>
  )
}

export default philosophy
