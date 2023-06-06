
import "./userdashboard.scss";
import Usersider from"../../components/usersidebar/Usersider";
import Navbar from "../../components/navbar/Navbar";
import Userwidget from "../../components/userWidget/Userwidget";

const Userdashboard= () => {
  return (
    <div className='userdashboard'>
      <Usersider/>
      <div className="userdashboardContainer">
      <Navbar/>
      <div className="widgets">
          <Userwidget type="department"/>
          <Userwidget type="members"/>
          <Userwidget type="units"/>
          <Userwidget type="documents"/>

        </div>
      </div>

    </div>
  );
};

export default Userdashboard;
