const libraryContainer = document.getElementById('library');
const books = JSON.parse(localStorage.getItem('myLibrary') || '[]');

// Loop through each book and add it to the page
books.forEach((book, index) => {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Status:</strong> ${book.status}</p>
        <a href="edit-book.html?index=${index}"><button class="edit-btn">Edit</button></a>
        <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    libraryContainer.appendChild(div);
});

// Event listener for delete functionality
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        const confirmDelete = confirm("Are you sure you want to delete this book?");

        if (confirmDelete) {
            const books = JSON.parse(localStorage.getItem('myLibrary') || '[]');
            books.splice(index, 1); // Remove book from array
            localStorage.setItem('myLibrary', JSON.stringify(books));
            location.reload(); // Refresh the page to update the display
        }
    }
});

