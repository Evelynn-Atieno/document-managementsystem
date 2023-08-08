export const usercolumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field:"documentName", headerName:"Document",width: 230, renderCell:(params)=>  {
     return(
       <div className="cellWithImg">
         <img className="cellImg" src={params.row.img} alt= "avatar" />
         { params.row.documentName}
       
       </div>
     );
    } ,
   },
   {
     field: "folderName", headerName:"FolderName", width:230 ,
   },
 
   {
     field: "owner", headerName:"Owner", width:100,
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
export const userrows =[
    { 
        id: 1,
        documentName:"negotiations guidance",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
        folderName:"negotiations",
        owner:"james Charles",
        status:"closed"
        },
    { 
        id: 2,
        documentName:"IT department roles",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
        folderName:"organisation structure",
        owner:"Stacy Anne",
        status:"closed",
        },
    { 
      id: 3, 
      documentName:"approved list of presentations",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:"presentations",
      owner:" Nick Douglas",
      status:"pending",
        },
    { 
      id: 4, 
      documentName:"introduction to Aqua project",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:" Aqua Project documentation",
      owner:"Stacy Jacobs",
      status:"open",
       },
    { 
      id: 5, 
      documentName:"tech support requirements",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:"requirements",
      owner:"Johnson Mark",
      status:"pending",
      },
    { 
      id: 6,
      documentName:"getting started with blockchain",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:"blockchain",
      owner:" Bill Austin",
      status:"open",
       },
    {
      id: 7, 
      documentName:"tech lab reports",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:"lab reports",
      owner:"Hassan Ali",
      status:"closed",
     },
    { 
      id: 8, 
      documentName:"quotations for the supply of monitors",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:"quotations",
      owner:"Ashley James",
      status:"open",
     },
    { 
      id: 9, 
      documentName:"monthly contributions",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYIeGLO_lqhrBrq5ID_JaZFAP4_IhRNsuLQ&usqp=CAU",
      folderName:"contributions",
      owner:"John smith",
      status:"pending",
      },

    
];