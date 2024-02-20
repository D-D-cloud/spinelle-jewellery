import './App.css';
import DashBoard from './pages/dashboard';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import { ProductDetails, ProductList } from './pages/products';
import MyOrders from './pages/my-orders';
import SignIn from './pages/auth/sign-in';
import { Cart } from './pages/cart/my-cart';
import SignUp from './pages/auth/sign-up';
import ResetPassword from './pages/auth/reset-password';
import { useEffect } from 'react';
const App = (props) => {

  useEffect(() => {
    if (props?.error) alert(props.error);
  }, [props?.error])

  let routes = useRoutes([
    { path: "/dashboard", element: <DashBoard /> },
    { path: "/", element: <SignUp /> },
    { path: "sign-up", element: <SignUp /> },
    { path: "sign-in", element: <SignIn /> },
    { path: "product-details", element: <ProductDetails /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "products", element: <ProductList /> },
    { path: "cart", element: <Cart /> },
    { path: "reset-password", element: <ResetPassword /> },

  ]);


  return routes;
};

export default App