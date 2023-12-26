import React from 'react';
import { Form, Button} from 'react-bootstrap';


const QuizForm = ({handleInputChange, editedQuiz, filteredQuiz, handleSave }) => {
  return (
    <>
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
      <div className='d-flex justify-content-end my-3'>
        <Button variant="primary" onClick={handleSave} className='save'>
          Save
        </Button>
      </div>

    </>
  );
};

export default QuizForm;
