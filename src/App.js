// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import UserNameInput from "./components/userNameInput";
import { UserNameProvider } from "./context/userNameContext";

function App() {
  return (
    <UserNameProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<UserNameInput />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </Router>
    </UserNameProvider>
  );
}

export default App;
