import { notes, note, createNote, updateNote, deleteNote } from './notes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('notes', () => {
  scenario('returns all notes', async (scenario) => {
    const result = await notes()

    expect(result.length).toEqual(Object.keys(scenario.note).length)
  })

  scenario('returns a single note', async (scenario) => {
    const result = await note({ id: scenario.note.one.id })

    expect(result).toEqual(scenario.note.one)
  })

  scenario('creates a note', async () => {
    const result = await createNote({
      input: { type: 'String', title: 'String', body: 'String' },
    })

    expect(result.type).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a note', async (scenario) => {
    const original = await note({ id: scenario.note.one.id })
    const result = await updateNote({
      id: original.id,
      input: { type: 'String2' },
    })

    expect(result.type).toEqual('String2')
  })

  scenario('deletes a note', async (scenario) => {
    const original = await deleteNote({ id: scenario.note.one.id })
    const result = await note({ id: original.id })

    expect(result).toEqual(null)
  })
})
