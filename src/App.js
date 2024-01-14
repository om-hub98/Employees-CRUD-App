import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login/Login';
import EmployeeManagement from "./components/Dashboard/Add";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<EmployeeManagement />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App