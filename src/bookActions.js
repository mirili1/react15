export const selectedBook =(id)=>{
    return{
        type:"SELECT_BOOK",
        payload: id
    }
}
export const addBook =(book)=>{
    return{
        type:"ADD_BOOK",
        payload: book
    }
}
export const removeBook =(id)=>{
    return{
        type:"REMOVE_BOOK",
        payload: id
    }
}
export const selectBookForEdit=(id)=>{
    return{
        type:"SELECT_BOOK_FOR_EDIT",
        payload: id
    }
}
export const saveEditedBook =(book)=>{
    return{
        type:"SAVE_SELECTED_BOOK",
        payload: book
    }
}
