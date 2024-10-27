// library.ts

// Define the Book tuple type
type Book = [string, string, number, boolean]; // [Title, Author, Year, Is Available]

// Array to hold the library's books
let library: Book[] = [];

// Function to add a new book to the library
function addBook(title: string, author: string, year: number, isAvailable: boolean): void {
    const book: Book = [title, author, year, isAvailable];
    library.push(book);
    console.log(`Book added: ${title}`);
}

// Function to list all books
function listBooks(): void {
    console.log("\nList of Books:");
    library.forEach((book, index) => {
        const [title, author, year, isAvailable] = book;
        console.log(`${index + 1}. ${title} by ${author}, Published: ${year}, Available: ${isAvailable ? "Yes" : "No"}`);
    });
}

// Function to search for a book by title
function searchBook(title: string): Book | undefined {
    return library.find((book) => book[0].toLowerCase() === title.toLowerCase());
}

// Function to update the availability of a book
function updateAvailability(title: string, isAvailable: boolean): void {
    const book = searchBook(title);
    if (book) {
        book[3] = isAvailable;
        console.log(`Availability of "${title}" updated to: ${isAvailable ? "Available" : "Not Available"}`);
    } else {
        console.log(`Book not found: ${title}`);
    }
}

// Adding sample books
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, true);
addBook("To Kill a Mockingbird", "Harper Lee", 1960, false);
addBook("1984", "George Orwell", 1949, true);

// Listing all books
listBooks();

// Searching for a book
const book = searchBook("1984");
if (book) {
    const [title, author, year, isAvailable] = book;
    console.log(`\nFound Book: ${title} by ${author}, Published: ${year}, Available: ${isAvailable ? "Yes" : "No"}`);
} else {
    console.log("Book not found.");
}

// Updating availability
updateAvailability("The Great Gatsby", false);
listBooks();
