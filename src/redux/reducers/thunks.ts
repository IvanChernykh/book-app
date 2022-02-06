import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "./types/actionTypes";
import { IState } from "./types/stateTypes";

type ThunkType = ThunkAction<void, IState, unknown, ActionTypes>