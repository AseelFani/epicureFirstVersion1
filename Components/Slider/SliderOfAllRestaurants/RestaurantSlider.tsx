import React, { useState } from 'react'
import { Restaurants } from '../../../Constants/Restaurants';
import 'react-slideshow-image/dist/styles.css';
import './StyledSlider.ts'
import { ResComponent, SlideContainer, SlideDesktopContainer } from './StyledSlider';
import SetWindowSize from '../../../helpers/setWindowSize';
import { YossiRestaurants } from '../../../Constants/YossiRestaurants';



const SliderOfRestaurants=()=>{
  const windowSize = SetWindowSize();
  const ThreeRestaurants = Restaurants.filter(res => {
    return (res.name === "Claro" || res.name === 'Lumina'|| res.name === 'Tiger Lilly');
  });
  
    
 return <>
   {windowSize<600?
      <SlideContainer>
        {Restaurants.map((restaurant, index) => (
            <ResComponent key={index}>
              <img src={restaurant.imag} /><br/><br/>
              <div>{restaurant.name}</div><br/>
              <span>{restaurant.chef}</span><br/><br/>
            </ResComponent>
        ))}
      </SlideContainer>
      :
      <SlideDesktopContainer>
        {ThreeRestaurants.map((restaurant, index) => (
            <ResComponent key={index}>
              <img src={restaurant.imag} /><br/><br/>
              <div>{restaurant.name}</div><br/>
              <span>{restaurant.chef}</span><br/><br/>
              <img style={{height:'20%',width:'50%'}} src={restaurant.rating} /><br/><br/>
            </ResComponent>
        ))}
      </SlideDesktopContainer>
}

</>
}
export default SliderOfRestaurants;