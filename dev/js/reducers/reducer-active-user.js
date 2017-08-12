export default function(state={}, action){
    switch(action.type){
        case 'USER_NAME_CLICKED':
            return action.payload;
            break;
    }
    return state;
}