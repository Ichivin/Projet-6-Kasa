import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/lodging/:id" element={<Lodging />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
