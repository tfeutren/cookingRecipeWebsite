import React, { useState } from 'react';
import { questionList } from '../datas/questionList';
import '../styles/LeSaviezVous.css';

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionList.length);
    return questionList[randomIndex];
  }

function LeSaviezVous() {
    const [question, setQuestion] = useState(getRandomQuestion());

  const changeQuestion = () => {
    setQuestion(getRandomQuestion());
  };

  return (
    <div className='whole'>
      <h2>Le saviez-vous</h2>
      <p className='aligne-title'> <strong>{question.question} </strong>  </p>
      <p className='aligne'>{question.answer}</p>
    </div>
  );
}

export default LeSaviezVous;

