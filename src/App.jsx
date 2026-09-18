import Input from "./myComponents/Input";
import Form from "./myComponents/Form";
import Print from "./myComponents/Print";
import { useState } from "react";

function App() {
  const [page, setPage] = useState('form');
  const [event, setEvent] = useState({
    eventName: "",
    eventTime: "",
  });
  const [events, setEvents] = useState([]);

  return (
    <>
      <div className="app-container">
        {page === 'form' && <Form setPage={setPage} event={event} setEvent={setEvent} events={events} setEvents={setEvents}/>}
        {page === 'print' && <Print setPage={setPage} events={events} setEvents={setEvents}/>}
      </div>
    </>
  );
}

export default App;
