import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";

const Navbar = ({ visible }: { visible: boolean }) => {
  let view = true;
  const location = useLocation();
  if (location.pathname.startsWith("/userpage")) {
    view = false;
  }
  return (
    <nav className="flex flex-row justify-between h-[7%] py-3 px-4">
      <Link to="/home">
        <div className="h-10 mr-2 my-auto cursor-pointer">
          <img src={logo} alt="app-logo" className="h-8" />
        </div>
      </Link>

      <div className="hidden lg:nav-menu my-auto">
        <div className=" w-auto h-10">
          <ul className="flex flex-row justify-evenly" id="nav-links">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <li>Add Note</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {view && 
          <div className="w-auto h-10 flex flex-row">
            {visible?<Link to={"/signup"}>
              <button className="mx-2 h-full w-20 text-xl p-1 font-signika bg-orange-600 rounded hover:signup-button-hover">
                Sign Up
              </button>
            </Link>:<Link to="/login">
              <button className="mx-2 h-full w-20 text-xl p-1 text-gray-600 font-signika border-orange-600 border-[1px] rounded hover:sign-in-hover">
                Sign In
              </button>
            </Link> }
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;



