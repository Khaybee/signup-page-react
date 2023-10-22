import React, { useState } from "react"
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";




function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  return (
    <div className="App"> 
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;