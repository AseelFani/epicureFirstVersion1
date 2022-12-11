import { useState } from "react";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { FilteredResults, StyledSearchBar } from "./SearchBar.styled";
import Restaurant from "./SourceInfo";
import '../../Pages/AllRestaurants/resStyle.css'

const getFilteredItems = (query: string, items: any[]) => {
  if (query) {
    query= capitalizeFirstLetter(query);
    return items.filter((restaurant) => restaurant.name.includes(query));
}};

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const { tracks } = Restaurant;
  const { items } = tracks;
  const filteredItems = getFilteredItems(query, items);
  
  return (
    <>
    <StyledSearchBar className="nosubmit" type="search" placeholder="Search for restaurant cuisine, chef" onChange={(e) => setQuery(e.target.value)}/>
      <ul >
        {filteredItems&& filteredItems.map((value) => (
          <FilteredResults key={value.name}>{value.name}</FilteredResults>
        ))}
      </ul>
     
      </>
  );
}
