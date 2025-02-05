import { NavLink } from "react-router";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Logout from "../../assets/Logout.svg";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="container flex items-center justify-between py-6">
        <div>
          <NavLink to={"/"}>
            {" "}
            <img src={Logo} alt="" />{" "}
          </NavLink>
        </div>
        <div>
          <ul className="flex items-center gap-12">
            <NavLink to={"/"}>
              <li className="text-base font-normal leading-5 text-left text-[#3D3D3D] hover:font-bold relative px-6 hover:underline-offset-4 transition-all duration-200">
                Home
              </li>
            </NavLink>
            <NavLink to={"/shop"}>
              <li className="text-base font-normal leading-5 text-left text-[#3D3D3D] hover:font-bold relative px-6 hover:underline-offset-4 transition-all duration-200">
                Shop
              </li>
            </NavLink>
            <NavLink to={"/plant-care"}>
              <li className="text-base font-normal leading-5 text-left text-[#3D3D3D] hover:font-bold relative px-6 hover:underline-offset-4 transition-all duration-200">
                Plant Care
              </li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li className="text-base font-normal leading-5 text-left text-[#3D3D3D] hover:font-bold relative px-6 hover:underline-offset-4 transition-all duration-200">
                Blogs
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-9">
          <img className="cursor-pointer" src={Search} alt="" />
          <img className="cursor-pointer" src={Cart} alt="" />
          <div>
            <button className="bg-[#46A358]  cursor-pointer  w-[100px] h-9 py-2 rounded-md flex items-center gap-2 text-base font-normal leading-5 text-left text-[#FFFFFF] px-4">
              <img src={Logout} alt="" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
