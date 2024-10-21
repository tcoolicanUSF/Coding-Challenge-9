//Coding Challenge #9: Library Management System
//Task 1: Create a Book Class
class Book {
    constructor (title, author, ISBN, _isAvailable) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this._isAvailable = true
    }

    getdetails () {
        console.log(`BookTitle: ${this.title}, BookAuthor: ${this.author}, ISBN: ${this.ISBN}`)
    }

    get isAvailable () {  //book current status
       return this._isAvailable
    }

    set isAvailable (status) {  //books availability
        this._isAvailable = status
    }
}

//Task 2: Create a Section Class
class Section {
    constructor (name, books = []) {
        this.name = name
        this.books = books
    }

    addBook (book) {
        this.books.push(book)
    }

    getAvailableBooks () { //available books
        let availableBooks = this.books.filter(book => book.isAvailable === true)
        return availableBooks.length
    }

    listBooks() {
        return this.books.map (book => ({ 
        title: book.title,
        available: book.isAvailable
        }
    ));

        }

// Task 5: Handle Books Borrowing and Returning
    calculateTotalBooksAvailable() {
        return this.books.reduce((TotalAvailableBooks, books) => {
                return `Number of available books: ${TotalAvailableBooks + (books.isAvailable ? 1 : 0)}`
            }
        )
    }        
}

//Task 3: Create a Patron Class
class Patron {
    constructor (name, borrowedBooks = []) {
        this.name = name
        this.borrowedBooks = borrowedBooks
    }

    borrowBook(book) { 
        if (book.isAvailable) {
            this.borrowedBooks.push(book)
            book.isAvailable = false
        } else {
            return "Book is not currently available"
        }
    }
    returnBook(book) { 
        for (let b of this.borrowedBooks) {
            if (b === book) {
                book.isAvailable = true
                this.borrowedBooks = this.borrowedBooks.filter(b => b !== book) 
            } else {
                return "Book is not checked out by patron"
            }
        }
    }
}

//Task 4: Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron{
    constructor (name, borrowedBooks = [], priority = true) {
        super (name, borrowedBooks)
        this.priority = priority
    }

    borrowBook(book) {
        const alreadyBorrowed = this.borrowedBooks.some(b => b === book)

        if (book.isAvailable || alreadyBorrowed && this.priority) { 
            super.borrowBook(book) 
            book.isAvailable = false
            return `Book has been successfully checked out. If already checked out,previous owner will be notified you have priority` 
        } else {
           return "Book is not currently available" //Message to show book that VIP patron tried to check out is not available
        }
    }
}
