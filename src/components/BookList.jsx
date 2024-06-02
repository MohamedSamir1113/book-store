import { useDispatch, useSelector } from "react-redux";
import BookItem from "./BookItem";
import { useEffect } from "react";
import { fetchBooks } from "../BookSlice";

function BookList() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(fetchBooks());
    },
    [dispatch]
  );
  const books = useSelector((store) => store.bookReducer.books);
 const isLoading=useSelector((store)=>store.bookReducer.isLoading);
 
 
  return (
    <>
    {isLoading==="loading"?<p>Loading...</p>:<div className="col-md-6">
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>}
    </>
  );
}

export default BookList;
