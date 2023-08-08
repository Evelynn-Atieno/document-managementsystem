import "./userFeatured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const UserFeatured = () => {
  return (
    <div className="userfeatured">
        <div className="top">
            <h2 className="title">Recent Documents</h2>
           < MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredchart">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArticleOutlinedIcon style={{color:"blue",
        backgroundColor: "rgba(0, 0, 255, 0.089)",
      }}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="tecchnician requirements" secondary="12.20pm" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArticleOutlinedIcon style={{color:"red",
        backgroundColor: "rgba(0, 0, 255, 0.089)",
      }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Alice interview report" secondary="Today, 8.24am" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArticleOutlinedIcon style={{color:"yellow",
        backgroundColor: "rgba(0, 0, 255, 0.089)",
      }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="lab comp specifications" secondary="Yesterday, 4.07pm" />
      </ListItem>
    </List>
  

            </div>
        </div>
    </div>
  )
}

export default UserFeatured