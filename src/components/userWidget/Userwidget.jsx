import "./userWidget.scss"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
const Userwidget = ({type}) => {
    let data;

    //temporary
   
    

   switch(type){
    case"department":
      data={
        title:"DEPARTMENT",
        isMoney:false,
        link:"Information Tech",
        icon: <Person2OutlinedIcon className="icon"
         style={{color:"crimson",
        backgroundColor: "rgba(255,0,0,0.2)",
      }}/>,
          
      };
      break;
      case"members":
      data={
        title:"MEMBERS",
        isMoney:false,
        link:"30 members",
        icon: <Groups2OutlinedIcon className="icon"
        style={{color:"green",
        backgroundColor: "rgba(0, 128, 0, 0.137)",
      }}/>,
        
          
      };
      break;case"units":
      data={
        title:"UNITS",
        isMoney:false,
        link:"2 units",
        icon: <Groups2OutlinedIcon className="icon"
        style={{color:"yellow",
        backgroundColor: "rgba(255, 255, 0, 0.089)",
      }}/>,
      
          
      };
      break;case"documents":
      data={
        title:"DOCUMENTS",
        isMoney:false,
        link:"16,789 files",
        icon: <ArticleOutlinedIcon  className="icon"
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
          
          <span className="link">{data.link}</span>
          </div>
      <div className="right"> 
        
          {data.icon}
      </div>
           
    </div>
  )
}

export default Userwidget