// import ReactDOM from "react-dom/client";
import './App.css';
import {   Routes, Route } from "react-router-dom";
import{  useState,  
	// useEffect
 } from 'react';

 import Navigation from "./pages/Navigation"
 
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
function App() {
  const [submit, setSubmit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [userDetails, setUserDetails] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
		 
	})

   
 
  
	 
  return (
     <>
	<Navigation/>
      <Routes>
         
          <Route index element={<Signup 
            setUserDetails={ setUserDetails }
            userDetails={ userDetails }
            setSubmit={setSubmit}
            submit={submit}
            setSuccess={setSuccess}
            success={success}
           />} />
          <Route path="/profile" element={<Profile
          setSuccess={setSuccess}
          success={success}
          />} />
           
           
         
      </Routes>
     </>
     
  );
}

export default App;
