import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import{Link} from "react-router-dom"


const Sidebar= () => {
  return (
    <div className='sidebar'>
        <div className="top">
          <Link to= "/" style={{textDecoration:"none"}}>
          <span className="logo"> lamadmin</span>
          </Link>
          </div>
          <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
           </li>
           <p className="title">LIST</p>
           <Link to= "/users" style={{textDecoration:"none"}}>
            <li>
              <Person2OutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
            </Link>
            <Link to= "/products" style={{textDecoration:"none"}}>
            <li>
              <Inventory2TwoToneIcon className="icon"/>
              <span>Products</span>
            </li>
           </Link>
            
            <li>
              <FilterFramesIcon className="icon"/>
              <span>Orders</span>
            </li>
          
        
            <li>
              <DeliveryDiningIcon className="icon"/>
              <span>Delivery</span>
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
          
            <li>
              <LogoutIcon className="icon"/>
              <span>Logout</span>
            </li>
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