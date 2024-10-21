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

//Task 6: Create and Manage Sections and Patrons
const Fantasy = new Section ("Fantasy")
const Sports = new Section ("Sports")

const book1 = new Book ("The Lord of the Rings", "John Ronald Reuel Tolkien", "0007270607")
const book2 = new Book ("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "1338878921")
const book3 = new Book ("The Climber", "Shin-ichi Sakamoto", "8861239749")

Fantasy.addBook(book1)
Fantasy.addBook(book2)
Sports.addBook(book3)

const regularPatron = new Patron ("Liam Lawson")
const vipPatron = new VIPPatron ("Yuki Tsunoda")

regularPatron.borrowBook(book1)
vipPatron.borrowBook(book1)
regularPatron.returnBook(book1)

Fantasy.listBooks()

console.log(`Total available books in Fantasy: ${Fantasy.getAvailableBooks()}`)
console.log(`Total available books in Sports: ${Sports.getAvailableBooks()}`)