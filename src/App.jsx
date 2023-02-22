import React, {useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Notes from './Pages/Notes'
import CreateNotes from './Pages/CreateNotes'
import EditNotes from './Pages/EditNotes'
import dummynotes from './DummyNotes'


function App() {
  const [notes, setMynotes] = useState(JSON.parse(localStorage.getItem("notes"))|| []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  

  return (
    <div id='app'>
      <Routes>
        <Route path='/' element={<Notes 
          notes = {notes}
        />} />
        <Route path='/create-notes' element={<CreateNotes 
          setMynotes={setMynotes}
        />} />
        <Route path='/edit-notes/:id' element={<EditNotes 
          notes = {notes}
          setMynotes={setMynotes}
        />} />
      </Routes>

      
    </div>
  )
}

export default App
