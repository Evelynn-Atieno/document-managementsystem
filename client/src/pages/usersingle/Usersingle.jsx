import "./usersingle.scss"
import Usersider from "../../components/usersidebar/Usersider";
import Navbar from "../../components/navbar/Navbar";
import Document from "../../pages/list/Document"

const Usersingle = () => {
  return (
   
        <div className="single">
          < Usersider/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left">
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                  <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
                   alt="" 
                  className="itemImage"
                   />
                   <div className="details">
                    <h1 className="itemTitle">John Doe</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">johndoe@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">+1 2323 12 12</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">Northwest, Washington, DC, 20036.</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">USA</span>
                    </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h1 className="title">Last accessed files</h1>
              <Document/>
            </div>
            
          </div>
    
        </div>
      );
}

export default Usersingle