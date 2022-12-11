import React, { useState } from 'react'
import { Dishes } from '../../Constants/Dishes';
import SetWindowSize from '../../helpers/setWindowSize';
import { ResComponent, SlideContainer, SlideDesktopContainer } from './SliderOfAllRestaurants/StyledSlider';



const SliderOfDishes=()=>{
  const windowSize = SetWindowSize();
  const ThreeDishes = Dishes.filter(res => {
    return (res.name === "Pad Ki Mao" || res.name === 'Garbanzo Frito'|| res.name === 'Smoked Pizza');
  });
  
    
 return <>
   {windowSize<600?
      <SlideContainer>
        {Dishes.map((restaurant, index) => (
            <ResComponent key={index}>
              <img src={restaurant.imag} /><br/><br/>
              <div>{restaurant.name}</div>
              <p>{restaurant.description}</p>
              <img style={{width:'10%',height:'10%',paddingLeft:'10%'}} src={restaurant.signature}/><br/><br/>
              <div>{restaurant.price}</div><br/>
            </ResComponent>
        ))}
      </SlideContainer>
      :
      <SlideDesktopContainer>
         {ThreeDishes.map((restaurant, index) => (
            <ResComponent key={index}>
              <img src={restaurant.imag} /><br/><br/>
              <div>{restaurant.name}</div><br/>
            </ResComponent>
        ))}
      </SlideDesktopContainer>
}

</>
}
export default SliderOfDishes;