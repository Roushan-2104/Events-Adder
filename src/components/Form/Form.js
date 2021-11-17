import './Form.css'
import {useState, useRef} from 'react'

export default function Form({addEvent}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    // const title = useRef()
    // const date = useRef()

    const resetForm = () => {
        setTitle("")
        setDate("")
        // title.current.value = ""
        // date.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title,date)
        const event = {
            title:title,
            date:date,
            id: Math.floor(Math.random()*10000)
        }
        addEvent(event)
        console.log(event)
        resetForm()
    } 

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span> Event Title: </span>
                <input 
                    type = "text" 
                    // ref={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                />
            </label>
            <label>
                <span> Event Date: </span>
                <input 
                    type = "date" 
                    // ref={date}
                    onChange={(e) => setDate(e.target.value)} 
                    value={date} 
                />
            </label>
            <button>Submit</button>
        </form>
    )
}
