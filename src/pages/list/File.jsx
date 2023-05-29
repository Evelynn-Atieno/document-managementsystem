import "./file.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import FileDatatable from "../../components/filesDatable/FileDatatable"

const File = () => {
  return (
    <div className="file">
      <Sidebar/>
    
       <div className="fileContainer">
        <Navbar/>
        <FileDatatable/>
       </div>
    </div>
  )
}

export default File