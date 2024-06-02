import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBook } from "../BookSlice";
function BookForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn=useSelector((store)=>store.authReducer.isLoggedIn)

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      title,
      price,
      description,
    };
    dispatch(postBook(newItem));
    setDescription("")
    setTitle("")
    setPrice("")
  }
  return (
    <div className="mx-auto w-50">
      <h1>Insert Book</h1>
      <Form>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "75%" }}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "75%" }}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>description:</Form.Label>
          <Form.Control
            value={description}
            as="textarea"
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            style={{ width: "75%" }}
          ></Form.Control>
        </Form.Group>

        <Button onClick={handleSubmit} disabled={!isLoggedIn} className="mt-2">Submit</Button>
      </Form>
    </div>
  );
}

export default BookForm;
