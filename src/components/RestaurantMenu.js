import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);//need to call only once. on page load

    const fetchMenu = async ()=>{
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.58481550844489&lng=73.74097265303135&restaurantId=253596&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    }
    if( resInfo===null){
        return <Shimmer/>;
    } 

    const {name,cuisines,costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>menu</h2>
            <ul>
            {itemCards?.map(item=>
                <li>{item.card.info.name}</li>
            )}
            </ul>

        </div>
    );
}
export default RestaurantMenu;