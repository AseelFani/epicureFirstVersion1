import { Chefs } from "../../Constants/Chefs";
import { ColResComponent, Column, Title } from "../AllRestaurants/Restaurants.Styled";
import '../AllRestaurants/resStyle.css'
import { Restaurants } from "../../Constants/Restaurants";
import { ChefStyled } from "../../Components/Chef/Chef.styled";

export default function AllChefsMobile() {
  const NewChef = Chefs.filter(chef => {
    return chef.name === "Asaf Granit" || chef.name === 'Aviv Moshe'|| chef.name === 'Eyal Shani'|| chef.name === 'Meir Adoni'|| chef.name === 'Omer Miller'|| chef.name === 'Shahaf Shabtay';
  });
  const ViewdChef = Chefs.filter(chef => {
    return chef.name === "Asaf Granit" || chef.name === 'Aviv Moshe'|| chef.name === 'Eyal Shani';
  });

  
  return (
    <>
    <Title>Chefs</Title>
     <div className="tabs">
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">All</label>
        <div className="tabs__content">
          {Chefs.map((restaurant, index) => (
              <ChefStyled key={index}><br/>
                <img src={restaurant.imag} />
                <div>{restaurant.name}</div>
              </ChefStyled>
          ))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">New</label>
        <div className="tabs__content">
        {NewChef.map((chef, index) => (
            <ChefStyled key={index}><br/>
              <img src={chef.imag} />
              <div >{chef.name}</div>
            </ChefStyled>
        ))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" defaultChecked />
        <label htmlFor="tab3" className="tabs__label">Most Viewd</label>
        <div className="tabs__content">
          {ViewdChef.map((restaurant, index) => (
              <ChefStyled key={index}><br/>
                <img src={restaurant.imag} />
                <div>{restaurant.name}</div>
              </ChefStyled>
          ))}
        </div>
        
      </div >
  </>
  )
}
