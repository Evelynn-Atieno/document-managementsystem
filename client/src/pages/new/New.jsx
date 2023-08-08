import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";
import axios from "axios";

const New = () => {
  
  const [data, setData] = useState({
    image:"",
    username:"",
    group:"",
    email:"",
    phone:"",
    password:"",
    address:"",
   
  
  })
  const handleSubmit =(event)=>{
    event.preventDefault();
    const formdata = new FormData ();
    formdata.append("file", data.image);
    formdata.append("username", data.username);
    formdata.append("group", data.group);
    formdata.append("email", data.email);
    formdata.append("phone", data.phone);
    formdata.append("password", data.password);
    formdata.append("address", data.address);
    

    axios.post('http://localhost:8081/create', formdata)

    .then(res=>console.log(res))
    .catch(err=> console.log(err));
  }
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
         <div className="top">
          <h1>Add New User</h1>
         </div>
         <div className="bottom">
          
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
              <label htmlFor="image">
    Image: <DriveFolderUploadOutlinedIcon className="icon" />
  </label>
  <input type="file" id="image"onChange={e => setData({ ...data, image: e.target.files[0] })} style={{ display: "none" }}
  />
              </div>

              <div className="formInput">
                <label>Username </label>
                < input type ="text" id="username" placeholder="john_doe" autoComplete="off"l
                onChange={e => setData({...data, username: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>Group </label>
                < input type ="text" id="group" placeholder="IT Department"  autoComplete="off"
                onChange={e => setData({...data, group: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>Email </label>
                < input type ="email"id="email" placeholder="johndoe"  autoComplete="off"
                onChange={e => setData({...data, email: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>Phone </label>
                < input type ="text"id="phone" placeholder="+1 234 567 89"  autoComplete="off"
                onChange={e => setData({...data, phone: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>Password </label>
                < input type ="password"id="password" autoComplete="off"
                onChange={e => setData({...data, password: e.target.value})} />
              </div>
              <div className="formInput">
                <label>Address </label>
                < input type ="text" id="address" placeholder="Elton st 216 New york"  autoComplete="off"
                onChange={e => setData({...data, address: e.target.value})}/>
              </div>
              
              <button type="submit">Send</button>
            </form>
          </div>
         </div>
      </div>
    </div>
  )
}

export default New