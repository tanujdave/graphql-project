import { books } from "../data/books";
import { authors } from "../data/authors";
import { reviews } from "../data/reviews";

export const resolvers = {
  Query: {
    ping() {
      return "pong";
    },
    books() {
      return books;
    },
    authors() {
      return authors;
    },
    reviews() {
      return reviews;
    },
  },
  Book: {
    author: ({ author }) => {
      return authors.find((ath) => {
        return ath.id == author;
      });
    },
    reviews: (parent) => {
      return reviews.filter((review) => {
        return review.book === parent.id;
      });
    },
  },
  Author: {
    books: (parent) => {
      return books.filter((book) => {
        return book.author == parent.id;
      });
    },
  },
  Review: {
    book: (parent) => {
      return books.find((book) => {
        return book.id === parent.book;
      });
    },
  },
};
