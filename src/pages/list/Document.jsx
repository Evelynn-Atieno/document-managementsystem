import "./document.scss"
import Usersider from "../../components/usersidebar/Usersider"
import Navbar from "../../components/navbar/Navbar"
import Userdatatable from "../../components/userdatatable/Userdatatable"
const Document = () => {
  return (
    <div className="list">
      <Usersider/>
      <div className="listContainer">
        <Navbar/>
        <Userdatatable/>
      </div>
    </div>
  )
}

export default Document