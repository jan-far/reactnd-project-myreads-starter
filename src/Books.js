import React from 'react';

const Books = ({ book, handleSelect }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `${!book.imageLinks ? 'No Image' : `url(' book.imageLinks.thumbnail')`}`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={!book.shelf ? 'none' : book.shelf}
              onChange={(e) => handleSelect(e, book)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {!book.authors ? 'Unavailable author info' : book.authors.map((author, i) => <div key={i}>{author}</div>)}
        </div>
      </div>
    </li>
  );
};

export default Books;
