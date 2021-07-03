const ADD_MESSAGE = 'my-social-network/messages/ADD-MESSAGE';
{/*
    const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
*/}

let initialization = {
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
    ]
}

const messagesReducer = (state = initialization, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesItemUser: [...state.messagesItemUser, {id: 2, dialog: action.addMessageBody}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (addMessageBody) => {return {type: ADD_MESSAGE, addMessageBody}}
{/*
    export const updateMessageText = (body) => {
        return {type: UPDATE_MESSAGE_TEXT, body: body}
    }
*/}

export default messagesReducer;