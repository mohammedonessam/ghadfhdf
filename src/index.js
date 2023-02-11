import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import RootLayout from './pages/RootLayout';
import Index from './pages/Index';
import ErrorPage from './pages/ErrorPage';
import store from './store/index';
import Loading from "./components/Loading";

const AddPost = React.lazy(() => import('./pages/Add'));
const Edit = React.lazy(() => import('./pages/Edit'));
const Details = React.lazy(() => import('./pages/Details'));

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
      {
        path:"post/add",
        element:
          <Suspense fallback={<Loading/>}>
            <AddPost/>
          </Suspense>,
      },
      {
        path:"post/:id",
        element:
        <Suspense fallback={<Loading/>}>
          <Details/>
        </Suspense> ,
        loader: postParamsHandler,
      },
      {
        path:"post/edit/:id",
        element:
        <Suspense fallback={<Loading/>}>
          <Edit/>
        </Suspense>,
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