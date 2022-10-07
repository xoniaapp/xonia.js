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

## Realtime Usage

```ts
import { account as a, message as m } from "xonia.js"

const getSession = async () => {
    return await a.get_token("email", "password")
}

(async () => {
    console.log("[LOG] Connected to Xonia API");
    
    const session_token: any = await getSession();
    const channel_id = "channelId";
    while (true) {
        const d = await m.get(channel_id, session_token);
        
        const text = d[0].text
        const user = d[0].user       

        if (text === "info") {
            await m.send(`${user.id}`, channel_id, session_token)
            console.info(`[LOGGER] User: ${user.id} | Message: ${text}`);
        }
        
        // Args are also supported (very buggy)
        if (text.startsWith("!info")) {
            if (text.split(" ")[1] === "version") {
                await m.send("v1", channel_id, session_token)   
            }
        }

        if (text === "ping") {
            await m.send(`i am alive!!!`, channel_id, session_token)
        }
    }
})()
```

## License

### [MIT](./LICENSE)
