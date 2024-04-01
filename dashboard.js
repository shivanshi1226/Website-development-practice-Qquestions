// Function to render dashboard page
function renderDashboardPage() {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    let tableContent = `
        <h2>Dashboard</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Description</th>
                <th>Added Date</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
    `;
    bookList.forEach(book => {
        tableContent += `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.addedDate}</td>
                <td>${book.category}</td>
                <td>
                    <button onclick="buyBook('${book.name}')">Buy</button>
                    <button onclick="addBookmark('${book.name}')">Bookmark</button>
                </td>
            </tr>
        `;
    });
    tableContent += `</table>`;
    document.getElementById('content').innerHTML = tableContent;
}

// Function to handle buying a book
function buyBook(bookName) {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    let myBooks = JSON.parse(localStorage.getItem('my-books')) || [];
    
    // Find the book by its name
    let book = bookList.find(book => book.name === bookName);
    if (book) {
        // Add the book to my books
        myBooks.push(book);
        localStorage.setItem('my-books', JSON.stringify(myBooks));

        // Remove the book from the book list
        bookList = bookList.filter(item => item.name !== bookName);
        localStorage.setItem('book-list', JSON.stringify(bookList));

        // Re-render the Dashboard page
        renderDashboardPage();
    }
}

// Function to handle bookmarking a book
function addBookmark(bookName) {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];
    
    // Find the book by its name
    let book = bookList.find(book => book.name === bookName);
    if (book) {
        // Add the book to bookmark list
        bookmarkList.push(book);
        localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));

        // Remove the book from the book list
        bookList = bookList.filter(item => item.name !== bookName);
        localStorage.setItem('book-list', JSON.stringify(bookList));

        // Re-render the Dashboard page
        renderDashboardPage();
    }
}

// Initialize on page load
renderDashboardPage(); // Render dashboard page on load
