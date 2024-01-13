const bookState = {
    arr: [
        { id: 1, name: "לב של קרח", price: 45, src: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2021/08/2570589.jpg", author: "מ.קינן",summary:"ספר רב מכר לכל גיל" },
        { id: 2, name: "איסתרק", price: 65, src: "https://www.hbooks.co.il/images/itempics/hbooks1336_250620201509361.jpg", author: "מ.קינן" ,summary:"ספר רב מכר לכל גיל"},
        { id: 3, name: "קודיאל, סוד הכתר", price: 35, src: "https://yefe.co.il/wp-content/uploads/2020/10/1774-copy-216x216.gif", author: "ק.כצן" ,summary:"ספר רב מכר לכל גיל"},
    ],
    selectedBook: null,
    bookForEdit: null
}
export const bookReducer = (state = bookState, action) => {
    switch (action.type) {
        case "SELECT_BOOK":
            return {
               arr:state.arr,
               selectedBook:state.arr.find(item=>item.id==action.payload),
               bookForEdit:state.bookForEdit
            }
        case "ADD_BOOK":
            return {
                arr:[...state.arr,action.payload],
                selectedBook:state.selectedBook,
                bookForEdit:state.bookForEdit
            }
        case "REMOVE_BOOK":

            return {
                arr:state.arr.filter(item=>item.id!=action.payload),
                selectedBook:state.selectedBook?.id!=action.payload?state.selectedBook:null,
                bookForEdit:state.bookForEdit?.id!=action.payload?state.bookForEdit:null
                
            }
        case "SELECT_BOOK_FOR_EDIT":
            return {
                arr:state.arr,
                selectedBook:state.selectedBook,
                bookForEdit:state.arr.find(item=>item.id==action.payload),
            
            }
        case "SAVE_SELECTED_BOOK":
            let copy=state.arr.map(item=>{
                if(item.id!=state.bookForEdit.id)
                  return item;
                return action.payload;
            })
            let selectedB=!state.selectedBook?null:copy.find(item=>item.id==state.selectedBook.id);
            return {
                arr: copy,
                selectedBook:selectedB,
                bookForEdit:null
            }
        default: return state;
    }
}