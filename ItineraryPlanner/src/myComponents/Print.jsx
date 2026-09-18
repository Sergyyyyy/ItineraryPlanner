import jsPDF from 'jspdf'

const clearEvents = () => {
  setEvents([]);
}

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.text("My Itinerary", 20, 20);

  events.forEach((event, index) => {
    doc.text(
      `${event.eventName} - ${event.eventTime}`,
      20,
      40 + index * 10
    );
  });

  doc.save("itinerary.pdf");
};

const Print = ({ setPage, events, setEvents }) => {
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
        <div className="btn-container">
          <button onClick={clearEvents}>Clear Events</button>
          <button onClick={() => setPage("form")} className="btn btn-backEvent">
            Back
          </button>
          <button onClick={downloadPDF}>Download</button>
        </div>
      </div>
    </>
  );
};

export default Print;
