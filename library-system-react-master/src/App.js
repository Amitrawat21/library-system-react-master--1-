import StudentLogin from "./components/StudentLogin.js";
import {BrowserRouter , Route , Routes} from "react-router-dom"
import TeacherLogin from "./components/TeacherLogin.js";
import Dashboard from "./components/Dashboard.js";
import TeacherDash from "./components/TeacherDash.js";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLogin />}/>

        <Route path="/teacher" element={<TeacherLogin />}/>

        <Route path="/dashboard" element={<Dashboard />}/>

        <Route path="/teacherdash/:id" element={<TeacherDash />}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;