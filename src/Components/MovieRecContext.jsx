import {createContext} from "react";

const MovieContext=createContext({
    MovieFavoritesPoster:[],
    setMovieFavoritesPoster:()=>{},
    SliderItems:[],
    setSliderItems:()=>{},
    isLogined:false,
    setIsLogined:()=>{},
    News:[],
    setNews:()=>{}
});

export default MovieContext;