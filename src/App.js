import logo from './logo.svg';
import './App.css';
import ListAllBooks from './ListAllBooks';
import { useSelector } from 'react-redux';
import BookDetails from './BookDetails';
import BookEditOrAdd from './BookEditOrAdd';

function App() {
  let selectedBook = useSelector(allMyBookState => allMyBookState.selectedBook);
  // let bookForEdit = useSelector(allMyBookState => allMyBookState.bookForEdit);
  return (
    <>
      <ListAllBooks />
      {selectedBook && <BookDetails />}
      <BookEditOrAdd />
    </>
  );
}

export default App;
