import jsPDF from "jspdf";

const Print = ({ setPage, events, setEvents }) => {
  const clearEvents = () => {
    setEvents([]);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Colors
    const darkPurple = [24, 5, 19];
    const pink = [255, 0, 230];
    const white = [255, 255, 255];
    const darkPink = [182, 47, 139];

    // Background
    doc.setFillColor(...darkPurple);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Title
    doc.setTextColor(...pink);
    doc.setFontSize(24);
    doc.setFont("helvetica", "italic");

    doc.text("Current Event List", pageWidth / 2, 25, {
      align: "center",
    });

    // Pink underline
    doc.setDrawColor(...pink);
    doc.setLineWidth(2);
    doc.line(45, 30, pageWidth - 45, 30);

    // Card shadow
    doc.setFillColor(...darkPink);
    doc.roundedRect(17, 42, 176, 125, 6, 6, "F");

    // White card
    doc.setFillColor(...white);
    doc.roundedRect(15, 40, 176, 125, 6, 6, "F");

    // Event text
    doc.setTextColor(...pink);
    doc.setFontSize(14);
    doc.setFont("helvetica", "italic");

    events.forEach((event, index) => {
      const y = 55 + index * 20;

      doc.text(
        `${index + 1}. ${event.eventName} - ${event.eventTime}`,
        pageWidth / 2,
        y,
        {
          align: "center",
        },
      );
    });

    // Save
    doc.save("itinerary.pdf");
  };

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
          <button onClick={clearEvents} className="btn btn-clearEvent">
            Clear Events
          </button>
          <button onClick={() => setPage("form")} className="btn btn-backEvent">
            Back
          </button>
          <button onClick={downloadPDF} className="btn btn-downloadEvent">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Print;

// added class for files: last change
