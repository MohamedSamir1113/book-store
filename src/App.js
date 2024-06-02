import BookDetails from "./components/BookDetails";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="p-4">
        <BookForm />
        <div className="row mt-4 w-75 mx-auto">
          <BookList />
          <BookDetails />
        </div>
      </div>
    </>
  );
}

export default App;
