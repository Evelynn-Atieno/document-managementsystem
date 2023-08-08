import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
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
      case"documents":
      data={
        title:"DOCUMENTS",
        isMoney:false,
        link:"view all documents",
        icon: <ArticleOutlinedIcon className="icon"
        style={{color:"green",
        backgroundColor: "rgba(0, 128, 0, 0.137)",
      }}/>,
        
          
      };
      break;case"files":
      data={
        title:"FILES",
        isMoney:false,
        link:"view all files",
        icon: <InsertDriveFileOutlinedIcon className="icon"
        style={{color:"yellow",
        backgroundColor: "rgba(255, 255, 0, 0.089)",
      }}/>,
      
          
      };
      break;case"groups":
      data={
        title:"GROUPS",
        isMoney:false,
        link:"view all groups",
        icon: <Groups2OutlinedIcon className="icon"
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
        
          {data.icon}
      </div>
           
    </div>
  )
}

export default Widget