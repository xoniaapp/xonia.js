### xonia.js

---

1. First require the module
```js
const { getToken, sendMessage } = require("./src");
```

2. Getting account session key

```js
const bot = new getToken("joma@tech.com", "joma@tech.com");
```

3. Creating Messages

```js

const newMessage = sendMessage("Hello, World!", "1487076174428377088", "sessionToken");
```