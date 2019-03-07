[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [IRouter](./lambda-express.irouter.md) &gt; [mount](./lambda-express.irouter.mount.md)

# IRouter.mount method

Add request processors to all requests for the given (HTTP) method on the given path.

**Signature:**
```javascript
mount(method: string, path: PathParams, ...handlers: ProcessorOrProcessors[]): this;
```
**Returns:** `this`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `method` | `string` |  |
|  `path` | `PathParams` |  |
|  `handlers` | `ProcessorOrProcessors[]` |  |

