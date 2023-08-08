import "./filedatatable.scss"
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fileName', headerName: 'File Name', width: 130 },
  { field: 'dateadded', headerName: 'Date Added', width: 130 },
  {
    field: 'permissions',
    headerName: 'Permissions',
    type: 'text',
    width: 130,
  },
  {
    field: 'group',
    headerName: 'Group',
    width: 130,
   renderCell:(params)=>{
    return(
        <>
        <span>{params.row.permissions}</span>
        
        </>
    )
   }
  },
];

const rows = [
  { id: 1, fileName: 'Snow', dateadded: '3rd March 23', permissions: 'IT ' },
  { id: 2, fileName: 'Lannister', dateadded: '6th June 23', permissions: 'HUMAN RESOURCE' },
  { id: 3, fileName: 'Lannister', dateadded: '1st January 23', permissions: 'HUMAN RESOURCE' },
  { id: 4, fileName: 'Stark',dateadded: '23rd february', permissions: 'FINANCE' },
  { id: 5, fileName: 'Targaryen', dateadded: '4th April', permissions: 'FINANCE' },
  { id: 6, fileName: 'Melisandre', dateadded: null, permissions: 'IT' },
  { id: 7, fileName: 'Clifford', dateadded: '6th May 23', permissions: 'IT' },
  { id: 8, fileName: 'Frances', dateadded: '8th May 23', permissions: 'FINANCE' },
  { id: 9, fileName: 'Roxie', dateadded: '24th Mat 23', permissions: 'HUMAN RESOURCE' },
];

const FileDatatable = () => {
  return (
    <div className="fileDatatable">
        <DataGrid
        rows={rows}
        columns={columns}
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

export default FileDatatable