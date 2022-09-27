# xonia.js

⚠️ This library doesn't support websockets yet.

**Websockets will be implemented in the near future.** 

## Usage

```ts
import { account } from "xonia.js";

// Get the account token
(async() => {
   const data = await account.get_token("email", "password");
   console.log(data); 
})();
```

## License

### [MIT](./LICENSE)
