import { BURGER_MENU, YT_LOGO } from "../assets/constants";

const Logo = () => {
  return (
    <div className="flex">
      <img className="w-9 cursor-pointer " src={BURGER_MENU} alt="options" />
      <img className="w-20 h-auto ml-4" src={YT_LOGO} alt="youtube logo"></img>
    </div>
  );
};

export default Logo;
