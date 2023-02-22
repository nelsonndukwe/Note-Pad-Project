import React from 'react'
import { Link } from 'react-router-dom'

const Noteitem = ({ note }) => {
    return (
        <Link to={`/edit-notes/${note.id}`} className='note'> 
            <h4>{note.title.length > 50 ? (note.title.substr(0, 50) + "..."): note.title }</h4>
            <h5>{note.desc.length > 80 ? (note.desc.substr(0, 80) + "...") : note.desc}</h5>
            <p>{note.date}</p>

        </Link>
    )
}

export default Noteitem