import { NavLink } from "react-router-dom";
import { menuList } from "../constants/index";
const Navbar = () => {
  return (
    <div className="w-full h-20 z-[999] bg-background">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-6 lg:px-0">
          {/* logo */}
          <div>
            <h3>
              En<span>liven</span>
            </h3>
          </div>

          {/* menuList */}

          <div className="hidden lg:flex items-center gap-10">
            {menuList.map((list, index) => (
              <ul
                key={index}
                className="text-lg hover:text-primary duration-150 cursor-pointer">
                <li>{list.label}</li>
              </ul>
            ))}
          </div>

          {/* login / signup button */}
          <NavLink to="/signup">
            <button className="p-3 rounded-tr-xl rounded-bl-xl bg-primary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary duration-150">
              Login / Signup
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
