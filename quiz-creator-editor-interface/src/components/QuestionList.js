
import React from 'react';
import { useQuizContext } from '../QuizContext';
import QuestionView from './QuestionView'
const QuestionList = ({ questionData,  quizId}) => {
  const { removeQuestionFromQuiz } = useQuizContext();

  const handleDeleteQuestion = (questionId) => {
      removeQuestionFromQuiz(quizId, questionId);
    };

  return (
    <>        
    <div className="question">

    {/* Check if answers is defined before mapping */}
    {Array.isArray(questionData) && questionData.length > 0 ? (
        <QuestionView questionData={questionData} 
        handleDeleteQuestion={(questionId) => handleDeleteQuestion(questionId)}
        />        
    ) : (
        <p>No answers available for this question.</p>
    )}
    </div>
    </>
  );
};

export default QuestionList;
