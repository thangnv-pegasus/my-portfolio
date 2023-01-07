import Header from "./components/Header";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import "~/index.css";
import { Socials, Contact } from "~/components";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
            <Socials />
            <Contact />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
