console.log('hello bhaio aur bhaio');
class book {
    constructor(bookName, author, typeOfBook) {
        this.nameOfBook = bookName;
        this.author = author;
        this.typeOfBook = typeOfBook;

    }
}

class Display {

    validate(Book) {
        if (Book.nameOfBook.length < 2 || Book.author < 2) {
            return false;

        }
        else {
            return true;
        }
    }

    add(Book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let addedHtml = `<tr>   
                    <td>${Book.nameOfBook}</td>
                    <td>${Book.author}</td>
                    <td>${Book.typeOfBook}</td>
                </tr>
        `
        tableBody.innerHTML+=addedHtml;
    }
        clear(){
            let libraryForm = document.getElementById('library');
            libraryForm.reset();

        }
    show(type,displayMessage){
        let message = document.getElementById('msg');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }

        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;

    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);

    }

}

let libraryForm = document.getElementById('library');
libraryForm.addEventListener('submit', function (e) {
    let name = document.getElementById('BookName').value;
    let authorOfBook = document.getElementById('author').value;
    let type;

    let comicType = document.getElementById('comicbook');
    let thrillerType = document.getElementById('thriller');
    let healthType = document.getElementById('health');

    if (comicType.checked) {
        type = comicType.value;
    }
    else if (thrillerType.checked) {
        type = thrillerType.value;
    }
    else if (healthType.checked) {
        type = healthType.value;
    }

    let Book = new book(name, authorOfBook, type);
    console.log(Book);
    e.preventDefault();

    let display = new Display();

    if (display.validate(Book)) {
        display.add(Book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {

        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();

})