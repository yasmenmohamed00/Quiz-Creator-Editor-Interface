
import React from 'react';
import { useQuizContext } from '../QuizContext';

const QuestionList = ({ questionData,  quizId}) => {
  const { removeQuestionFromQuiz } = useQuizContext();

  const handleDeleteQuestion = (quizId, questionId) => {
      removeQuestionFromQuiz(quizId, questionId);
    };

  return (
    <>        
    <div className="question">

    {/* Check if answers is defined before mapping */}
    {Array.isArray(questionData) && questionData.length > 0 ? (
         <div className="row pt-3 row-cols-2 row-cols-lg-3">
            {questionData && questionData.map((question) => (
            <div className="col my-2" key={question.id}>
                <div className="card">
                    <h5 className="card-title p-3 d-flex justify-content-between align-items-center">{question.text}
                      <button onClick={() => handleDeleteQuestion(quizId, question.id)} className="btn btn-danger mt-3">
                        Delete
                     </button>
                  </h5>
                    <ul className="answers-list list-group list-group-flush">
                        {question.answers.map((answer) => (
                        <li key={answer.id} className={`list-group-item ${answer.is_true ? 'correct-answer' : 'incorrect-answer'}`}>
                            {answer.text} - {answer.is_true ? 'Correct' : 'Incorrect'}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            ))}
            </div>            
        ) : (
            <p>No answers available for this question.</p>
        )}
    </div>
    </>
  );
};

export default QuestionList;
