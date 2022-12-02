import { Outlet, Link } from "react-router-dom";
import './Navigation.css'

const Navigation = (  ) => {
  
   
  return (
    <>
      <nav>
      <header>
      <Link 
      style={{textDecoration: 'none',color: 'inherit'}} to="/">Header </Link>
            
      </header>
        <ul>
          <li>
            <Link 
            
            style={{textDecoration: 'none', color: 'inherit'}}
            to="/">Signup</Link>
          </li>
          <li>
            <Link 
           
            style={{textDecoration: 'none', color: 'inherit'}}
             
            to="/profile"
            >Profile</Link>
          </li>
           
           
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

 export default Navigation;