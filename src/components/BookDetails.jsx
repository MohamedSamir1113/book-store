import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

function BookDetails() {
  const books = useSelector((store) => store.bookReducer.books);
  const bookInfo = useSelector((store) => store.bookReducer.bookInfo);
  const bookExists = books.some(book => book.id === bookInfo.id);

  console.log(bookExists);

  return (
    <div className="col-md-6">
        <h3>Book Details</h3>
      {bookExists ? (
        <div>
          
          <p>ID:{bookInfo.id}</p>
          <p>Title:{bookInfo.title}</p>
          <p>Price:{bookInfo.price}</p>
          <p>Description:{bookInfo.description}</p>
        </div>
      ) : (
        <Alert className="mt-4">ther is no book selected yet !!</Alert>
      )}
    </div>
  );
}

export default BookDetails;
