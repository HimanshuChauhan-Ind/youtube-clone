import { useSelector } from "react-redux";
import Header from "./Header";
import Mainbody from "./Mainbody";
import Sidebar from "./Sidebar";

const Body = () => {
  const showSidebar = useSelector((state) => state.appconfig.showSidebar);

  return (
    <>
      <Header />
      <div className="flex ">
        {showSidebar && <Sidebar />}
        <Mainbody />
      </div>
    </>
  );
};

export default Body;
