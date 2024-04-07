# Integration of Pusher via Next JS for Push Notification

## Install Pusher

```bash
npm install pusher-js
```

## Install Laravel Echo to Listen to Laravel Channels and Events

```bash
npm install laravel-echo
```

## Declare all the Pusher credentials on your .env file

.env.local

```env
 NEXT_PUBLIC_PUSHER_APP_ID=*********
 NEXT_PUBLIC_PUSHER_APP_KEY=*********
 NEXT_PUBLIC_PUSHER_APP_SECRET=*********
 NEXT_PUBLIC_PUSHER_APP_CLUSTER=*********
```

## create a config file for laravel-echo

<i> configs/laravelEcho.ts</i>

```javascript
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
```

## set your listeners

```js
echo.channel("notifications").listen("UserRegistration", (e) => {
  //do whatever you wanna do
});
```
