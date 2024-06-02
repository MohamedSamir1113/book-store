import { useDispatch } from "react-redux";
import { deleteBook, getBook } from "../BookSlice";

function BookItem({ book }) {
  const { title,id } = book;
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Title</th>

            <th>Read</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-25">{title}</td>

            <td>
              <button
                className="btn btn-info"
                onClick={() =>
                  dispatch(getBook(id))
                    .unwrap()
                    .then((data) => {
                      console.log(data);
                    })
                }
              >
                Read
              </button>
            </td>

            <td>
              <button
                onClick={() =>
                  dispatch(deleteBook(book))
                    .unwrap()
                    .then((data) => {
                      alert(`${data.title} is deleted`);
                    })
                    .catch((err) => console.log(err))
                }
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookItem;
