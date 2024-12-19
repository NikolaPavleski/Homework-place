let book = {
    title: 'The Shadow Over Innsmouth',
    author: 'H.P Lovecraft',
    readingStatus: false,
    readingQuestion: function() {
        if (this.readingStatus === false) {
            return console.log("You haven't read", `${this.title}`, "by", `${this.author}`);
        } else {
            return console.log("You have read", `${this.title}`, "by", `${this.author}`);
        }
    }
};
book.readingQuestion();
