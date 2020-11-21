import { SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED, LOADING_UI,DISABLED } from "../types";


const initialState = {
    authenticated: false,
    credentials: {},
    likes: [],
    processing:null,
    disabled:false,
    notifications: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return {
                initialState
            };
        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            }
        case LOADING_UI:
            return {
                processing: action.payload
            }
        case DISABLED:
            return {
                disabled: action.payload
            }
        default:
            return state;
    }
}