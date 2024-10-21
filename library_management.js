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

