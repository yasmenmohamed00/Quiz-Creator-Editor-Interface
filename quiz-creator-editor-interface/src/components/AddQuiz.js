import React, { useState, useEffect } from 'react';
import { Form, Button, FormGroup, FormCheck } from 'react-bootstrap';
import { useQuizContext } from '../QuizContext';
import { questionsData } from '../ui/Questiondummydata';
import { useNavigate } from 'react-router-dom';
import QuestionSelectionModal from '../components/QuestionSelectionModal';

const AddQuiz = () => {
  const { addQuiz } = useQuizContext();
  const generateUniqueId = () => {
    // Generate a unique ID based on the current timestamp and random number
    return Date.now() + Math.floor(Math.random() * 1000);
  };

  const navigate = useNavigate();
  const [selectedQuestions, setSelectedQuestions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newQuiz, setNewQuiz] = useState({
    id: generateUniqueId(),
    title: '',
    description: '',
    questions_answers: [],
    url:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuiz({
      ...newQuiz,
      [name]: value,
    });
  };

  const handleQuestionSelection = (e) => {
    const { value } = e.target;
    const question = questionsData.find((q) => q.id === parseInt(value, 10));

    setSelectedQuestions((prevSelectedQuestions) => {

      if (!prevSelectedQuestions[question.id]) {
        return {
          ...prevSelectedQuestions,
          [question.id]: question,
        };
      }
      return prevSelectedQuestions;
    });
  };

  useEffect(() => {
    setNewQuiz((prevNewQuiz) => {
      const updatedQuestions = Object.values(selectedQuestions);
      return {
        ...prevNewQuiz,
        questions_answers: updatedQuestions,
      };
    });
  }, [selectedQuestions]);


  const handleSave = () => {

    addQuiz(newQuiz); // Add the new quiz to the context with selected questions
    console.log(newQuiz)
    navigate('/');
  };

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={newQuiz.title}
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
            value={newQuiz.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            name="url"
            value={newQuiz.url}
            onChange={handleInputChange}
          />
        </Form.Group>
        <QuestionSelectionModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          availableQuestions={questionsData}
          selectedQuestions={newQuiz.questions_answers}
          handleQuestionSelection={handleQuestionSelection}
          handleAddQuestions={() => setShowModal(false)}
        />
        <div className='d-flex justify-content-end py-3'>
          <Button className='mx-2' variant="primary" onClick={() => setShowModal(true)}>
            Select Questions
          </Button>

          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddQuiz;
