"use client";

import { useEffect, useState } from "react";
import { echo } from "./configs/laravelEcho";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    echo.channel("notifications").listen("UserRegistration", (e) => {
      setNotifications((prev) => [...prev, ...e]);
    });
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <p> </p>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
