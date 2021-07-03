import {getUserProfileData} from "./auth-reducer";

const SET_INITIALIZED = 'my-social-network/app/SET_INITIALIZED';

let initialization = {
    initialized: false

}

const appReducer = (state = initialization, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitialized = () => { return { type: SET_INITIALIZED } };


export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getUserProfileData());
    Promise.all([promise])
        .then( () => {
        dispatch(setInitialized())
    });

};


export default appReducer;