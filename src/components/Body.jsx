import { useSelector } from "react-redux";
import Mainbody from "./Mainbody";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const showSidebar = useSelector((state) => state.appconfig.showSidebar);

  return (
    <div className="flex ">
      {showSidebar && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
