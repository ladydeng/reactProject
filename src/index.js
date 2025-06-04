import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider} from "react-router-dom"
import router from "./router/index 01"
import axios from "./axios"

// 注册全局参数
React.Component.prototype.$axios = axios

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> //会导致componentDidMount钩子被调用两次
    <RouterProvider router={router} axios={axios}></RouterProvider>
  // </React.StrictMode>
);

reportWebVitals();
