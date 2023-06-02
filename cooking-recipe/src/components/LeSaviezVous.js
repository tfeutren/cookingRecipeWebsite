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
      <p>{question.question}</p>
      <p>{question.answer}</p>
      <button onClick={changeQuestion}>Change Question</button>
    </div>
  );
}

export default LeSaviezVous;

