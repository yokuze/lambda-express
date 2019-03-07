[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Router](./lambda-express.router.md) &gt; [addSubRouter](./lambda-express.router.addsubrouter.md)

# Router.addSubRouter method

Mounts a sub-router to this router. In Express, this is part of the overloaded `use` method, but we separated it out in Lambda Express to allow better type safety and code hinting / auto-completion.

**Signature:**
```javascript
addSubRouter(path: PathParams, router: Router): this;
```
**Returns:** `this`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `PathParams` |  |
|  `router` | `Router` |  |

