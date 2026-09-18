import { useState, useEffect } from "react";
import Input from "./Input";

const Form = ({setPage, event, setEvent, events, setEvents}) => {

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
          <p>⁠♡  Itinerary Planner ⁠♡</p>
        </div>

        <div className="form-mid-container">
          <div className="form-main-container">
            <Input event={event} setEvent={setEvent} />
            <div className="btn-container">
              <button className="btn btn-clearEvent" onClick={clearEvent}>
                Clear
              </button>
              <button className="btn btn-addEvent" onClick={addEvent}>
                Add new Event
              </button>
            </div>
          </div>

          <button className="btn btn-downloadEvent" onClick={() => setPage("print")}>Download</button>
        </div>
      </div>
    </>
  );
};

export default Form;
