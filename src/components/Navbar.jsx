import { Link } from "react-router-dom";
import { menuList } from "../constants/index";
const Navbar = () => {

  const user = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    window.location.reload();

  }

  return (
    <div className="w-full h-20 z-[999] bg-background sticky top-0">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-6 lg:px-0">
          {/* logo */}
          <div>
            <Link to="/">
              <h3>
                En<span>liven</span>
              </h3>
            </Link>
          </div>

          {/* menuList */}

          <div className="hidden lg:flex items-center gap-10">
            {menuList.map((list, index) => (
              <ul
                key={index}
                className="text-lg hover:text-primary duration-150 font-semibold cursor-pointer">
                <Link to={list.path}>
                  <li>{list.label}</li>
                </Link>
              </ul>
            ))}
          </div>

          {/* login / signup button */}
          {!user ? <Link to="/signup">
            <button className="p-3 rounded-tr-xl rounded-bl-xl bg-primary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary duration-150">
              Login / Signup
            </button>
          </Link> : 
          <button className="p-3 rounded-tr-xl rounded-bl-xl bg-primary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary duration-150" onClick={
            logout}>Logout</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
