[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Router](./lambda-express.router.md) &gt; [all](./lambda-express.router.all.md)

# Router.all method

Express-standard routing method for adding handlers that get invoked regardless of the request method (e.g. `OPTIONS`<!-- -->, `GET`<!-- -->, `POST`<!-- -->, etc) for a specific path (or set of paths).

**Signature:**
```javascript
all(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
```
**Returns:** `this`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `PathParams` |  |
|  `processors` | `ProcessorOrProcessors[]` |  |

