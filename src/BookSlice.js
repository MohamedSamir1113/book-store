import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReport } from "./reoprtSlice";

const initialState = {
  isLoading: "idle",
  books: [],
  error: "",
  bookInfo:{}
};

export const postBook = createAsyncThunk(
    "book/postBook",
    async function (newBook,authAPI) {
        const {getState,dispatch}=authAPI
        newBook.username=getState().authReducer.name
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(newBook), // to turn the object coming from the form into json id:"1"===> "id":"1"
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch(getReport({name:"postBook",status:"success"}))
      return data;
    }
  );
  
  export const fetchBooks = createAsyncThunk(
    "book/fetchBooks",
    async function () {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    }
  );
  
  export const deleteBook=createAsyncThunk("book/deleteBook",async function(book) {
      const res = await fetch(`http://localhost:3005/books/${book.id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"aplication/json"
          }
      })
      const data = await res.json()
      return data
      
  })
  
  export const getBook=createAsyncThunk("book/getBook",async function(id) {
      const res = await fetch(`http://localhost:3005/books/${id}`)
      const data = await res.json();
      return data
      
  })

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(postBook.pending, (state, action) => {
        state.isLoading = "loading";
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.isLoading = "idle";
        state.books.push(action.payload);
      })
      .addCase(postBook.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchBooks.pending, (state, action) => {
        state.isLoading = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = "idle";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state, action) => {
        state.isLoading = "loading";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = "idle";
        state.books=state.books.filter((book)=>book.id!==action.payload.id)
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getBook.pending,(state,action)=>{
        state.isLoading="loading"
      })
      .addCase(getBook.fulfilled,(state,action)=>{
        state.isLoading="idle"
        state.bookInfo=action.payload
      })
      .addCase(getBook.rejected, (state, action) => {
        state.error = action.error.message;
      })
      
});


export default bookSlice.reducer;



