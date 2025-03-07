import { useDispatch } from "react-redux";
import { BURGER_MENU, YT_LOGO } from "../assets/constants";
import { toggleSidebar } from "../assets/Store/appconfig";
import { Link } from "react-router-dom";

const Logo = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex">
      <img
        onClick={handleClick}
        className="w-9 cursor-pointer "
        src={BURGER_MENU}
        alt="options"
      />
      <Link to={"/"}>
        <img
          className="w-20 h-auto ml-4 cursor-pointer"
          src={YT_LOGO}
          alt="youtube logo"
        ></img>
      </Link>
    </div>
  );
};

export default Logo;
