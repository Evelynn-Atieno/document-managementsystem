import "./usernew.scss"
import Usersider from "../../components/usersidebar/Usersider";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";
const Usernew = ({inputs, title}) => {

  
 const [data,setData]=useState("");


  return (
    <div className="new">
      <Usersider/>
      <div className="newContainer">
        <Navbar/>
         <div className="top">
          <h1>{title}</h1>
         </div>
         <div className="bottom">
          
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor="image">
    File: <DriveFolderUploadOutlinedIcon className="icon" />
  </label>
  <input type="file" id="file"onChange={e => setData({ ...data, file: e.target.files[0] })} style={{ display: "none" }}
  />
              </div>

              <div className="formInput">
                <label>Document Name </label>
                < input type ="text" id="documentname" placeholder="document name" autoComplete="off"
                onChange={e => setData({...data, username: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>Folder Name </label>
                < input type ="text" id="filename" placeholder="foldername"  autoComplete="off"
                onChange={e => setData({...data, group: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>owner </label>
                < input type ="email"id="email" placeholder="johndoe"  autoComplete="off"
                onChange={e => setData({...data, email: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>group</label>
                < input type ="text"id="groupname" placeholder="group name"  autoComplete="off"
                onChange={e => setData({...data, phone: e.target.value})}/>
              </div>
              <div className="formInput">
                <label>Type </label>
                < input type ="text"id="type"placeholder="type" autoComplete="off"
                onChange={e => setData({...data, password: e.target.value})} />
              </div>
             
              
              <button type="submit">Send</button>
              

             
             
            </form>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Usernew