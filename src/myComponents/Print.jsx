import jsPDF from "jspdf";

const Print = ({ setPage, events, setEvents }) => {
  const clearEvents = () => {
    setEvents([]);
  };

  const downloadPDF = async () => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

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

    // Underline
    doc.setDrawColor(...pink);
    doc.setLineWidth(2);
    doc.line(45, 30, pageWidth - 45, 30);

    // Dynamic card height
    const cardHeight = events.length * 20 + 30;

    // Shadow
    doc.setFillColor(...darkPink);
    doc.roundedRect(17, 42, 176, cardHeight, 6, 6, "F");

    // White card
    doc.setFillColor(...white);
    doc.roundedRect(15, 40, 176, cardHeight, 6, 6, "F");

    // Events
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

    const pdfBlob = doc.output("blob");

    // Mobile
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      const pdfURL = URL.createObjectURL(pdfBlob);
      window.open(pdfURL, "_blank");

      setTimeout(() => {
        URL.revokeObjectURL(pdfURL);
      }, 10000);
    }

    // PC
    else {
      doc.save("itinerary.pdf");
    }
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
