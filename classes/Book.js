export class Book {
    constructor(bookTitle, bookAuthor, publicationDate) {
        this.title = bookTitle;
        this.author = bookAuthor;
        this.year = publicationDate;
    }

    printInfo() {
            console.log(`"${this.title}" ${this.author} ${this.year}`);
        }

    get author() {
        return this._author;
    }

    set author(value) {
        if(typeof value !== 'string') {
            throw new Error ('author should be string');
        }
        this._author = value;
        }

    static getOldestBook (books){
        if (books.length === 0) {
            return null;
        }
        let oldestBook = books[0];
        for(const book of books) {
            if (book.year < oldestBook.year) {
                oldestBook = book;
            }
            
        }
         return oldestBook;
    }
}

try {
    new Book('The Little Prince', 55555, 1943);
} catch (error) {
    console.log('Error, wrong value', error.message)
}

const book2 = new Book('The Little Prince', 'Antoine de Saint-Exupéry', 1943);
const book3 = new Book ('Dune', 'Frank Herbert', 1965);
const book4 = new Book ('The Shining', 'Stephen King', 1977);
// book1.printInfo();
// book2.printInfo();
// book3.printInfo();
book3.author = 'Stephen2 King2'
console.log(book3.author);
Book.getOldestBook([book2, book3, book4]).printInfo();