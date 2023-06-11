import "./document.scss"
import Usersider from "../../components/usersidebar/Usersider"
import Navbar from "../../components/navbar/Navbar"
const Document = () => {
  return (
    <div className="list">
      <Usersider/>
      <div className="listContainer">
        <Navbar/>
      </div>
    </div>
  )
}

export default Document