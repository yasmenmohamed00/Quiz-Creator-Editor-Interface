import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();
export const useQuizContext = () => useContext(QuizContext);

// Mocked initial quiz data
const initialQuizzes = [
    {
        "created": "2020-09-09 09:26:39",
        "description": "Description",
        "id": 29,
        "modified": "2020-09-09 09:26:39",
        "questions_answers": [
          {
            "answer_id": null,
            "answers": [
              {
                "id": 122,
                "is_true": false,
                "text": "question 1 answer 1 false"
              },
              {
                "id": 123,
                "is_true": false,
                "text": "question 1 answer 2 false"
              },
              {
                "id": 124,
                "is_true": true,
                "text": "question 1 answer 3 true"
              },
              {
                "id": 125,
                "is_true": false,
                "text": "question 1 answer 4 false"
              }
            ],
            "feedback_false": "question 1 false feedback",
            "feedback_true": "question 1 true feedback",
            "id": 53,
            "text": "question 1 text"
          },
          {
            "answer_id": null,
            "answers": [
              {
                "id": 126,
                "is_true": true,
                "text": "question 2 answer 1 true"
              },
              {
                "id": 127,
                "is_true": false,
                "text": "question 2 answer 2 false"
              }
            ],
            "feedback_false": "question 2 false feedback",
            "feedback_true": "question 2 true feedback",
            "id": 54,
            "text": "question 2 text"
          },
          {
            "answer_id": null,
            "answers": [
              {
                "id": 128,
                "is_true": false,
                "text": "question 3 answer 1 false"
              },
              {
                "id": 129,
                "is_true": true,
                "text": "question 3 answer 2 true"
              },
              {
                "id": 130,
                "is_true": false,
                "text": "question 3 answer 3 false"
              }
            ],
            "feedback_false": "question 3 false feedback",
            "feedback_true": "question 3 true feedback",
            "id": 55,
            "text": "question 3 text"
          }
        ],
        "score": null,
        "title": "quiz title",
        "url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
      },{
        "created": "2020-09-09 09:26:39",
        "description": "DescriptionDescriptionDescriptionDescription",
        "id": 30,
        "modified": "2020-09-09 09:26:39",
        "questions_answers": [
          {
            "answer_id": null,
            "answers": [
              {
                "id": 122,
                "is_true": false,
                "text": "question 1 answer 1 false"
              },
              {
                "id": 123,
                "is_true": false,
                "text": "question 1 answer 2 false"
              },
              {
                "id": 124,
                "is_true": true,
                "text": "question 1 answer 3 true"
              },
              {
                "id": 125,
                "is_true": false,
                "text": "question 1 answer 4 false"
              }
            ],
            "feedback_false": "question 1 false feedback",
            "feedback_true": "question 1 true feedback",
            "id": 53,
            "text": "question 1 text"
          },
          {
            "answer_id": null,
            "answers": [
              {
                "id": 126,
                "is_true": true,
                "text": "question 2 answer 1 true"
              },
              {
                "id": 127,
                "is_true": false,
                "text": "question 2 answer 2 false"
              }
            ],
            "feedback_false": "question 2 false feedback",
            "feedback_true": "question 2 true feedback",
            "id": 54,
            "text": "question 2 text"
          },
          {
            "answer_id": null,
            "answers": [
              {
                "id": 128,
                "is_true": false,
                "text": "question 3 answer 1 false"
              },
              {
                "id": 129,
                "is_true": true,
                "text": "question 3 answer 2 true"
              },
              {
                "id": 130,
                "is_true": false,
                "text": "question 3 answer 3 false"
              }
            ],
            "feedback_false": "question 3 false feedback",
            "feedback_true": "question 3 true feedback",
            "id": 55,
            "text": "question 3 text"
          }
        ],
        "score": null,
        "title": "quiz title",
        "url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
      }
];

const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const fetchQuizzes = () => {
    return initialQuizzes;
};
  // Function to add a new quiz
  const addQuiz = (newQuiz) => {
    setQuizzes([...quizzes, newQuiz]);
  };

  // Function to update a quiz by ID
  const updateQuiz = (id, updatedQuiz) => {
    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === id ? { ...quiz, ...updatedQuiz } : quiz
    );
    setQuizzes(updatedQuizzes);

  };

 // Function to remove a question from a specific quiz by question ID
  const removeQuestionFromQuiz = (quizId, questionId) => {
    const updatedQuizzes = quizzes.map((quiz) => {
        if (quiz.id === quizId) {
        const updatedQuestions = quiz.questions_answers.filter(
            (question) => question.id !== questionId
            
        );
        return { ...quiz, questions_answers: updatedQuestions };
        }
        return quiz;
    });
    setQuizzes(updatedQuizzes);
    };
    
  // Function to add a new question to a specific quiz
    const addQuestionToQuiz = (quizId, newQuestions) => {
        const updatedQuizzes = quizzes.map((quiz) => {
        if (quiz.id === quizId) {
            return { ...quiz, questions_answers: [...quiz.questions_answers, ...newQuestions], hidden: true };
        }
        return quiz;
        });
        setQuizzes(updatedQuizzes);
    };
  

  // Context value containing state and functions
  const contextValue = {
    quizzes,
    addQuiz,
    updateQuiz,
    fetchQuizzes,
    removeQuestionFromQuiz,
    addQuestionToQuiz
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
