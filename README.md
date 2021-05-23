# MyReads Project

This is the completed 1st project of the udacity React-nanodegree - **`MyReads`**. To get the starter file, Click [HERE](https://github.com/udacity/reactnd-project-myreads-starter)

The MyReads Project Allows you to view/organize books by shelfs, namely;
* Currently Reading
* Want To Read
* Read

## The Homepage

The homepage of the project, is your dashboard, showing books in their respective shelfs and allow you to update a book shelf status, by choosing the shelf in the drop-down menu of the book.

* **Currently Reading** shelf holds book you are still reading or yet to complete.

* **Want To Read** shelf is for books that pique your interest and you would like to read in the (nearest) future or leisure time.

* **Read** shelf contains the books you have successfully completed.

## Search Page

To search for new books, click on the bottom right plus icon to navigate to the search page.

On the search page, you can search for books by **`Title`** or **`Author`**. 

Books searched can be added to shelfs by clicking on the buttom right button of the desired book, choosing the shelf the book belong.
For each book you choose, the state of the current shelf is updated and can be found in the respective shelf in the homepage.

You are welcome to organize the book by shelfs. You may choose the **None** option from the drop-down menu of a book if the book does not belong to any shelf.
*`Happy Reading`*

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the finished code of the udacity React-nd 1st project, MyReads. Therefore, I most likely will welcome pointers to issues or poor implementation of code.