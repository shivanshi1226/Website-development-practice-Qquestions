// Function to render home page
function renderHomePage() {
    document.getElementById('content').innerHTML = `
        <h2>Home Page</h2>
        <form id="bookForm">
            <label for="bookName">Book Name:</label>
            <input type="text" id="bookName" required><br><br>
            <label for="authorName">Author Name:</label>
            <input type="text" id="authorName" required><br><br>
            <label for="bookDescription">Book Description:</label>
            <input type="text" id="bookDescription" required><br><br>
            <label for="addedDate">Added Date:</label>
            <input type="date" id="addedDate" required><br><br>
            <label for="bookCategory">Book Category:</label>
            <select id="bookCategory" required>
                <option value="Fiction">Fiction</option>
                <option value="Self Help">Self Help</option>
                <option value="Finance">Finance</option>
            </select><br><br>
            <button type="submit">Submit</button>
        </form>
    `;

    document.getElementById('bookForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const book = {
            name: document.getElementById('bookName').value,
            author: document.getElementById('authorName').value,
            description: document.getElementById('bookDescription').value,
            addedDate: document.getElementById('addedDate').value,
            category: document.getElementById('bookCategory').value
        };

        let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
        bookList.push(book);
        localStorage.setItem('book-list', JSON.stringify(bookList));
        alert('Book added successfully!');
        document.getElementById('bookForm').reset();
    });
}

// Initialize on page load
renderHomePage(); // Render home page on load
