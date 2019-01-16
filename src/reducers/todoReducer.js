const initialState = {
    all: [],
    filter: "all"
}

export default function (state = initialState, action){
    switch(action.type){
        case 'POST_LIST':
            return {...state, all: [...state.all, action.input]}
        case 'DELETE_ITEM':
            return {...state, all: state.all.filter(item => item.id !== action.id)}
        case 'TOGGLE_STATUS':
            return {...state, all: state.all.map(item => {
                if(item.id === action.id){
                    item.status = !item.status
                }

                return item 
            })}
        case 'CHANGE_FILTER':
            return {...state, filter: action.filter}
        default: 
            return state
        
    }
}