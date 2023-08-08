
import "./userdashboard.scss";
import Usersider from"../../components/usersidebar/Usersider";
import Navbar from "../../components/navbar/Navbar";
import Userwidget from "../../components/userWidget/Userwidget";
import UserFeatured from "../../components/userfeatured/UserFeatured";
import UserChart from "../../components/userchart/UserChart";
import Documenttable from "../../components/documenttable/Documenttable";

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
        <div className="Usercharts">
          <UserFeatured/>
          <UserChart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Pending Documents</div>
          <Documenttable/>
        </div>
      </div>

    </div>
  );
};

export default Userdashboard;
