import React, { useState, useEffect } from "react";
import keys from "../configs/keys";

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        initClient();
      };
      document.body.appendChild(script);
    };

    const initClient = () => {
      window.gapi.load("client", () => {
        window.gapi.client
          .init({
            apiKey: keys.googleCalendarAPIKey,
            clientId: keys.googleClientID,
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            ],
            scope: "https://www.googleapis.com/auth/calendar.readonly",
          })
          .then(() => {
            fetchEvents();
          })
          .catch((error) => {
            console.error("Error initializing client:", error);
          });
      });
    };

    const fetchEvents = () => {
      window.gapi.client.calendar.events
        .list({
          calendarId: "primary",
          timeMin: new Date().toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: "startTime",
        })
        .then((response) => {
          setEvents(response.result.items || []);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
    };

    loadGoogleAPI();
  }, []);

  return (
    <div>
      <h2>Google Calendar Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarComponent;
