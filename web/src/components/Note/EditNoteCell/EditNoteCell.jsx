import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NoteForm from 'src/components/Note/NoteForm'

export const QUERY = gql`
  query EditNoteById($id: String!) {
    note: note(id: $id) {
      id
      type
      title
      body
      createdAt
    }
  }
`

const UPDATE_NOTE_MUTATION = gql`
  mutation UpdateNoteMutation($id: String!, $input: UpdateNoteInput!) {
    updateNote(id: $id, input: $input) {
      id
      type
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ note }) => {
  const [updateNote, { loading, error }] = useMutation(UPDATE_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Note updated')
      navigate(routes.notes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNote({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Note {note?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <NoteForm note={note} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
