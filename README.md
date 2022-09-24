# xonia.js

⚠️ This library doesn't support websockets yet.

**Websockets will be implemented in the near future.** 

## API

### `account`
---

- #### `.get_token`

- @params: email - `string`
- @params: password - `string`

```ts
import { account } from "xonia.js";

(async() => {
   const data = await account.get_token("email", "password");
   console.log(data); 
})();

```

### `message`
---

- #### `.send`

- @params: text - `string`
- @params: channelId - `string`
- @params: token - `string`

```ts
import { message } from "xonia.js";

(async() => {
   const data = await message.send("text", "channelId", "token");
   console.log(data); 
})();

```

- #### `.get`

- @params: channelId - `string`
- @params: token - `string`

```ts
import { message } from "xonia.js";

(async() => {
   const data = await message.get("channelId", "token");
   console.log(data); 
})();

```

## License

### [MIT](./LICENSE)
