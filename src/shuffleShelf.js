const shelf = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
};

const shuffleShelf = (book) => {
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

export default shuffleShelf;
