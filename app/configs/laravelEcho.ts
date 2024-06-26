import Echo from "laravel-echo";
const Pusher = require("pusher-js");

const options = {
  broadcaster: "pusher",
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY || "",
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER || "",
  forceTLS: true,
};

export const echo = new Echo({
  ...options,
});
