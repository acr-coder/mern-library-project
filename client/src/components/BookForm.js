import React from "react";

const BookForm = () => {
  return (
    <div className="container w-50 mt-5 ">
    <form>
    <div className="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="book name.."/>
  <label for="floatingInput">Book Name</label>
</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingPassword" placeholder="Author"/>
  <label for="floatingPassword">Author</label>
</div>
<div className="form-floating mb-3">
  <input type="number" className="form-control" id="floatingPassword" placeholder="page"/>
  <label for="floatingPassword">Page Number</label>
</div>
<div className="form-floating">
  <select className="form-select" defaultValue="open menu" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">History & Criticism</option>
    <option value="2">Religious</option>
    <option value="3">Music</option>
    <option value="4">Study & Teaching</option>
    
  </select>
  <label for="floatingSelect">Department</label>
</div>
<div class="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
<button type="button" className="btn btn-primary mt-2">Add Book</button>
    </form>
    </div>
  );
};

export default BookForm;
