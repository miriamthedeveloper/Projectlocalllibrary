function findAuthorById(authors, id) {
 return authors.find((authors) => authors.id === id) 
}

function findBookById(books, id) {
return books.find((books) => books.id === id); 
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((books) => books.borrows.every((borrows) => borrows.returned === true));
  
  let booksNotReturned = books.filter((books) => books.borrows.some((borrows) => borrows.returned === false));
  let newArray = [[...booksNotReturned], [...booksReturned]] 
  return newArray;
}

function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
