import React from 'react'
import '../main.css'
import SmartImage from './SmartImage';

const Information = () => {
  return (
    <div>
        <div className='informationSection'>
            <div className='informationCard'>
                    <SmartImage style= {{objectFit:"contain", width:"30%"}} src='Images/Truck.png'></SmartImage>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>FIXED Insured Booking</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>Flat price for pre-booking on all items.</div>
            </div>

            <div className='informationCard'>
                    <SmartImage style= {{objectFit:"contain", width:"30%", transform: "scale(0.7)"}} src='Images/Sheild.png'></SmartImage>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>FAST Refunds</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>No questions asked, same-day refunds.</div>
            </div>

            <div className='informationCard'>
                    <SmartImage style= {{objectFit:"contain", width:"30%", transform: "scale(0.7)"}} src='Images/Docs.png'></SmartImage>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>EASY Lifetime Warranty</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>Hassle-free lifetime manufacturing warranty.</div>
            </div>

            <div className='informationCard'>
                    <SmartImage style= {{objectFit:"contain", width:"30%", transform: "scale(0.7)"}} src='Images/Diamonds.png'></SmartImage>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>FAIR Trade-In-Value</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>Full value of your diamonds towards your next purchase.</div>
            </div>
        </div>
    </div>
  )
}

export default Information
