### xonia.js

---

1. First require the module
```js Common JS
const { getToken } = require("xonia.js");
```
ES6
```js
import { getToken } from "xonia.js";
```

2. Getting account session key

```js
const bot = new getToken("joma@tech.com", "joma@tech.com");
```

3. Creating Messages

```js
const token = require("./config.js");
const bot = new sendMessage({
    SESSION_ID: `${token}`,
    content:"hi mom",
    attachment: "./path/to/file.png"
})
```