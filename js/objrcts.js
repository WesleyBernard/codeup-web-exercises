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

    // let person = {
    //     firstName : "Wesley",
    //     lastName : "Bernard",
    //     sayHello : function() {
    //         return "hello from " + this.firstName + this.lastName;
    //     }
    // }
    //
    // console.log(person.firstName);
    // console.log(person.lastName)
    // console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

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

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // function discountChecker() {
    //
    //     shoppers.forEach(function (shopper) {
    //         if (shopper.amount > 200) {
    //             console.log(shopper.name +" You get a 12% discount!");
    //             ;
    //             console.log("your new total is " + (shopper.amount - shopper.amount * .12));
    //
    //         } else {
    //             console.log(shopper.name + " You didn't spend enough to earn a discount");
    //             ;
    //             console.log("Your total is " + shopper.amount);
    //
    //         }
    //     })
    // }
    //
    // function finalSale() {
    //     console.log(shoppers)
    //     discountChecker();
    //
    // }
    //
    // finalSale();






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

    let books = []
    books[0] = {
        title :"Super cool fantasy" ,
        author : {
            firstName :"Wesley" ,
            lastName : "Bernard"
        } ,
    }

    books[1] = {
        title : "Lil developer that could",
        author : {
            firstName :"Ron",
            lastName :"Swanny"
        } ,
    }

    books[2] = {
        title :"Ooooo this one is spooky" ,
        author : {
            firstName : "Ry",
            lastName :"Ryson"
        } ,
    }

    books[3] = {
        title :"Python Theory" ,
        author : {
            firstName :"Py" ,
            lastName : "Thon"
        } ,
    }

    books[4] = {
        title : "The last book",
        author : {
            firstName :"Carlos" ,
            lastName :"Last"
        } ,
    }

    // console.log(books);

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

    // books.forEach(function (book) {
    //     console.log("This book is at index " + books.indexOf(book))
    //     console.log("\tthis book is called" + book.title);
    //     console.log("\tThe author is " + book.author.firstName + " "+ book.author.lastName);
    // })

    // console.log(books[0].title);

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

    function  createBook(titleName, authorFirstName, authorLastName) {
        books[books.length] = {
            title : titleName,
            author : {authorFirstName,
                firstName: authorLastName
            }
        }

    }

    createBook("One more book", "Jack", "Jackson");

    console.log(books);
    console.log("\n Okay but what if we added just one more book? For good measure. \n")
    createBook("Okay last one for real", "Lucy", "Bell");

    console.log(books);

})();