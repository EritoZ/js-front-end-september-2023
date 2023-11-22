function bookShelf(arrayStrings) {
    let bookshelf = {};
    const requestDict = {
        'createShelf': (shelfId, shelfGenre, bookTitle, bookAuthor, bookGenre) => {
            if (!bookshelf.hasOwnProperty(shelfId)) {
                bookshelf[shelfId] = {'genre': shelfGenre, 'books': {}};
            }
        },
        'addBook': (shelfId, shelfGenre, bookTitle, bookAuthor, bookGenre) => {
            for (const id in bookshelf) {
                if (bookshelf[id]['genre'] === bookGenre) {
                    bookshelf[id]['books'][bookTitle] = [bookAuthor, bookGenre];
                }
            }
        }
    };

    for (let libraryAction of arrayStrings) {
        let action = undefined;
        let shelfId = undefined;
        let shelfGenre = undefined;
        let bookTitle = undefined;
        let bookAuthor = undefined;
        let bookGenre = undefined;

        if (libraryAction.includes('->')) {
            action = 'createShelf';
            [shelfId, shelfGenre] = libraryAction.split(' -> ');
        } else {
            action = 'addBook';
            libraryAction = libraryAction.replace(':', ',');
            [bookTitle, bookAuthor, bookGenre] = libraryAction.split(', ');
        }

        requestDict[action](shelfId, shelfGenre, bookTitle, bookAuthor, bookGenre);
    }

    bookshelf = Object.entries(bookshelf)
        .sort((a, b) => Object.values(b[1]['books']).length - Object.values(a[1]['books']).length);

    for (let [shelf, shelfInfo] of bookshelf) {
        let books = shelfInfo['books']
        books = Object.entries(books).sort((a, b) => a[0].localeCompare(b[0]));

        console.log(`${shelf} ${shelfInfo['genre']}: ${books.length}`);
        books.forEach(book => {
            console.log(`--> ${book[0]}: ${book[1][0]}`);
        })
    }
}

bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi'])