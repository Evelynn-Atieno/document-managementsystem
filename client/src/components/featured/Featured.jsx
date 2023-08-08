import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total files</h1>
        <MoreVertIcon fontSize="small"/>
      </div>

      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">total accessed files today</p>
        <p className="amount">500</p>
       
      </div>
    </div>
  )
}

export default Featured
