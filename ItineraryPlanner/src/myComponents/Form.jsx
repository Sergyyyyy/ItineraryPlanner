import { useState, useEffect } from "react";
import Input from "./Input";

const Form = () => {
  const [event, setEvent] = useState({
    eventName: "",
    eventTime: "",
  });
  const [events, setEvents] = useState([]);

  const clearEvent = () => {
    setEvent({
      eventName: "",
      eventTime: "",
    });
  };

  const addEvent = () => {
    setEvents([...events, event]);

    clearEvent();
  };

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <>
      <div className="form-container">
        <div className="form-top-container">
          <p>⁠♡Itinerary Planner⁠♡</p>
        </div>

        <div className="form-mid-container">
          <div className="form-main-container">
            <Input event={event} setEvent={setEvent} />
            <div className="btn-container">
              <button className="btn btn-clearEvent" onClick={clearEvent}>
                Clear events -
              </button>
              <button className="btn btn-addEvent" onClick={addEvent}>
                Add new event +
              </button>
            </div>
          </div>

          <button className="btn btn-downloadEvent">Download</button>
        </div>
      </div>
    </>
  );
};

export default Form;
