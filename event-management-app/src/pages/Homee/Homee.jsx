import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import image1 from '../../assets/consert2.jpg'
import image2 from '../../assets/birthday.jpg'
import image3 from '../../assets/concert3.jpg'
import './Homee.css'
// import image4 from '../../assets/Birthday.jpg'
const Homee = () => {
  const images = [
    image1,image2,image3
  ];
  return (
    <div>
        <Navbar/>
        <ImageSlider  images={images}/>
    </div>
  )
}

export default Homee