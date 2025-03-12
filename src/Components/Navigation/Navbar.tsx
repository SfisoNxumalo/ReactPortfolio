import { Link, Outlet } from "react-router-dom";
import Login from "../DialogComponent/LoginDialog/Login";


export default function Navbar(){
    return (
        <>
        <div className="btn-logReg">
            <Login />
            <Link to="/">Home</Link>
            <button>Register</button>
            <Link to="/dashboard">Dasboard</Link>
            </div>
    
          <Outlet />
        </>
      ) 
}