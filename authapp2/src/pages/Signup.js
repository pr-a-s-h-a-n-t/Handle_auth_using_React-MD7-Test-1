import React,{ useState, useEffect } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";


function Signup({setUserDetails, userDetails, setSubmit, submit , setSuccess , success}) {
	 const[error, setError] = useState(false);

	 const path = useNavigate()
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true)

		 
		const { fullName, email, password, confirmPassword } = userDetails
 

		if(fullName.length >= 2 &&
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") !== 0 &&
			email.length - email.lastIndexOf(".") >= 3 &&
			password.length >= 8 && 
			password.match(/[0-9]/i) && 
			password.match(/[^A-Za-z0-9-'']/i) && 
			password.charAt(0) !== '@' &&
			confirmPassword === password

			
			
			
			){
				setError(false);
				setSuccess(true);
				 
				window.localStorage.setItem("fullNameKey", fullName);
				window.localStorage.setItem("emailKey", email);
				window.localStorage.setItem("passwordKey", password);
				 
 
				setUserDetails('');
				setTimeout(() => {
					path("/profile");
				}, 3000);

		}
		else {
			alert("Plz Provide Input 😵")
			setError(true)
			path("/")

		}
					 

	};

	useEffect(() => {
		if (window.localStorage.getItem("localfullName"  )   ) {
		  setTimeout(() => {
			path("/profile");
		  }, 200);
		}
	  }, []);
	
	  console.log(success)
 
  return (
    <>

	    
		<div className="form-wrapper">
		<div className='signup-txt'>Signup</div>
  
		<form   id='signup-form'>
		  <div className='form-group'>
  
			<input 
			onChange={(e) =>
			  setUserDetails({
				...userDetails,
				fullName: e.target.value,
			  }) }
			placeholder="Full Name" 
			value={ userDetails.fullName } 
			type="text" />
			<input 
  
			onChange={(e) =>
			  setUserDetails({
				...userDetails,
				email: e.target.value,
			  }) } 
			placeholder="Email"
			 value={  userDetails.email } 
			 type="text" />
  
  
  
  
			<input 
  
			onChange={(e) =>
			  setUserDetails({
				...userDetails,
				password: e.target.value,
			  }) }
			placeholder="Password" 
			value={userDetails.password} 
			type="text" />
  
  
  
  
			<input 
  
			onChange={(e) =>
			  setUserDetails({
				...userDetails,
				confirmPassword: e.target.value,
			  }) }
			placeholder="Confirm Password" 
			value={userDetails.confirmPassword}
			type="text" />
			
			
			{
		   
		  error === true && submit === true  
		   ?
		   <div id='error'>Error: All the fields are mandatory</div>
			   
			   : ""}
			   {
  
				   
  					error === false && submit === true && success === true
				  ?
				  <div className="success">Successfully Signed Up!</div>
			   : ""
			   }
		   
		  </div>
		  
  
			  <div>
  
				  <button id='signup-btn' 
				  onClick={ handleSubmit}>signup</button>
			  </div>
		</form>
	  </div>

	 
     




    </>
  )
}

export default Signup