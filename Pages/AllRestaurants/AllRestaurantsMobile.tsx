import { useState } from "react";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import './resStyle.css'
import { FilteredResults } from "../../Components/SerachBar/SearchBar.styled";
import Chef from "../../Components/Chef/Chef";
import RestaurantSlider from "../../Components/Slider/SliderOfAllRestaurants/RestaurantSlider";
import { Restaurants } from "../../Constants/Restaurants";
import { ColResComponent, Column, Title } from "../AllRestaurants/Restaurants.Styled";
import popular from '../../assets/Rating/four.png';


export default function AllRestaurantsMobile() {
  const NewRes = Restaurants.filter(res => {
    return res.name === "Claro - U.S" || res.name === 'Kab Kem - U.S'|| res.name === 'Messa - U.S';
  });
  const PopularRes = Restaurants.filter(res => {
    return res.rating=== popular;
  });
  const OpenRes = Restaurants.filter(res => {
    return res.openNow?.length  ;
  });
  
  return (
    <>
    <Title>Restaurants</Title>
     <div className="tabs">
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">All</label>
        <div className="tabs__content">
        <Column>
          {Restaurants.map((restaurant, index) => (
              <ColResComponent key={index}>
                <img src={restaurant.imag} />
                <div>{restaurant.name}</div>
                <span>{restaurant.chef}</span>
              </ColResComponent>
          ))}
        </Column>
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">New</label>
        <div className="tabs__content">
        <Column>
        {NewRes.map((restaurant, index) => (
            <ColResComponent key={index}>
              <img src={restaurant.imag} />
              <div>{restaurant.name}</div>
              <span>{restaurant.chef}</span>
        </ColResComponent>
        ))}
      </Column>
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
        <label htmlFor="tab3" className="tabs__label">Most Popular</label>
        <div className="tabs__content">
        <Column>
        {PopularRes.map((restaurant, index) => (
            <ColResComponent key={index}>
              <img src={restaurant.imag} />
              <div>{restaurant.name}</div>
              <span>{restaurant.chef}</span>
        </ColResComponent>
        ))}
      </Column>
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab4" />
        <label htmlFor="tab4" className="tabs__label">Open</label>
        <div className="tabs__content">
        <Column>
        {OpenRes.map((restaurant, index) => (
            <ColResComponent key={index}>
              <img src={restaurant.imag} />
              <div>{restaurant.name}</div>
              <span>{restaurant.chef}</span>
        </ColResComponent>
        ))}
      </Column>
        </div>
      </div>
  </>
  )
}
