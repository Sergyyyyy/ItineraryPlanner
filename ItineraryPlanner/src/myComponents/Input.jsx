const Input = () => {
  return (
    <>
        <label htmlFor="event-name" className="label event-name-label">EVENT NAME</label>
        <input type="text" name="event-name" id="event-name" className="input-label label-name"/>

        <label htmlFor="event-time" className="label event-time-label">EVENT TIME</label>
        <input type="text" name="event-time" id="event-time" className="input-label label-time"/>
    </>
  )
};

export default Input;
