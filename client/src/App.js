import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import File from "./pages/list/File";
import Userdashboard from "./pages/userdashboard/Userdashboard";
import{ BrowserRouter,Routes,Route,}from "react-router-dom";
import { DocumentInputs } from "./formSource";
import { userInputs } from "./formSource";
import Document from "./pages/list/Document";
import Usersingle from "./pages/usernew/Usernew";
import Usernew from "./pages/usernew/Usernew";
import General from "./pages/generaldashboard/General"
import Employeelogin from "./pages/employeelogin/Employeelogin";
  


function App(){
    return(


        <div ClassName="App">  
            <BrowserRouter>
               <Routes>
                 <Route path="/" >
                    <Route index element={<General/>} />
                    <Route path="home"element={<Home/>}/>
                    <Route path="login">
                    <Route index element ={<Login/>}/>
                 </Route>


                   <Route path="employeelogin">
                      <Route index element={<Employeelogin/>}/>
                    </Route>


                    <Route path="users">
                      <Route index element={<List/>}/>
                      <Route path=":userId"element={<Single/>}/>
                      <Route path="new">
                      <Route index element={<New />}/>
                      </Route>
                      </Route>

                      <Route path="files">
                      <Route index element={<File/>}/>
                      <Route path=":fileId"element={<File/>}/>
                      <Route path="new"element={<New inputs={DocumentInputs} title="Add New Document"/>}/>
                      
                      </Route>

                      <Route path="userdashboard" element={<Userdashboard/>}/>

                      <Route path="documents">
                        <Route index element={<Document/>}/>
                      <Route path ="usernew"element={<Usernew inputs={DocumentInputs}title="Add New Document" />}/>

                      </Route>
                      
                      
                    

                    

                 </Route>
                

               </Routes>
            </BrowserRouter>
       
        </div>
    );
}
export default App;
    