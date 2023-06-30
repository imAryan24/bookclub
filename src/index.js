import React from 'react';
import ReactDOM from 'react-dom/client';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import App from "./App"
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
