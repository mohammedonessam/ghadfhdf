import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import RootLayout from './pages/RootLayout';
import AddPost from './pages/Add';
import Edit from './pages/Edit';
import Details from './pages/Details';
import Index from './pages/Index';
import ErrorPage from './pages/ErrorPage';
import store from './state/index';


const postParamsHandler=({params})=>{
  if(isNaN(params.id)){
    throw new Response("Bad Request",{
      statusText:"please make sure to insert intiger ID",
      status: 400,
    });
  };
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Index/>},
      {path:"post",element:<Index/>},
      {path:"post/add",element:<AddPost/>},
      {
        path:"post/:id",
        element:<Details/>,
        loader: postParamsHandler,
      },
      {
        path:"post/edit/:id",
        element:<Edit/>,
        loader:postParamsHandler,
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
);