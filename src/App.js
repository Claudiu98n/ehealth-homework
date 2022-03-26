import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Views/Homepage/Homepage";
import PatientsList from "./Views/PatientsList/PatientsList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/patients-list" element={<PatientsList />} />
    </Routes>
  );
};

export default App;
