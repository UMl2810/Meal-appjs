import { useContext } from 'react';
import { Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { favoriteContext } from '../store/favoriteContext'; 
import MealsList from '../components/MealsList';

function FavoritesScreen() {

  const favoriteCtx= useContext(favoriteContext);

  const favoriteMeals = MEALS.filter(meal => favoriteCtx.favId.includes(meal.id))

  if(favoriteMeals.length===0){
    return <Text>add more meals</Text>;
  }
  return <MealsList prop = {favoriteMeals}/>
}

export default FavoritesScreen;
