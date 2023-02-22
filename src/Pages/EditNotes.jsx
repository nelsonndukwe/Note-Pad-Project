import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useCreateDate from '../Components/useCreateDate'


const EditNotes = ({ notes, setMynotes }) => {

  const { id } = useParams();

  const note = notes.find((item) => item.id === id)

  console.log(note);

  const [title, setTitle] = useState(note.title)
  const [desc, setDesc] = useState(note.desc)
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSumitForm = (e) => {
    e.preventDefault();


    if (title && desc) {
      const newNote = { ...note, title, desc, date }

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote
        }
        return item;
      })
      setMynotes(newNotes);
    }

    // redirect to the home page aftee edit is saved

    navigate('/')
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note")) {
      const newNotes = notes.filter(item => item.id != id)

      setMynotes(newNotes)
      navigate("/")
    }
  }


  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><BsArrowReturnLeft /></Link>
        <button className="btn lg primary" onClick={handleSumitForm}>Save</button>
        <button className='btn danger' onClick={handleDelete}><AiOutlineDelete /></button>
      </header>
      <form className="create-note__form" onSubmit={handleSumitForm}>
        <input type='text' placeholder="Title" autoCorrect="on" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea rows='28' placeholder="Write a Note.." draggable="false" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </form>
    </section>
  )
}

export default EditNotes