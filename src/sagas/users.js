import { takeEvery } from "redux-saga/effects";
import * as actions from "../actions/users";

// Worker saga
function* getUsers() {
	try {
	} catch (error) {}
}

// Watcher Saga
// watch an action then calls a worker saga
function* watchGetUsersRequest() {
	yield takeEvery(actions.type.GET_USERS_REQUEST, getUsers);
}

function* watcherSaga() {
	while (true) {
		yield 1;
		yield 2;
		yield 3;
	}
}
