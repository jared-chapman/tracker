export const QUERY = gql`
  query CreaturesQuery {
    notes {
      id
      type
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ notes }) => {
  return (
    <ul>
      {notes.map((item) => {
        if (item.type === 'Creature') {
          return <li key={item.id}>
            {JSON.stringify(item)}
          </li>
        }
      })}
    </ul>
  )
}
