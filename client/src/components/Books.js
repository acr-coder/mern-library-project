import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './books.css';

const Books = ({ books, deleteBook, lendBook, backBook }) => {
    return (
        <div className="container mt-5 ">
          
          <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author</th>
      <th scope="col">Department</th>
      <th scope="col">Quantity</th>
      <th scope="col" colSpan="3">Process</th>


    </tr>
  </thead>
  <tbody>
    {
      books.map((book,index) => {
        return(
          <tr key={index} >
            <th scope="row">{book._id}</th>
            <td data-toggle="tooltip" data-placement="top" title={book.comments} >{book.bookName}<span class="tooltiptext">{book.comment}</span></td>
            <td>{book.author}</td>
            <td>{book.department}</td>
            <td>{book.quantity}</td>
            <td><button type="button" onClick={() => deleteBook(book._id)} className="btn btn-primary">DELETE</button></td>
            <td><button type="button" onClick={() => lendBook(book._id)} className="btn btn-primary">LEND</button></td>
            <td><button type="button" onClick={() => backBook(book._id)} className="btn btn-primary">BACK</button></td>
          </tr>
        )
      })
    }
    
  </tbody>
</table>  
        </div>
    )
}

export default Books
