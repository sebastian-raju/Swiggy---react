import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {

  let [resList, setResList] = useState([]);

  const topRated = () => {
    const filteredData = resList?.filter(obj => obj?.info?.avgRating > 4.2);
    setResList(filteredData);
  }




  useEffect(()=>{
    getProducts();
  },[])

  const getProducts = async () => {
    const response = await axios.get('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    //https://thingproxy.freeboard.io/fetch/

    console.log(response);
    

    setResList(response?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
               response?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
               response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||   
               response?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
               response?.data?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  return (
    <div className="body-main-container">
      <div className="search-container">
        <input className="inp-hotel" type="text" name="" id="" placeholder="Search for food or restaurants"/>
      </div>
      <div className="topButton-container"><button className="topButton" onClick={()=>{
        topRated();
      }}>Top Rated Restaurants</button></div>
      <div className="card-body-container">
        {
          (resList.length > 0) ? 
          (resList?.map(obj => <CardComponent key = {obj?.info?.id} cardObj = {obj?.info}/>))
          :
          (<Shimmer/>)
        }

      </div>
    </div>
  )
}


export default Body;