[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [IRouter](./lambda-express.irouter.md) &gt; [handle](./lambda-express.irouter.handle.md)

# IRouter.handle method

Handles a request, optionally starting it with an error (for use when this router is not the first request processor to have handled the request, and a previous one already generated an error).

**Signature:**
```javascript
handle(err: unknown, req: Request, resp: Response, done: NextCallback): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `err` | `unknown` |  |
|  `req` | `Request` |  |
|  `resp` | `Response` |  |
|  `done` | `NextCallback` |  |

