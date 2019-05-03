import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

// prefix the URL
// axios.get("/users")
axios.defaults.withCredentials = true;
axios.default.baseURL = "https://rem-rest-api.herokuapp.com/";

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
