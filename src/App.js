import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyReads from './MyReads';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: [],
    },
  };

  shuffleShelf = (book) => {
    const shelf = this.state.books;

    switch (book.shelf) {
      case 'currentlyReading':
        shelf['currentlyReading'] = shelf.currentlyReading.concat([book]);
        break;
      case 'wantToRead':
        shelf['wantToRead'] = shelf.wantToRead.concat([book]);
        break;
      case 'read':
        shelf['read'] = shelf.read.concat([book]);
        break;
      default:
        break;
    }

    return shelf;
  };

  componentDidMount() {
    let shelf;
    BooksAPI.getAll()
      .then((result) => result)
      .then((bookShelf) => {
        bookShelf.map((book) => {
          return (shelf = this.shuffleShelf(book));
        });
        return shelf;
      })
      .then((shelf) => {
        this.setState(() => ({
          books: { ...shelf },
        }));
      });
  }

  handleSelect = (e, book) => {
    const { value } = e.target;
    const { shelf, id } = book;

    BooksAPI.update(book, value)
      .then(() => {
        shelf !== undefined &&
          this.setState((prevState) => ({
            books: {
              ...prevState.books,
              [shelf]: prevState.books[shelf].filter((book) => book.id !== id),
            },
          }));
      })
      .then(() => {
        book = { ...book, shelf: value };
        value !== 'none' &&
          this.setState((prevState) => ({
            books: { ...prevState.books, [value]: [...prevState.books[value], book] },
          }));
        return book;
      });
  };

  render() {
    const {
      books: { currentlyReading, wantToRead, read },
    } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyReads
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              handleSelect={this.handleSelect}
            />
          )}
        />
        <Route path="/search">
          <SearchPage handleSelect={this.handleSelect} Books={this.state.books} />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
