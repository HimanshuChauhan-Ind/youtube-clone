import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appstore from "./assets/Store/appstore";
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
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
