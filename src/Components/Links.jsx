import React from 'react'
import '../main.css'
import { Link } from 'react-router-dom'

const Links =  () => {
  return (
    <>
        <div className='linksSection'>
            <div className='companyLinks'>
                <p>COMPANY</p>
                <Link to= "/about" className='internalLinks'>About Us </Link>
                <Link to="/faq" className='internalLinks'>FAQs </Link>
                <Link to="/contactUs" className='internalLinks'>Contact Us </Link>
            </div>

            <div className='productLinks'>
                <p>PRODUCT</p>
                <Link to="/refunds" className='internalLinks'>Refund Policy </Link>
            </div>

            <div className='legalLinks'>
                <p>LEGAL</p>
                <Link to= "/warranty" className='internalLinks'>Lifetime Warranty </Link>
                <Link to="/privacy" className='internalLinks'>Privacy Policy </Link>
                <Link to ="/tos"className='internalLinks'>Terms Of Service </Link>
            </div>

            <div className='emailSection'>
                <p>Stay up to date with AVA JEWELS LLC</p>
                <div className="emailContainer">
                    <input type="email" className="emailInput" placeholder="Email"></input>
                    <button type="submit" className="sendButton"> ➜</button>
                </div>
            </div>
        </div>
        <div style={{width: "80%", borderBottom:"solid", borderWidth: "0.2px", borderColor: "rgba(0,0,0,0.2)", marginTop:"2%", marginLeft: "10%", marginBottom: "1%"}}></div>
        <div style={{fontFamily: 'Glegoo', fontSize: "90%", marginLeft: "8%", marginBottom: "1%", color: "rgba(0,0,0,0.8)"}}>© 2025 AVA Jewels, All rights reserved.</div>
    </>
  )
}

export default Links
