# Itinerary Planner

A simple and interactive itinerary planner built with React. Create multiple events, organize them by name and time, and export your itinerary as a styled PDF.

## Features

- Add multiple itinerary events
- Set an event name and time
- Dynamically add and manage event fields
- Clear the current event
- Display all added events in one itinerary
- Export the itinerary as a PDF
- Styled PDF output matching the application's visual theme
- Responsive interface for desktop and mobile devices

## Built With

- **React** - UI and component management
- **JavaScript** - Application logic and state handling
- **CSS** - Styling and responsive layout
- **jsPDF** - PDF generation
- **Vite** - Development environment and build tool

##📸 Preview

### Application

<!-- Add your application screenshot here -->

![Itinerary Planner Preview](./screenshots/preview.png)

### Generated PDF

<!-- Add your PDF screenshot here -->

![Generated Itinerary PDF](./screenshots/pdf-preview.png)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm

### Installation

- Run these commands

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
npm install jspdf
npm run dev
```

Open the local development URL provided by Vite in your browser.

## How It Works

1. Add an Event
- Enter the event name and time using the form.

2. Add Multiple Events
- Each submitted event is stored in the application's event list, allowing multiple activities to be added to the itinerary.

3. Review Your Itinerary
- All added events are displayed together so you can review your schedule before exporting it.

4. Export as PDF
- Click the Print button to generate a PDF version of your itinerary.


## Project Structure

src/
├── components/
│   ├── ...
├── App.jsx
├── main.jsx
└── ...

public/
└── ...

README.md
package.json

## Author

- Sergio (GitHub: @Sergyyyyy)