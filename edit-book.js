// Get the book index from the URL
const urlParams = new URLSearchParams(window.location.search);
const bookIndex = urlParams.get('index'); // Get the book index from the URL query string

if (bookIndex !== null) {
  // Retrieve the books from localStorage
  const books = JSON.parse(localStorage.getItem('myLibrary') || '[]');
  const book = books[bookIndex]; // Get the book object by index

  // Populate the form fields with the current book data
  document.getElementById('editTitle').value = book.title;
  document.getElementById('editAuthor').value = book.author;
  document.querySelector(`input[name="readingStatus"][value="${book.status}"]`).checked = true;

  // Delete book functionality
  document.getElementById('deleteButton').addEventListener('click', function() {
    const confirmDelete = confirm('Are you sure you want to delete this book?');
    if (confirmDelete) {
      // Remove the book from the array
      books.splice(bookIndex, 1);
      // Update the localStorage with the updated books array
      localStorage.setItem('myLibrary', JSON.stringify(books));
      alert('Book deleted!');
      window.location.href = 'library.html'; // Redirect to library page
    }
  });

  // Save the edited book
  document.getElementById('editBookForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    // Get the updated book data from the form
    const updatedBook = {
      title: document.getElementById('editTitle').value,
      author: document.getElementById('editAuthor').value,
      status: document.querySelector('input[name="readingStatus"]:checked').value,
    };

    // Update the book in the array
    books[bookIndex] = updatedBook;
    // Save the updated books array back to localStorage
    localStorage.setItem('myLibrary', JSON.stringify(books));
    
    alert('Book updated!');
    window.location.href = 'library.html'; // Redirect to library page after update
  });
} else {
  // If no book index is found, alert the user and redirect them
  alert('No book selected for editing.');
  window.location.href = 'library.html'; // Redirect to library page if no book is selected
}
