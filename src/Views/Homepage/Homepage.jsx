import React from "react";
import "./Homepage.scss";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EhealthImg from "../../Assets/Images/undraw_medicine.png";

const Homepage = () => {
  return (
    <div className="homepage d-flex justify-content-center align-items-center">
      <Container className="d-flex flex-column align-items-center homepage-container">
        <h3 className="fw-bold text-center">Homework E-health</h3>
        <ul>
          <li>ID</li>
          <li>Prenume</li>
          <li>Nume</li>
          <li>Buton de detalii</li>
          <li>Popup detalii pacient</li>
        </ul>
        <img src={EhealthImg} alt="ehealth" className="ehealth-img" />
        <Link to="/patients-list">
          <Button className="btn btn-primary" variant="success" size="md">
            Spre Tema
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Homepage;
