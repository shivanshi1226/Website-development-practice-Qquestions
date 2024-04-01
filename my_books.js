// Function to render my books page
function renderMyBooksPage() {
    let myBooks = JSON.parse(localStorage.getItem('my-books')) || [];
    let tableContent = `
        <h2>My Books</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Description</th>
                <th>Added Date</th>
                <th>Category</th>
            </tr>
    `;
    myBooks.forEach(book => {
        tableContent += `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.addedDate}</td>
                <td>${book.category}</td>
            </tr>
        `;
    });
    tableContent += `</table>`;
    document.getElementById('content').innerHTML = tableContent;
}

// Initialize on page load
renderMyBooksPage(); // Render my books page on load
