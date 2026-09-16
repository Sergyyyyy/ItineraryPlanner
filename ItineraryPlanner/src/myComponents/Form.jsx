import Input from "./Input";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-top-container">
          <p>⁠♡Itinerary Planner⁠♡</p>
        </div>

        <div className="form-mid-container">
          <div className="form-main-container">
            <Input />
            <div className="btn-container">
              <button className="btn btn-clearEvent">Clear events -</button>
              <button className="btn btn-addEvent">Add new event +</button>
            </div>
          </div>

          <button className="btn btn-downloadEvent">Download</button>
        </div>
      </div>
    </>
  );
};

export default Form;
