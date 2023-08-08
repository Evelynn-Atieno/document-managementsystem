import "./usersidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import{Link} from "react-router-dom"

const Usersider = () => {
  return (
    
         <div className='sidebar'>
        <div className="top">
         
          <span className="logo">USER</span>
         
          </div>
          <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to= "/userdashboard" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
           </li>
           </Link>
           <p className="title">LIST</p>
           <Link to= "/documents" style={{textDecoration:"none"}}>
            <li>
              < ArticleOutlinedIcon className="icon"/>
              <span>Documents</span>
            </li>
            </Link>
            
            <li>
              < LocalActivityOutlinedIcon className="icon"/>
              <span>Activity</span>
            </li>
          
            
            <li>
              <ArchiveOutlinedIcon className="icon"/>
              <span>Archive</span>
            </li>

          
            <li>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </li>
          
            <Link to= "/" style={{textDecoration:"none"}}>
          
            <li>
              <LogoutIcon className="icon"/>
              <span>Logout</span>
            </li>
            </Link>
          </ul>
          </div>
        
    </div>
    
  )
}

export default Usersider