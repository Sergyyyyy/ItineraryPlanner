const Print = ({ setPage, events }) => {
  return (
    <>
      <div className="form-container">
        <div className="form-top-container">
          <p>⁠♡ Current Event List ⁠♡</p>
        </div>
        <div className="event-list-container">
          {events.map((event, index) => {
            return (
              <p className="event-list-item">
                <b>{index + 1}</b>. {event.eventName} - {event.eventTime}
              </p>
            );
          })}
        </div>
        <button onClick={() => setPage("form")} className="btn btn-backEvent">
          Back
        </button>
      </div>
    </>
  );
};

export default Print;
