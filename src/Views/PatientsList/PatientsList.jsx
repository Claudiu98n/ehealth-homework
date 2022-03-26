import React, { useState, useEffect } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import { Container, Table, Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import PatientDetailsModal from "../../Components/PatientDetailsModal/PatientDetailsModal";

const PatientsList = () => {
  const [patientsList, setPatientsList] = useState([]);
  const [activePacient, setActivePacient] = useState({
    first_name: "",
    last_name: "",
    id: "",
    email: "",
    gender: "",
    diagnosis_code: "",
    diagnosis_description: "",
    diagnosis_description_detailed: "",
    administered_drug_treatment: "",
  });
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (pacientDetails) => {
    setActivePacient(pacientDetails);
    setShow(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://alexgr.ro/ehealth/patients.json");
        if (result.status === 200) {
          setPatientsList(result.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let toRender;

  if (loading) {
    toRender = <PuffLoader size={60} />;
  } else if (patientsList.length > 0) {
    toRender = (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Prenume</th>
            <th>Nume</th>
            <th>Acțiuni</th>
          </tr>
        </thead>
        <tbody>
          {patientsList.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.first_name}</td>
              <td>{patient.last_name}</td>
              <td>
                <Button onClick={() => handleShow(patient)} className="w-100" variant="link">
                  Detalii pacient {patient.id}
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    <p>There are no patients.</p>;
  }

  return (
    <div>
      <Header />
      <Container>
        <div className="mt-4">{toRender}</div>
      </Container>
      <PatientDetailsModal show={show} onHide={handleClose} activePacient={activePacient} />
    </div>
  );
};

export default PatientsList;
