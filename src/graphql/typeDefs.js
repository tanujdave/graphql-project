export const typeDefs = `
    type Query {
        ping: String!
        books: [Book!]!
        authors: [Author!]!
        reviews: [Review!]!
    }

    type Book {
        id: ID!
        title: String!
        author: Author!

    }

    type Author {
        id: ID!
        name: String!
        books: [Book!]!
    }

    type Review {
        id: ID!
        text: String!
        book: Book!
    }
`;
