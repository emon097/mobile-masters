import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddNewService from "./component/AddNewService/AddNewService";
import Home from "./component/Home";
import Homes from "./component/Homes/Homes";
import LogIn from "./component/LogIn/LogIn";
import SignUp from "./component/SignUp/SignUp";
import Main from "./Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Homes></Homes>,
        },
        {
          path: "/services",
          element: <Home></Home>,
        },

        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/addService",
          element: <AddNewService></AddNewService>,
        },
      ],
    },
  ]);
  return (
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
