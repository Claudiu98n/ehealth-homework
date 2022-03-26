import React from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";

const PatientDetailsModal = ({ show, onHide, activePacient }) => {
  const {
    first_name,
    last_name,
    id,
    email,
    gender,
    diagnosis_code,
    diagnosis_description,
    diagnosis_description_detailed,
    administered_drug_treatment,
  } = activePacient;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Pacient nr. {id}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            {first_name} {last_name}
          </ListGroup.Item>
          <ListGroup.Item as="li">Gen: {email}</ListGroup.Item>
          <ListGroup.Item as="li">Email: {gender}</ListGroup.Item>
          <ListGroup.Item as="li">Cod diagnostic: {diagnosis_code}</ListGroup.Item>
          <ListGroup.Item as="li">Descriere diagnostic: {diagnosis_description}</ListGroup.Item>
          <ListGroup.Item as="li">
            Descriere diagnostic detaliată: {diagnosis_description_detailed}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            Tratament administrat: {administered_drug_treatment}
          </ListGroup.Item>
          <ListGroup.Item as="li"></ListGroup.Item>
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} variant="secondary">
          Inchide
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PatientDetailsModal;
