import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{  
  path:"/",
  element: <HomePage />,
},
{
  path: "/:slug",
  element: <PostListPage />,
},
{
  path: "/write",
  element: <Write />,
},
{
  path: "/login",
  element: <LoginPage />,
},
{
  path: "/:slug",
  element: <RegisterPage />,
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
