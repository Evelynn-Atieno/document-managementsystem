import express from "express"
import mysql from "mysql"
import cors from "cors"
import cookieParser from "cookie-parser"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import multer from "multer"
import path from "path"


const app = express();
app.use(cors(
    {
    origin: ["http://localhost:3000"],
    methods:["POST","GET","PUT"],
    credentials: true
    }
));
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"document mnagement"
})

const storage =multer.diskStorage({
    destination:(req, file, cb)=> {
        cb(null,"public/images")
    },

    filename:(req, file, cb) =>{
        cb(null,file.fieldname +"_"+ Date.now()+path.extname(file.originalname));
    }
})

const upload= multer({
    storage: storage
})


con.connect(function(err){
    if(err){
        console.log("Error in Connection");
    }else{
        console.log("connected")
    }
    
})

const  verifyUser=(req , res, next)=>{
    const token =req.cookies.token;
    if(!token){
        return res.json({Error:"You are not Authenticated"});
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err) return res.json({Error: "Token wrong"});
             next();
        })
    }

}

app.get('/Home',verifyUser,( req,res)=>{
  return res.json({Status: "Success"})
} )


app.post('/', (req , res)=>{
    const sql ="SELECT * FROM users Where email=? AND password= ?";
    con.query(sql,[req.body.email, req.body.password],(err,result) =>{
        if (err)return res.json({Status: "Error", Error: "Error in runnning query"});
        if(result.length > 0) {
            const id=result[0].id
            const token=jwt.sign({id}, "jwt-secret-key",{expiresIn: "1d"});
            res.cookie('token',token);
            return res.json({Status: "Success"})
        }else{
            return res.json({Status:"Error",Error: "Wrong Email or Password"})
        }
    })

    


})


app.post('/employeelogin', (req , res)=>{
    const sql ="SELECT * FROM employee Where email=? AND password= ?";
    con.query(sql,[req.body.email, req.body.password],(err,result) =>{
        if (err)return res.json({Status: "Error", Error: "Error in runnning query"});
        if(result.length > 0) {
            const id=result[0].id
            const token=jwt.sign({id}, "jwt-secret-key",{expiresIn: "1d"});
            res.cookie('token',token);
            return res.json({Status: "Success"})
        }else{
            return res.json({Status:"Error",Error: "Wrong Email or Password"})
        }
    })

    


})







app.get('/logout', (req,res) => {
    res.clearCookie('token');
    return res.json({Status:"Success"})
        
})



app.post('/create',upload.single("image"), (req, res)=>{
    

    const sql ="INSERT INTO employee (image,username,group,email,phone,password,address) VALUES(?)";
    bcryptjs.hash(req.body.password.toString(),10,(err,hash)=>{
        if(err)return res.json({Error:"Error in hashing pasword"});
        const values = [

            req.file.filename,
            req.body.username,
            req.body.group,
            req.body.email,
            req.body.phone,
            hash,
            req.body.address
            
        ]
        con.query(sql,[values],(err, result)=>{
            if(err) return res.json({Error:"inside signup query"});
            return res.json({Status:"Success"})
        })
    })
})

app.listen(8081 , ()=>{
    console.log("Running");
})
