### xonia.js

---

1. Getting account session key

```js
const { getToken } = require("xonia.js");
const bot = new getToken("joma@tech.com", "joma@tech.com");
```

2. Creating Messages

```js
const { sendMessage } = require("xonia.js");
sendMessage("message", "channelID", "sessionToken");
```
