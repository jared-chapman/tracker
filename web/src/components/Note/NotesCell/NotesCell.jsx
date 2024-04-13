import { Link, routes } from '@redwoodjs/router'

import Notes from 'src/components/Note/Notes'

export const QUERY = gql`
  query FindNotes {
    notes {
      id
      type
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No notes yet. '}
      <Link to={routes.newNote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ notes }) => {
  return <Notes notes={notes} />
}
