import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import logger from "redux-logger";
import "bootstrap/dist/css/bootstrap.min.css";

// prefix the URL
// axios.get("/users")
//axios.defaults.withCredentials = true;
axios.defaults.baseURL =
	"https://cors-anywhere.herokuapp.com/https://rem.tomphill.co.uk/api/";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
