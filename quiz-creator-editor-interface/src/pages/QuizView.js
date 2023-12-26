import React from 'react';
import { Link } from 'react-router-dom';

const QuizView = ({ quizData }) => {
  const { title, description, url } = quizData;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Description: {description}.</p>
        <p className="card-text">URL: {url}.</p>
      </div>
      <div className="card-footer d-flex justify-content-end">
          <Link to={`/quiz-form/${quizData.id}`} className="btn btn-primary">View details</Link>
        </div>
    </div>
  );
};

export default QuizView;
