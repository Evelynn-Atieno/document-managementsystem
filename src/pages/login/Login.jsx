
import './login.scss';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Login = () => {
  

  
  return (
    <div className="login-form-container">
      <Person2OutlinedIcon className='icon'/>
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="user-type">Login as:</label>
          <select id="user-type">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
