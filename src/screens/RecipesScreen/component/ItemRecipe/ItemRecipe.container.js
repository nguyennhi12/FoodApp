import React, {useState} from 'react';
import ItemRecipe from './ItemRecipe';
const ItemRecipeContainer = props => {
  const dataRecipe = props.item;
  console.log('NhiNTY5 ItemRecipeContainer RENDER');
  return (
    <ItemRecipe item={dataRecipe} animatedFlatlistX={props.animatedFlatlistX} />
  );
};
export default ItemRecipeContainer;
