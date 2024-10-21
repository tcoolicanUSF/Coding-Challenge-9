//Coding Challenge #9: Library Management System
//Task 1: Create a Book Class
class Book { //Define a Class
    constructor(title, author, ISBN) { 
        this.title = title;
        this.author = author; 
        this.ISBN = ISBN;
        this._isAvailable = true; 
    };

    getDetails() { // Book Info
        return `Title: ${this.name}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    };

    get isAvailable() { // getter to see if book is available
        return `${this._isAvailable}`;
    };

    set isAvailable(status) { // setter to update a books availability
        this._isAvailable = status;
    }
};

//Task 2: Create a Section Class
class Section {
    constructor (name, books = []) {
        this.name = name
        this.books = books
    }

    addBook (book) {
        this.books.push(book)
    }

    getAvailableBooks () { //Available book count
        let availableBooks = this.books.filter(book => book.isAvailable === true)
        return availableBooks.length
    }

    listBooks() {
        return this.books.map (book => ({
        title: book.title,
        available: book.isAvailable
        }
    ));
    }}

    // Task 5: Handle Books Borrowing and Returning
    calculateTotalBooksAvailable(); {
        return this.books.reduce((TotalAvailableBooks, books) => {
                return `Number of available books: ${TotalAvailableBooks + (books.isAvailable ? 1 : 0)}`
            }
        )
    }
    