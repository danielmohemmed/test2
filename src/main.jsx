import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./src/index.css";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
AppRegistry.registerComponent(appName, () => App);
const rootTag = document.getElementById('root') || document.getElementById('main');
createRoot(rootTag).render(<App />);


