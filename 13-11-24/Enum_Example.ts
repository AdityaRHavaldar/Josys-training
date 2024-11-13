enum BookGenre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  MYSTERY = "MYSTERY",
  SCIENCE_FICTION = "SCIENCE_FICTION",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY",
}

enum MemberRole {
  ORGANIZER = "ORGANIZER",
  MODERATOR = "MODERATOR",
  MEMBER = "MEMBER",
  GUEST = "GUEST",
}

const books: { title: string; author: string; genre: BookGenre }[] = [
  { title: "Book 1", author: "Aditya", genre: BookGenre.FICTION },
  { title: "Book 2", author: "Archit", genre: BookGenre.NON_FICTION },
  { title: "Book 3", author: "Aviral", genre: BookGenre.MYSTERY },
  { title: "Book 4", author: "Rijesh", genre: BookGenre.SCIENCE_FICTION },
  { title: "Book 5", author: "Samir", genre: BookGenre.BIOGRAPHY },
];

const members: { name: string; role: MemberRole }[] = [
  { name: "Akarsh", role: MemberRole.ORGANIZER },
  { name: "Deep", role: MemberRole.MODERATOR },
  { name: "Swathi", role: MemberRole.MEMBER },
  { name: "Vishal", role: MemberRole.GUEST },
];

function getBooksByGenre(
  books: { title: string; author: string; genre: BookGenre }[],
  genre: BookGenre
): { title: string; author: string; genre: BookGenre }[] {
  return books.filter((book) => book.genre === genre);
}

function getMembersByRole(
  members: { name: string; role: MemberRole }[],
  role: MemberRole
): { name: string; role: MemberRole }[] {
  return members.filter((member) => member.role === role);
}

function countBooksByGenre(
  books: { title: string; author: string; genre: BookGenre }[]
): { [genre in BookGenre]: number } {
  const count: { [genre in BookGenre]: number } = {
    [BookGenre.FICTION]: 0,
    [BookGenre.NON_FICTION]: 0,
    [BookGenre.MYSTERY]: 0,
    [BookGenre.SCIENCE_FICTION]: 0,
    [BookGenre.BIOGRAPHY]: 0,
    [BookGenre.FANTASY]: 0,
  };
  books.forEach((book) => {
    count[book.genre] = (count[book.genre] || 0) + 1;
  });
  return count;
}

console.log(
  "NON_FICTION Books : ",
  getBooksByGenre(books, BookGenre.NON_FICTION)
);
console.log("FICTION Books : ", getBooksByGenre(books, BookGenre.FICTION));
console.log("MYSTERY Books : ", getBooksByGenre(books, BookGenre.MYSTERY));
console.log(
  "SCIENCE_FICTION Books : ",
  getBooksByGenre(books, BookGenre.SCIENCE_FICTION)
);
console.log(" ");

console.log(
  "Member with ORGANIZER Role:",
  getMembersByRole(members, MemberRole.ORGANIZER)
);
console.log(
  "Member with MODERATOR Role:",
  getMembersByRole(members, MemberRole.MODERATOR)
);
console.log(
  "Member with MEMBER Role:",
  getMembersByRole(members, MemberRole.MEMBER)
);
console.log(
  "Member with GUEST Role:",
  getMembersByRole(members, MemberRole.GUEST)
);

console.log(" ");
console.log("Genre Counts:", countBooksByGenre(books));
