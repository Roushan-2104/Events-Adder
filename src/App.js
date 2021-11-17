import './App.css'
import {useState} from 'react';
import Title from './components/Title/Title'
import Modal from './components/Modal/Modal';
import EventList from './components/EventList';
import Form from './components/Form/Form';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])
  
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return[...prevEvents, events]
    })
  }

  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event) =>{
        return id !== event.id
      })
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      
      <Title title="Welcome to Mario's World !!" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={()=> setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={()=> setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList eventer={events} handleClick={handleClick}/>}

      {showModal && 
      <Modal handleClose={handleClose} isSalesModal={true}>
        <Form addEvent={addEvent} />
      </Modal>
      }

      <div>
        <button onClick= {() => setShowModal(true)}>
          Add New Events
        </button>
      </div>
    </div>
  );
}

export default App;
