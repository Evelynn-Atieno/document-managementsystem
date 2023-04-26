import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget = ({type}) => {
  
    let data;

    //temporary
    const amount=100;
    const diff=20;

   switch(type){
    case"user":
      data={
        title:"USERS",
        isMoney:false,
        link:"see all users",
        icon: <Person2OutlinedIcon className="icon"
         style={{color:"crimson",
        backgroundColor: "rgba(255,0,0,0.2)",
      }}/>,
          
      };
      break;
      case"files":
      data={
        title:"FILES",
        isMoney:false,
        link:"view all files",
        icon: <FilterFramesOutlinedIcon className="icon"
        style={{color:"green",
        backgroundColor: "rgba(0, 128, 0, 0.137)",
      }}/>,
        
          
      };
      break;case"earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"view net earnings",
        icon: <LocalAtmOutlinedIcon className="icon"
        style={{color:"yellow",
        backgroundColor: "rgba(255, 255, 0, 0.089)",
      }}/>,
      
          
      };
      break;case"balance":
      data={
        title:"BALANCE",
        isMoney:true,
        link:"see details",
        icon: <AccountBalanceOutlinedIcon className="icon"
        style={{color:"blue",
        backgroundColor: "rgba(0, 0, 255, 0.089)",
      }}
      />,
        
          
      };
      break;
    default:
      break;
   }


   return (
    <div className="widget">
      <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney&& "$"}{amount}</span>
          <span className="link">{data.link}</span>
          </div>
      <div className="right"> 
         <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon/>
          {diff}%
          </div>
          {data.icon}
      </div>
           
    </div>
  )
}

export default Widget