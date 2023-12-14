import { ContextProvider } from "context/Context";
import { userPageLoader } from "loaders/loader";
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import UserPage from "pages/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/userpage',
      element: <UserPage/>,
      loader: userPageLoader
    },
    {
      path:'/signup',
      element:<SignUp/>
    }  
  ])
  return (
    <ContextProvider>
        <div
          className="w-full h-screen "
          style={{
            userSelect: "none",
          }}
        >
          <RouterProvider router={router}/>
        </div> 
    </ContextProvider>
  );
};

export default App;
