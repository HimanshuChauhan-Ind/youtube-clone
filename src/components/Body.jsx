import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const showSidebar = useSelector((state) => state.appconfig.showSidebar);

  return (
    <>
      <Header />
      <div className="flex ">
        {showSidebar && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default Body;
