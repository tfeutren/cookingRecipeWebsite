import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter_frigo from '../components/Filter_frigo';
import { recipeList } from '../datas/recipeList';
import { renderDifficulty } from '../utility';

const FrigoPage = () => {

  return (
    <div>
      <Filter_frigo />
    </div>
  );
};

export default FrigoPage;
