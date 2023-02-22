import React, { useEffect, useState } from 'react'
import { BsSearch, BsMoonStars } from "react-icons/bs"
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import { ImSun } from 'react-icons/im'
import Noteitem from '../Components/Noteitem'

const Notes = ({ notes }) => {
    const [showsearch, setShowSearch] = useState(false);
    const [text, setText] = useState("");
    const [filteredtext, setFilteredText] = useState(notes)

    const handleSerach = () => {
        setFilteredText(notes.filter(note => {
            if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
                return note;
            }

        }))
    }



    return (
        <section>
            <header className='notes__header'>
                {!showsearch && <h2>Note Pad</h2>}
                {showsearch && <input type="text" autoFocus value={text} placeholder='Keyword...' onChange={(e) => { setText(e.target.value); handleSerach(); }} />}
                <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{!showsearch ? <BsSearch /> : <AiOutlineClose />}</button>
            </header>

            <div className='notes__container'>
                {
                    filteredtext.map(note => <Noteitem key={notes.id} note={note} />)

                }

            </div>

            <Link to='/create-notes' className='btn add__btn'> <MdOutlinePlaylistAdd /> </Link>
        </section>
    )
}

export default Notes    
