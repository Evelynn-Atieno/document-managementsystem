import Sidebar from"../../components/sidebar/Sidebar";
import Navbar from"../../components/navbar/Navbar";
import Widget from"../../components/widget/Widget";
import Featured from"../../components/featured/Featured";
import Chart from"../../components/chart/Chart";
import Table from"../../components/table/Table";
import { useEffect } from "react";
import "./home.scss";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate()

  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get("http://localhost:8081/Home")
    .then(res =>{
      if(res.data.Status==="Success") {

      }else{
        navigate("/login")
      }
    })

  }, [])
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="documents"/>
          <Widget type="files"/>
          <Widget type="groups"/>

        </div>
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 months (documents added)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">latest accessed documents</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home