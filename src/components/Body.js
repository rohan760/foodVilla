import Shimmer from './Shimmer';
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

  
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]=useState([]);
  const [filteredRestaurants, setFilteredRestaurants]=useState([]);
  const [searchText, setSearchText]=useState("");
  
useEffect(()=>{
    fetchData();

},[]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.58481550844489&lng=73.74097265303135&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


return listOfRestaurants?.length===0?<Shimmer/>:(
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value); 
                }}/>
                <button 
                onClick={()=>{
                  setFilteredRestaurants(listOfRestaurants.filter((restaurant)=>
                        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
                }}
                >Search</button>
            </div>
            <button 
            className="filter-btn"
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    res => res.info.avgRating>4
                );
                setListOfRestaurants(filteredList);
            }}
            >
                Top rated restaurants
            </button>
        </div>
        <div className="res-container">
            {filteredRestaurants?.map((restaurant)=>{
                return(
                <Link to={'/restaurants/'+restaurant?.info?.id}  key={restaurant?.info?.id}><RestaurantCard {...restaurant?.info}/></Link>
                );
            })}
        </div>
    </div>
  );
};

export default Body;