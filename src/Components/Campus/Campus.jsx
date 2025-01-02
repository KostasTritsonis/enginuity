import React from 'react'
import './Campus.css'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={null} alt="" />
            <img src={null} alt="" />
            <img src={null} alt="" />
            <img src={null} alt="" />
        </div>
        <button className='btn dark-btn'>See more Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus