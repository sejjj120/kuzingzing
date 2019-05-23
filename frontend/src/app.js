import React from "react";
import ReactDOM from "react-dom";
import PimfyApp from "./components/PimfyApp";
import AppRouter from "./router/AppRouter";
import "normalize.css/normalize.css";
import "./styles/style.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
