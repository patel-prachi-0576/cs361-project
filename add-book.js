document.getElementById('bookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const readingStatus = document.querySelector('input[name="readingStatus"]:checked');
    const book = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      status: readingStatus.value

    };
  
    const books = JSON.parse(localStorage.getItem('myLibrary') || '[]');
    books.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(books));
  
    alert('Book added!');
    this.reset();
  });