import React from 'react';
import { Modal, Button, FormCheck, FormGroup, Form } from 'react-bootstrap';

const QuestionSelectionModal = (props) => {
  const {
    showModal,
    closeModal,
    availableQuestions,
    handleQuestionSelection,
    handleAddQuestions,
  } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Select Questions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          {availableQuestions.map((question) => (
            <FormGroup key={question.id} className="mb-2">
              <FormCheck
                type="checkbox"
                id={`question-${question.id}`}
                label={question.text}
                value={question.id}
                onChange={handleQuestionSelection}
              />
            </FormGroup>
          ))}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddQuestions}>
          Add Selected Questions
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionSelectionModal;
