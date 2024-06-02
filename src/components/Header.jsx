import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../authSlice";

function Header() {
    const isLoggedIn = useSelector((store)=>store.authReducer.isLoggedIn)
    const dispatch=useDispatch()
  return (
    <nav className="bg-dark text-white d-flex p-2 justify-content-between">
        <h3>Mybooks</h3>
      <button className="btn btn-secondary" onClick={()=>dispatch(logInOut())}>{!isLoggedIn?"login":"log out"}</button>
    </nav>
  );
}

export default Header;
