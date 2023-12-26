import React, {useEffect} from 'react';
import QuizView from './QuizView'
import { useQuizContext } from '../QuizContext';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const { quizzes, fetchQuizzes } = useQuizContext();

  useEffect(() => {
      // Fetch quizzes when the component mounts
      fetchQuizzes();
  }, [fetchQuizzes]); 
  return (
    <div className="container">
      <div className='header d-flex justify-content-between p-3'>
        <h2>Quiz Creator & Editor</h2>
       <Link to='quiz-add' className="btn btn-primary line-height">Add New Quiz</Link>
      </div>
      <div className="row pt-3 row-cols-2 row-cols-lg-3" >
        {quizzes.map((quizItem) => (
          <div className="col  align-items-stretch" key={quizItem.id}>
            <QuizView quizData={quizItem} />
          </div>
        ))}
      </div>
  </div>
  );
};

export default QuizList;