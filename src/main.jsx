import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { 
  createBrowserRouter,
  RouterProvider,
  Route, 
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
{  
  path:"/",
  element: <Homepage />,
},
{
  path: "/posts",
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
  path: "/register",
  element: <RegisterPage />,
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
);
