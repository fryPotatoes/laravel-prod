import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";
import Recipes from "./views/recipes/Recipes.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/auth/Login.jsx";
import NotFound from "./views/auth/NotFound.jsx";
import Signup from "./views/auth/Signup.jsx";
import Users from "./views/auth/Users.jsx";
import UserForm from "./views/auth/UserForm.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/users"/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
        {
            path: '/recipes',
            element: <Recipes/>
        },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
