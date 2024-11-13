var BookGenre;
(function (BookGenre) {
    BookGenre["FICTION"] = "FICTION";
    BookGenre["NON_FICTION"] = "NON_FICTION";
    BookGenre["MYSTERY"] = "MYSTERY";
    BookGenre["SCIENCE_FICTION"] = "SCIENCE_FICTION";
    BookGenre["BIOGRAPHY"] = "BIOGRAPHY";
    BookGenre["FANTASY"] = "FANTASY";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole["ORGANIZER"] = "ORGANIZER";
    MemberRole["MODERATOR"] = "MODERATOR";
    MemberRole["MEMBER"] = "MEMBER";
    MemberRole["GUEST"] = "GUEST";
})(MemberRole || (MemberRole = {}));
var books = [
    { title: "Book 1", author: "Aditya", genre: BookGenre.FICTION },
    { title: "Book 2", author: "Archit", genre: BookGenre.NON_FICTION },
    { title: "Book 3", author: "Aviral", genre: BookGenre.MYSTERY },
    { title: "Book 4", author: "Rijesh", genre: BookGenre.SCIENCE_FICTION },
    { title: "Book 5", author: "Samir", genre: BookGenre.BIOGRAPHY },
];
var members = [
    { name: "Akarsh", role: MemberRole.ORGANIZER },
    { name: "Deep", role: MemberRole.MODERATOR },
    { name: "Swathi", role: MemberRole.MEMBER },
    { name: "Vishal", role: MemberRole.GUEST },
];
function getBooksByGenre(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
function getMembersByRole(members, role) {
    return members.filter(function (member) { return member.role === role; });
}
function countBooksByGenre(books) {
    var _a;
    var count = (_a = {},
        _a[BookGenre.FICTION] = 0,
        _a[BookGenre.NON_FICTION] = 0,
        _a[BookGenre.MYSTERY] = 0,
        _a[BookGenre.SCIENCE_FICTION] = 0,
        _a[BookGenre.BIOGRAPHY] = 0,
        _a[BookGenre.FANTASY] = 0,
        _a);
    books.forEach(function (book) {
        count[book.genre] = (count[book.genre] || 0) + 1;
    });
    return count;
}
console.log("NON_FICTION Books : ", getBooksByGenre(books, BookGenre.NON_FICTION));
console.log("FICTION Books : ", getBooksByGenre(books, BookGenre.FICTION));
console.log("MYSTERY Books : ", getBooksByGenre(books, BookGenre.MYSTERY));
console.log("SCIENCE_FICTION Books : ", getBooksByGenre(books, BookGenre.SCIENCE_FICTION));
console.log(" ");
console.log("Member with ORGANIZER Role:", getMembersByRole(members, MemberRole.ORGANIZER));
console.log("Member with MODERATOR Role:", getMembersByRole(members, MemberRole.MODERATOR));
console.log("Member with MEMBER Role:", getMembersByRole(members, MemberRole.MEMBER));
console.log("Member with GUEST Role:", getMembersByRole(members, MemberRole.GUEST));
console.log(" ");
console.log("Genre Counts:", countBooksByGenre(books));
