// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Notes" titleTo="notes" buttonLabel="New Note" buttonTo="newNote">
        <Route path="/notes/new" page={NoteNewNotePage} name="newNote" />
        <Route path="/notes/{id}/edit" page={NoteEditNotePage} name="editNote" />
        <Route path="/notes/{id}" page={NoteNotePage} name="note" />
        <Route path="/notes" page={NoteNotesPage} name="notes" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
