import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Container } from "react-bootstrap";

const AddModal = ({show, handleClose, doctorName, handleSubmit}) => {
  

     
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{doctorName?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control type="email" placeholder="Enter your full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="date" placeholder="Password" />
            </Form.Group>
            <Container className="d-flex gap-3 justify-content-center">
              <Button variant="success" onClick={handleSubmit}>
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;