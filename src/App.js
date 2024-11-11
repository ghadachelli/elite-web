import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./inscription/RegistrationForm";
import ConfirmationPage from "./inscription/ConfirmationPage";
import Homepage from "./home/HelloWorld";
import Login from "./login/Login";
import ResetPass from "./login/ResetPass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPass />} />
      </Routes>
    </Router>
  );
}

export default App;
