import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import{Link} from "react-router-dom"
import axios from "axios";
import{useNavigate} from 'react-router-dom'


const Sidebar= () => {
  const navigate = useNavigate()

  const handleLogout =()=>{
    axios.get ('http://localhost:8081/logout')
    .then(res => {
      navigate ('/login')
    }).catch(err => console.log(err));
  }
  return (
    <div className='sidebar'>
        <div className="top">
          
          <span className="logo">ADMIN</span>
         
          </div>
          <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to= "/" style={{textDecoration:"none"}}>
    
       
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
           </li>
           </Link>
           <p className="title">LIST</p>
           <Link to= "/users" style={{textDecoration:"none"}}>
            <li>
              <Person2OutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
            </Link>
            <Link to= "/files" style={{textDecoration:"none"}}>
            <li>
              <InsertDriveFileOutlinedIcon className="icon"/>
              <span>Files</span>
            </li>
           </Link>
            
            <li>
              <GroupsOutlinedIcon className="icon"/>
              <span>Groups</span>
            </li>
          
      
            <p className="title">USEFUL</p>
            <li>
              <QueryStatsIcon className="icon"/>
              <span>Stats</span>
            </li>
      
          
            <li>
              <NotificationAddIcon className="icon"/>
              <span>Notifications</span>
            </li>
      
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamIcon className="icon"/>
              <span>System Health</span>
             </li>
          
            <li>
                <BackupTableIcon className="icon"/>
              <span>Logs</span>
            </li>
          
            <li>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleIcon className="icon"/>
              <span>Profile</span>
            </li>
            <Link to= "/" style={{textDecoration:"none"}}>
            <li onClick={handleLogout} >
              <LogoutIcon className="icon"/>
              <span>Logout</span>
            </li>
            </Link>
          </ul>
          </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar