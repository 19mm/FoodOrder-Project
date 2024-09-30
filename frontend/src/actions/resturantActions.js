import { All_RESTAURANT_REQUEST, All_RESTAURANT_SUCCESS } from "../constants/restaurantConstant"
import axios from "axios"

const getRestaurants = () =>{
    return async(dispatch)=>{
        try{
            dispatch({type: All_RESTAURANT_REQUEST});
            let link='/api/v1/eats/stores';
            const {data}=await axios.get(link);
            console.log(data);
            const {restuarants, count}=data;
            dispatch({
                type:All_RESTAURANT_SUCCESS, payload: {restuarants ,count}, 
            });
        }catch(err){
            console.log(err);
        }
    };
};