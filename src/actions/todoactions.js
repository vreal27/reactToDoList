import store from '../store'
import shortid from 'shortid'

export function postList(text){
    store.dispatch({
        type:'POST_LIST',
        input: {
            id: shortid.generate(),
            text: text,
            status: true
        }
    })
}


export function deleteItem(id) {
    store.dispatch({
        type:'DELETE_ITEM',
        id: id
    })
}

export function toggleStatus(id){
    store.dispatch({
        type:'TOGGLE_STATUS',
        id: id
    })
}

export function changeFilter(filter){
    store.dispatch({
        type: 'CHANGE_FILTER',
        filter: filter
    })
}