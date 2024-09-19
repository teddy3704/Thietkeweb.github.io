document.getElementById("sellForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;

    const bookList = document.getElementById("books");
    const listItem = document.createElement("li");
    listItem.textContent = `${title} - ${author} - Giá: ${price} VNĐ`;
    bookList.appendChild(listItem);

    this.reset(); // Reset form fields
});
