import Header from "./Header";
import Mainbody from "./Mainbody";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <Sidebar />
        <Mainbody />
      </div>
    </>
  );
};

export default Body;
