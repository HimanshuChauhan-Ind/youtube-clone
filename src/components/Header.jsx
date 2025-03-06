import { SEARCH_LOGO, USER_LOGO } from "../assets/constants";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="grid grid-cols-12 p-2">
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="flex col-span-9 h-10 ">
        <input
          type="text"
          placeholder="Search"
          className=" border border-gray-300 p-2 rounded-l-full w-[80%] "
        />
        <button className="h-10  bg-gray-300 px-3 rounded-r-full">
          <img className="h-5" src={SEARCH_LOGO} />
        </button>
      </div>
      <div className="col-span-1 h-10">
        <img
          className="h-10 float-right pr-2 "
          src={USER_LOGO}
          alt="user_logo"
        ></img>
      </div>
    </div>
  );
};

export default Header;
