import React, { useState } from 'react'
import 'react-slideshow-image/dist/styles.css';
import '../SliderOfAllRestaurants/StyledSlider.ts'
import { YossiRestaurants } from '../../../Constants/YossiRestaurants';
import { ResComponent, SlideContainer, YossiResComponent, YossiSlideContainer } from '../SliderOfAllRestaurants/StyledSlider';



const RestaurantsForYossi=()=>{
    
 return <>
      <YossiSlideContainer>
        {YossiRestaurants.map((restaurant, index) => (
            <YossiResComponent key={index}>
            <img src={restaurant.imag} />
            <div>{restaurant.name}</div>
            </YossiResComponent>
        ))}
     
     </YossiSlideContainer>
    

 </>
}
export default RestaurantsForYossi;