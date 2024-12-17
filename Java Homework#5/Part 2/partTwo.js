let book = {
    title: 'The Shadow Over Innsmouth',
    author: 'H.P Lovecraft',
    readingStatus: false,
    readingQuestion: function() {
        if (this.readingStatus === false) {
            return console.log("You haven't read the book yet!");
        } else {
            return console.log("You have read the book.");
        }
    }
};
book.readingQuestion();
