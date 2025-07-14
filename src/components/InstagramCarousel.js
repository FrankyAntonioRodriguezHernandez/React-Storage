import React from 'react';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const InstagramCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  ]

  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    appendDots: (dots) =>(
      <div style={{position: 'absolute', bottom:'20px', width:'100%', textAlign:'center' }} >
        <ul style={{margin:'0', padding: '0', display: 'inline-block'}}>{dots}</ul>
      </div>
    )
  }
  
  const carouselStyles ={
    margin: 'auto',
    width:'50%',
    height:'auto'
  }

  
};

export default InstagramCarousel;