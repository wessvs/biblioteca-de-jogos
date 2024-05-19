import { useState } from "react"
import PropTypes from 'prop-types'
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
  
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({title, cover})
        setTitle("")
        setCover("") 
      }
    
    return (
        <form onSubmit={handleSubmit}>
            <TextInput id='title' value={title} setValue={setTitle} label="titulo" />
            <TextInput id='cover' value={cover} setValue={setCover} label="capa" />
            <button type="submit">Adicionar a biblioteca</button>
      </form>
    )
}