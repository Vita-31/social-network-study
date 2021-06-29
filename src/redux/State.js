import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


let store = {
    _state: {
        dialogsPage: {
            userData: [
                {id: 1, name: 'Vita'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Liza'},
                {id: 4, name: 'Sofi'},
                {id: 5, name: 'Julia'},
                {id: 6, name: 'Ira'}
            ],
            messagesData: [
                {id: 1, message: 'Hi, how you doing?'},
                {id: 2, message: 'Hi, how old are you?'},
                {id: 3, message: 'Hi, how you doing?'},
                {id: 4, message: 'Hi, how you doing?'},
                {id: 5, message: 'Hi, how you doing?'},
            ],
            messagesItemUser: [
                {id:1, dialog: 'Hi, hi!!'},
                {id:2, dialog: 'Hello!!'}
            ],
            newMessageText: ''
        },
        ProfilePage: {
            post: [
                {id: 1, post: 'Hi, how are you?', likesCount: 2},
                {id: 2, post: 'Hi, old are you?', likesCount: 0},
                {id: 3, post: 'Hi, how are you?', likesCount: 5},
                {id: 4, post: 'Hi, old are you?', likesCount: 3},
            ],
            newPostText: 'Create new post'

        },
    },
    getState(){
        return this._state;
    },
    _renderEntireTree(){
        console.log('state was changed')
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);

        this._state.dialogsPage = messagesReducer(this._state.dialogsPage, action);

        this._renderEntireTree(this._state);
    }
}

export default store;
window.store = store;