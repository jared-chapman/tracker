export const schema = gql`
  type Note {
    id: String!
    type: String!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    notes: [Note!]! @requireAuth
    note(id: String!): Note @requireAuth
  }

  input CreateNoteInput {
    type: String!
    title: String!
    body: String!
  }

  input UpdateNoteInput {
    type: String
    title: String
    body: String
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note! @requireAuth
    updateNote(id: String!, input: UpdateNoteInput!): Note! @requireAuth
    deleteNote(id: String!): Note! @requireAuth
  }
`
