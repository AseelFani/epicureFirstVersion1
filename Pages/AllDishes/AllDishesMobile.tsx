import { Chefs } from "../../Constants/Chefs";
import { ColResComponent, Column, Title } from "../AllRestaurants/Restaurants.Styled";
import '../AllRestaurants/resStyle.css'
import { Restaurants } from "../../Constants/Restaurants";
import { ChefStyled } from "../../Components/Chef/Chef.styled";
import { Dishes } from "../../Constants/Dishes";
import { MainTitle } from "../../Components/Icons/ProfilePage/ProfilePage.styled";

export default function AllDisheMobile() {
  const signatureDishes = Dishes.filter(dish => {
    return dish.signature;
  });
 

  
  return (
    <>
    <MainTitle style={{color:'red'}}>It's not ready yet, please don't check it</MainTitle>
    <Title>Dishes</Title>
     <div className="tabs">
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">All</label>
        <div className="tabs__content">
          {Dishes.map((dish, index) => (
              <ColResComponent key={index}><br/>
                <img src={dish.imag} />
                <div>{dish.name}</div>
                <p>{dish.description}</p>
                <div>{dish.price}</div>
              </ColResComponent>
          ))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">Signature</label>
        <div className="tabs__content">
        {signatureDishes.map((dish, index) => (
            <ColResComponent key={index}><br/>
              <img src={dish.imag} />
              <div>{dish.name}</div>
              <p>{dish.description}</p>
              <div>{dish.price}</div><br/>
              <img style={{width:'10%',height:'10%'}} src={dish.signature} />
        </ColResComponent>
        ))}
        </div>
       
        
      </div >
  </>
  )
}
