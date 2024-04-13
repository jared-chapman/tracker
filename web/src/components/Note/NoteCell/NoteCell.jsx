import Note from 'src/components/Note/Note'

export const QUERY = gql`
  query FindNoteById($id: String!) {
    note: note(id: $id) {
      id
      type
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Note not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ note }) => {
  return <Note note={note} />
}
