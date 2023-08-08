
import './login.scss'
import React, {useState} from "react"
import axios from "axios"
import{useNavigate} from 'react-router-dom'

import{Link} from "react-router-dom"

const Login = () => {

  const [values, setValues] = useState({
    email:'',
    password:'',
  })
  
  const navigate = useNavigate()
  const [error, setError]= useState('')
  
 const handleSubmit =(event) =>{
  event.preventDefault();
  axios.post('http://localhost:8081/', values)
  .then(res => {
    if(res.data.Status ==='Success'){
     navigate('/home');
    }else{
     setError(res.data.Error);
    }
  })

  .catch(err =>console.log(err));
 }

  
  return (
    <div className="login-form-container">
     
      <h1>DOCUMENT MANAGEMENT SYSTEM</h1>
      <div className='text-danger'>
        {error && error}
      </div>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input type="text" id="email" 
          onChange={e => setValues({...values, email: e.target.value})}
          
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"
            onChange={e => setValues({...values, password: e.target.value})}
          />
        </div>

       
        
         <div className='options'>
          
       
           <button type ="submit">Login</button>
       
      </div>

  
    
      </form>
    </div>
  );
};

export default Login;
