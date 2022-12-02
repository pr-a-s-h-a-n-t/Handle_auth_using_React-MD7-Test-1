import React,{ useEffect } from 'react'
 import './Profile.css'
 import { useNavigate } from "react-router-dom";


 function Profile({setSuccess, success} ) {

    const path = useNavigate();

  let localfullName = window.localStorage.getItem("fullNameKey");
  let localemail = window.localStorage.getItem("emailKey");
  let localpassword = window.localStorage.getItem("passwordKey");
   

  useEffect(() => {
    if (!localpassword ) {
         
         
      setTimeout(() => {
        path("/");
      }, 200);
    }
   
  }, []);

 


  return (
    <div className="profile">
        <ul>
            <li>Profile
                 
            </li>
            <li> Full Name:  {localfullName }
                 
            </li>
            <li>Email: {localemail}
                 
            </li>
            <li>Password: {localpassword}
                 
            </li>

            <button id='profile-btn'
            onClick={ () => {
                localStorage.clear();
                
                setSuccess(false);
                path("/");
            }}
            
            
            >Logout</button>
        </ul>

        <div>
        </div>
          
     </div>
  )
}

export default Profile