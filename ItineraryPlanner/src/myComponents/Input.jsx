const Input = ({ event, setEvent }) => {
  return (
    <>
      <div className="input-container">
        <div className="input-item">
          <label htmlFor="event-name" className="label event-name-label">
            EVENT NAME
          </label>

          <input
            type="text"
            name="event-name"
            id="event-name"
            className="input-label label-name"
            value={event.eventName}
            onChange={(e) => setEvent({...event, eventName: e.target.value})}
          />
        </div>

        <div className="input-item">
          <label htmlFor="event-time" className="label event-time-label">
            EVENT TIME
          </label>

          <input
            type="text"
            name="event-time"
            id="event-time"
            className="input-label label-time"
            value={event.eventTime}
            onChange={(e) => setEvent({...event, eventTime: e.target.value})}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
