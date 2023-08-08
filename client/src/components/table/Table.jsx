import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
const rows=[
    {
        id: 77890,
        document:"smart farming report",
       foldername: "reports",
        group: "Finance",
        username: "John Smith",
        date: "1 March 2023",
        status: "closed",
    },
    {
        id: 76898,
        document:"software orders",
        foldername: "tech orders",
        group: "IT",
        username:"Michael Doe" ,
        date: "1 March 2023",
        status: "open",
    },
    {
        id:49029,
        document:"smart farming report",
        foldername: "reports",
        group: "Finance",
        username: "John Smith",
        date: "1 March 2023",
        status: "closed",
    },

];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">TrackingId</TableCell>
          <TableCell className="tableCell">Document</TableCell>
          <TableCell className="tableCell">FolderName</TableCell>
          <TableCell className="tableCell">Group</TableCell>
          <TableCell className="tableCell">UserName</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id} >
            <TableCell className="table">{row.id}</TableCell>
            <TableCell className="table">
                <div className="cellWrapper">
                    {row.document}
                </div>
            </TableCell>
            <TableCell className="table" >{row.foldername}</TableCell>
            <TableCell className="table">{row.group}</TableCell>
            <TableCell className="table">{row.username}</TableCell>
            <TableCell className="table">{row.date}</TableCell>
            <TableCell className="table">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List