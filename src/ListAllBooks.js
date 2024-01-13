import { useSelector } from "react-redux";
import ListOneBook from "./ListOneBook";

const ListAllBooks = () => {
    const arrBooks=useSelector(allMyBookState=>allMyBookState.arr);
    return ( <>
    <ul style={{listStyleType:"none"}}>
        {arrBooks.map((item,index) => {return <li key={index}><ListOneBook book={item}/></li>})}
    </ul>
    </> );
}
 
export default ListAllBooks;