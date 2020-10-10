// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}  

type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
  }

input BookInput {
    author: [String]
    title
    bookId
    image
    link
}

type Mutation {
    login(username: String!, password: String!): Auth
    addUsername(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: Int): User
}
`;

// export the typeDefs
module.exports = typeDefs;