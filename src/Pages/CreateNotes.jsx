import { Link, useNavigate } from "react-router-dom"
import { BsArrowReturnLeft } from 'react-icons/bs'
import { useState } from "react"
import { v4 as uuid } from "uuid"
import useCreateDate from "../Components/useCreateDate"

const CreateNotes = ({ setMynotes }) => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && desc) {

      const note = { id: uuid(), title, desc, date }

      // add this note to the Notes array 

      setMynotes(prevNotes => [note, ...prevNotes])

      // Navigate back to home after addig new note

      navigate("/")
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><BsArrowReturnLeft /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>

      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type='text' placeholder="Title" autoCorrect="on" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea rows='28' placeholder="Write a Note.." draggable="false" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </form>
    </section>
  )
}

export default CreateNotes