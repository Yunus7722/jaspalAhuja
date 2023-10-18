import React from 'react'
import './gallery.css'

export default function GalleryData(props) {
  return (
    <div className='t-card'>
        <div className="t-image">
            <img src={props.image} alt="firstImage" />
        </div>
        {/* <h4>{props.heading}</h4> */}
        {/* <p>{props.text}</p> */}
    </div>
  )
}