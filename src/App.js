import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import File from "./pages/list/File";
import{ BrowserRouter,Routes,Route,}from "react-router-dom";
import { DocumentInputs } from "./formSource";
import { userInputs } from "./formSource";

function App(){
    return(
        <div ClassName="App">
            <BrowserRouter>
               <Routes>
                 <Route path="/" >
                    <Route index element={<Home/>} />
                    <Route path="login"element={<Login/>}/>
                    <Route path="users">
                      <Route index element={<List/>}/>
                      <Route path=":userId"element={<Single/>}/>
                      <Route path="new"element={<New inputs ={userInputs} title="Add New User"/>}/>
                      </Route>

                      <Route path="files">
                      <Route index element={<File/>}/>
                      <Route path=":fileId"element={<File/>}/>
                      <Route path="new"element={<New inputs={DocumentInputs} title="Add New Document"/>}/>
                      
                      </Route>

                    

                 </Route>
                

               </Routes>
            </BrowserRouter>
       
        </div>
    );
}
export default App;
    