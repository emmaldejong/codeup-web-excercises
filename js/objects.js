(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
      firstName: 'Emma',
      lastName: 'DeJong'
    };
    console.log(person.firstName + ' ' + person.lastName);
    // console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = 'Hello from ' + person.firstName + ' ' + person.lastName;
    console.log(person.sayHello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    function discountApplied(amount) {
        if(amount > 200) {
            return (amount - (amount*.12));
        } else {
            return 'none';
        }
    }
    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }
    ];
    shoppers.forEach(function(element, index) {
        console.log(shoppers[index].name + ' \'s total bill was $' + shoppers[index].amount + 'and the total after discount was $' + discountApplied(shoppers[index].amount));
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: 'A Tale of Two Cities',
            author: {
                firstName: 'Charles',
                lastName: ' Dickens'
            }
        },
        {
            title: 'The Lord of the Rings',
            author: {
                firstName: 'J.R.R.',
                lastName: ' Tolkien'
            }
        },
        {
            title: 'World War Z',
            author: {
                firstName: 'Max',
                lastName: ' Brooks'
            }
        },
        {
            title: 'The Handmaid\'s Tale',
            author: {
                firstName: 'Margaret',
                lastName: ' Atwood'
            }
        },
        {
            title: 'Harry Potter and the Half Blood Prince',
            author: {
                firstName: 'J.K.',
                lastName: ' Rowling'
            }
        }
    ];
    // console.log('Listed below are the details of this book:');
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    var bookArrayLength = books.length;
    for (var i = 0; i < bookArrayLength; i++) {
        console.log('Book # ' + i);
        console.log('Title: ' + books[i].title);
        console.log('Author: ' + books[i].author.firstName + books[i].author.lastName);
        console.log('---');
    }
    //Justin's Solution
    // books.forEach(function(book, index) {
    //    var output = '';
    //    output += 'Book # ' + (index + 1) + '\n';
    //    output += 'Title: ' + book.title + '\n';
    //    output += 'Author: ' + book.author + '' + book.lastName + '\n';
    //    output += '---\n';
    //    console.log(output);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        var nameArray = author.split(' ');
        var firstName = nameArray[0];
        var lastName = nameArray[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
    }
    var booksBonus = [
        createBook("1984", "George Orwell"),
        createBook("The Lord of the Rings", "J.R.R. Tolkien"),
        createBook("R is for Rocket", "Ray Bradbury"),
        createBook("The Lost World", "Michael Crichton"),
        createBook("The Shining", "Stephen King")
    ];
    console.log(booksBonus);

    function showBookInfo(book, index) {
        var output = "Title: " + book.title + "\n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName  + "\n";
        output += "---";
        return output;
    }

    books.forEach(function(book, index) {
        console.log("Book # " + (index + 1) + "\n");
        console.log(showBookInfo(book));
    });

})();
