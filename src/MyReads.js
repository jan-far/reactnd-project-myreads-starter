import React from 'react';
import { Link } from 'react-router-dom';
import ListBookContent from './ListBooks';

const MyReads = (props) => {
  const { currentlyReading, wantToRead, read, handleSelect } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <ListBookContent
          handleSelect={handleSelect}
          title="Currently Reading"
          bookShelf={currentlyReading}
        />
        <ListBookContent handleSelect={handleSelect} title="Want To Read" bookShelf={wantToRead} />
        <ListBookContent handleSelect={handleSelect} title="Read" bookShelf={read} />
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default MyReads;
