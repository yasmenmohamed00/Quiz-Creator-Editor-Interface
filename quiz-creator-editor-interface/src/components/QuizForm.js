import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useQuizContext } from '../QuizContext';
import QuestionList from './QuestionList';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import QuestionSelectionModal from '../components/QuestionSelectionModal'
import { questionsData } from '../ui/Questiondummydata'; 

const QuizForm = () => {
  const { quizzes, updateQuiz, addQuestionToQuiz } = useQuizContext();
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [filteredAvailableQuestions, setFilteredAvailableQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const [editedQuiz, setEditedQuiz] = useState(null);
  const filteredQuiz = quizzes.find((quiz) => quiz.id === +params.id);
  
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedQuiz({ ...filteredQuiz, [name]: value });
  };

  const handleSave = () => {
    if (editedQuiz) {
      updateQuiz(filteredQuiz.id, editedQuiz);
    }
    navigate('/');
  };
  
  const handleQuestionSelection = (e) => {
    const { value } = e.target;
    const question = questionsData.find((q) => q.id === parseInt(value, 10));

    setSelectedQuestions((prevSelectedQuestions) => {

      if (!prevSelectedQuestions[question.id]) {
        return { [question.id]: question };
      }
      
      return prevSelectedQuestions;
    });
  };
  
 
  const handleAddQuestions = () => {
    addQuestionToQuiz(filteredQuiz.id, Object.values(selectedQuestions));
    closeModal(); // Close the modal after adding questions

  };
  useEffect(() => {
    const filteredQuestions = questionsData.filter((question) =>
    !filteredQuiz.questions_answers.some((q) => q.id === question.id)
  );
    setFilteredAvailableQuestions(filteredQuestions);
  }, [showModal, quizzes]);

  // Function to open the modal
  const openModal = () => {
      setShowModal(true);
    }; 
  
  // Function to close the modal
  const closeModal = () => {
      setShowModal(false);
    };
  

  return (
    <div className="container py-5">
      <div className='header d-flex justify-content-between'>
        <h2>Edit Your Quiz </h2>
      </div>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={editedQuiz ? editedQuiz.title : filteredQuiz.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={editedQuiz ? editedQuiz.description : filteredQuiz.description}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
      <div className='d-flex justify-content-end p-3'>        
        {/* Button to open the modal */}
        <Button variant="primary" onClick={openModal}>
          Add Selected Questions
        </Button>
      </div>

      <QuestionList questionData={filteredQuiz.questions_answers} quizId={filteredQuiz.id} />
      <div className='d-flex justify-content-end'>
        <Button variant="primary" onClick={handleSave} className='save'>
          Save
        </Button>
      </div>
       {/* Use the QuestionSelectionModal component */}
       <QuestionSelectionModal
        showModal={showModal}
        closeModal={closeModal}
        availableQuestions={filteredAvailableQuestions}
        handleQuestionSelection={handleQuestionSelection}
        handleAddQuestions={handleAddQuestions}
      />
    </div>
  );
};

export default QuizForm;
