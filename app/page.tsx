import Pusher from "pusher-js";
import { useEffect, useState } from "react";

const PUSHER_KEY: string = process.env.PUSHER_APP_KEY ?? "";
const PUSHER_CLUSTER: string = process.env.PUSHER_APP_CLUSTER;
const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_KEY, {
      cluster: PUSHER_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe("notifications");

    channel.bind("App\\Events\\NewNotification", (data: any) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        data.message,
      ]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
