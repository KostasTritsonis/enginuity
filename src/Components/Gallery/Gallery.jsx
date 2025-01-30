import React from 'react'
import './Gallery.css'
import photo_1 from '../../assets/photo_1.jpg'
import photo_2 from '../../assets/photo_2.jpg'
import photo_3 from '../../assets/photo_3.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="photos">
            <img src={photo_2} alt="" />
            <img src={photo_3} alt="" />
        </div>
    </div>
  )
}

export default Gallery