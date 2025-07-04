import React from 'react'
import '../main.css'
const Information = () => {
  return (
    <div>
        <div className='informationSection'>
            <div className='informationCard'>
                    <img style= {{objectFit:"contain", width:"30%"}} src='src\assets\Images\Truck.png'></img>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>FIXED Insured Booking</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>Flat price for pre-booking on all items.</div>
            </div>

            <div className='informationCard'>
                    <img style= {{objectFit:"contain", width:"30%", transform: "scale(0.7)"}} src='src\assets\Images\Sheild.png'></img>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>FAST Refunds</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>No questions asked, same-day refunds.</div>
            </div>

            <div className='informationCard'>
                    <img style= {{objectFit:"contain", width:"30%", transform: "scale(0.7)"}} src='src\assets\Images\Docs.png'></img>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>EASY Lifetime Warranty</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>Hassle-free lifetime manufacturing warranty.</div>
            </div>

            <div className='informationCard'>
                    <img style= {{objectFit:"contain", width:"30%", transform: "scale(0.7)"}} src='src\assets\Images\Diamonds.png'></img>
                    <div style={{fontFamily: "ZT Mota", fontSize:"125%", wordBreak:"break-word", overflowWrap:"break-word"}}>FAIR Trade-In-Value</div>
                    <div style={{fontFamily: "Glegoo", color: "rgb(44, 45, 46)",fontSize:"90%", wordBreak:"break-word", overflowWrap:"break-word", marginTop: "3%"}}>Full value of your diamonds towards your next purchase.</div>
            </div>
        </div>
    </div>
  )
}

export default Information
