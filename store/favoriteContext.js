import { createContext, useState } from "react";

export const favoriteContext = createContext({
    favId: [],
    addFavorite: (id)=> {},
    removeFavorite: (id) => {}
})

function FavoriteContextProvider({children}){
    const [favoriteMealID, setFavoriteMealID]=useState([]);

    function addFavorite(id){
        setFavoriteMealID((currentFavoriteId) =>[...currentFavoriteId, id])
    }

    function removeFavorite(id){
        setFavoriteMealID((currentFavoriteId) => currentFavoriteId.filter((mealId) => mealId !== id))
    }

    const values = {
        favId: favoriteMealID,
        addFavorite : addFavorite,
        removeFavorite : removeFavorite
    };
    return(
        <favoriteContext.Provider value ={values}>
            {children}
        </favoriteContext.Provider>
    ); 
};
export default FavoriteContextProvider;