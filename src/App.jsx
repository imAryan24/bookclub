import React from 'react'
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";
import { Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

const App = () => {
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            // return <Navigate to="/login" />
        }
        return children;
    }
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }>
                        <Route path="/about" element={<About />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/book" element={<BookList />} />
                        <Route path="/book/:id" element={<BookDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App