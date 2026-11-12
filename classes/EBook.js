import { Book } from "./Book.js";

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.format = fileFormat;
    }

    printInfo () {
        console.log(`${this.title} ${this.author} ${this.year} ${this.format}`)
    }

    set format(newValue) {
            const allowedFormat = ['PDF', 'EPUB', 'TXT', 'FB2'];
            if(!allowedFormat.includes(newValue)) {
                throw new Error(`Format should be ${allowed.join(', ')}`);
            }
            this._format = newValue;
        }

    get format() {
        return this._format;
    }

    static generalInfo(book, newFormat) {
        return new EBook(book.title, book.author, book.year, newFormat);
    }
}

const ebook1 = new EBook ('"The black swan"', 'Thomas Mann',  1965, 'PDF');
ebook1.printInfo();
ebook1.format = 'EPUB';
console.log(ebook1.format);

try {
    ebook1.format = 'FB2';
}catch (error) {
    console.log('Error', error.message);
}
const books = [
    new Book('The Little Prince', 'Antoine de Saint', 1943),
    new Book ('Dune', 'Frank Herbert', 1965),
    ebook1,
    new Book ('The Shining', 'Stephen King', 1977)
];


console.log('__________');
Book.getOldestBook(books).printInfo();

const paperBook = new Book('It', 'Stephen King', 1986);
const createdEBook = EBook.generalInfo(paperBook, 'TXT');
createdEBook.printInfo();
console.log( 'EBook', createdEBook instanceof EBook);