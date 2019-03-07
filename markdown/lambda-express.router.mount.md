[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Router](./lambda-express.router.md) &gt; [mount](./lambda-express.router.mount.md)

# Router.mount method

Mounts middleware, error handlers, or route handlers to a specific HTTP method and route. Not included in standard Express, this is specific to Lambda Express.

Note that this method creates a route-chain of all the handlers passed to it so that they are treated as a single handler. That allows any of the handlers passed to this method to call `next('route')` to skip to the next route handler (or route handler chain) for this route.

**Signature:**
```javascript
mount(method: string | undefined, path: PathParams, ...processors: ProcessorOrProcessors[]): this;
```
**Returns:** `this`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `method` | `string | undefined` |  |
|  `path` | `PathParams` |  |
|  `processors` | `ProcessorOrProcessors[]` |  |

