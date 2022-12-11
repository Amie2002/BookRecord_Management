class IssuedBook {
  constructor(user) {
    this.l_id = user.issuedBook._id;
    this.name = user.issuedBook.name;
    this.genre = user.issuedBook.genre;
    this.price = user.issuedBook.price;
    this.publisher = user.issuedBook.publisher;
    this.issuedBy = user.name;
    this.issuedDate = user.issuedDate;
    this.returnDate = user.returnDate;
  }
}
exports.IssuedBook = IssuedBook;
module.exports = IssuedBook;
