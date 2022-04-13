function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1 : -1) )
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
      if (account.id === books[i].borrows[j].id){
        total += 1;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
