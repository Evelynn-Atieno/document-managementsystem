
export const userColumns=[
   { field: 'id', headerName: 'ID', width: 70 },
   { field:"user", headerName:"User",width: 230, renderCell:(params)=>  {
    return(
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt= "avatar" />
        { params.row.username}
      
      </div>
    );
   } ,
  },
  {
    field: "email", headerName:"Email", width:230 ,
  },

  {
    field: "age", headerName:"Age", width:100,
  },
  {
    field: "status", headerName:"Status", width:160 ,
    renderCell:(params)=>{
      return(
        <div className= {` cellWithStatus ${params.row.status}`}> {params.row.status}</div>
      )
    }
  },

 ];
 
 export const userRows = [
    { 
        id: 1,
        username:"snow",
        img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
        email:"snow@gmail.com",
        status:"active",
        age: 35 },
    { 
        id: 2,
        username:"Cersei",
        img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
        email:"carsei@gmail.com",
        status:"passive",
        age: 42 },
    { 
      id: 3, 
      username:"Jaime",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
      email:"jaine@gmail.com",
      status:"pending",
       age: 45 },
    { 
      id: 4, 
      username:"Arya",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
      email:"arya@gmail.com",
      status:"active",
      age: 16 },
    { 
      id: 5, 
      username:"Daenerys",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
      email:"Daenerys@gmail.com",
      status:"pending",
      age: null },
    { 
      id: 6,
      username:"meli",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
      email:"meli@gmail.com",
      status:"passive",
       age: 150 },
    {
      id: 7, 
      username:"clifford",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
      email:"ferrara@gmail.com",
      status:"active",
      age: 44 },
    { 
      id: 8, 
      username:"Frances",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
      email:"rossinio@gmail.com",
      status:"passive",
      age: 36 },
    { 
      id: 9, 
      username:"harvey",
      img:"https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg", 
      email:"harvey@gmail.com",
      status:"pending",
      age: 65 },
  ];