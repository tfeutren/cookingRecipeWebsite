import React, { useState } from 'react';
import { questionList } from '../datas/questionList';
import '../styles/LeSaviezVous.css';

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionList.length);
    return questionList[randomIndex];
  }

function LeSaviezVous() {
    const [question] = useState(getRandomQuestion());

  return (
    <div className='LeSaviezVous'>
      <h2>Le saviez-vous</h2>
      <p className='aligne'> <strong>{question.question} </strong>  </p>
      <p className='aligne'>{question.answer}</p>
    </div>
  );
}

export default LeSaviezVous;