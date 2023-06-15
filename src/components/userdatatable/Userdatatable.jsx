import "./userDatatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import{usercolumns,userrows} from "../../userdatatablesource"
import {Link} from "react-router-dom";

const Userdatatable = () => {
   
  return (
    <div className="datatable">
       <div className="datatableTitle">
        Add New Document
        <Link to= "/documents/usernew" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userrows}
        columns={usercolumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
        </div>
        
       
  )
}

export default Userdatatable