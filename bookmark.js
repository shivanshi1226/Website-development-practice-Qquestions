// Function to render bookmark page
function renderBookmarkPage() {
    let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];
    let tableContent = `
        <h2>Bookmark</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Description</th>
                <th>Added Date</th>
                <th>Category</th>
            </tr>
    `;
    bookmarkList.forEach(book => {
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
renderBookmarkPage(); // Render bookmark page on load
