import React from 'react';
import Books from './Books';
import PropTypes from 'prop-types';

const ListBookContent = ({ title, bookShelf, handleSelect }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf === undefined || bookShelf.length === 0 ? (
            <div>loading...</div>
          ) : (
            bookShelf.map((book) => <Books key={book.id} book={book} handleSelect={handleSelect} />)
          )}
        </ol>
      </div>
    </div>
  );
};

ListBookContent.propTypes = {
  title: PropTypes.string,
  bookShelf: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default ListBookContent;
