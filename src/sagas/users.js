import { takeEvery, call, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

// Worker saga
function* getUsers() {
	try {
		const result = yield call(api.getUsers);
		console.log(result);
	} catch (error) {}
}

// Watcher Saga
// watch an action then calls a worker saga
function* watchGetUsersRequest() {
	yield takeEvery(actions.type.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
