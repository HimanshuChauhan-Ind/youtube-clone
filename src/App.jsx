import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appstore from "./assets/Store/appstore";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainbody from "./components/Mainbody";
import WatchVideo from "./components/WatchVideo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Mainbody />,
        },
        {
          path: "watch",
          element: <WatchVideo />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appstore}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
