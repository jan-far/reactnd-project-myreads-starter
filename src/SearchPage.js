import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './BooksAPI';

export class SearchPage extends Component {
  state = {
    query: '',
    queriedBooks: [],
  };

  handleQueryChange = (e) => {
    const { value } = e.target;
    const { Books } = this.props;

    value === ''
      ? this.setState(() => ({
          queriedBooks: [],
        }))
      : BooksAPI.search(value.trim())
          .then((books) => {
            for (let i = 0; i < books.length; i++) {
              for (let val in Books) {
                Books[val].forEach((b) => {
                  if (b.id === books[i].id) {
                    books.splice(i, 1, b)};
                });}
            }
            return books;
          })
          .then((result) => {
            this.setState(() => ({
              queriedBooks: result,
            }));
          });

    this.setState(() => ({
      query: value.trim(),
    }));
  };

  render() {
    const { query, queriedBooks } = this.state;
    const querySearch =
      query === ''
        ? 'Search for books by title or author...'
        : queriedBooks.error
        ? `No result found for '${query}'`
        : queriedBooks;

    const { handleSelect } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              value={this.state.query}
              onChange={(e) => this.handleQueryChange(e)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {typeof querySearch === 'string' ? (
              <div>{querySearch}</div>
            ) : querySearch.length === 0 ? (
              <div>loading...</div>
            ) : (
              querySearch.map((book) => (
                <Books key={book.id} book={book} handleSelect={handleSelect} />
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
