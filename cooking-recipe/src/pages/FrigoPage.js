import React, { useState } from 'react';
import Filter_frigo from '../components/Filter_frigo';
import '../styles/Filter_frigo.css';


const FrigoPage = ({ recipeList }) => {

  return (
    <div className="frigo">
      <Filter_frigo recipeList={recipeList} />
    </div>
  );
};

export default FrigoPage;
