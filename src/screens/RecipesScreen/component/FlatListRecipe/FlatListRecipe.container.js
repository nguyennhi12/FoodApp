import React, {useState} from 'react';
import FlatListRecipe from './FlatListRecipe';
const FlatListRecipeContainer = props => {
  const [love, setLove] = useState(false);
  console.log('NhiNTY5 FlatListRecipeContainer RENDER');
  return <FlatListRecipe love={love} setLove={setLove} />;
};
export default ItemRecipeContainer;
