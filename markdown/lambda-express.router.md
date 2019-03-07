[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Router](./lambda-express.router.md)

# Router class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`routerOptions`](./lambda-express.router.routeroptions.md) |  | `RouterOptions` |  |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(options)`](./lambda-express.router.constructor.md) |  |  | Constructs a new instance of the [Router](./lambda-express.router.md) class |
|  [`addSubRouter(path, router)`](./lambda-express.router.addsubrouter.md) |  | `this` | Mounts a sub-router to this router. In Express, this is part of the overloaded `use` method, but we separated it out in Lambda Express to allow better type safety and code hinting / auto-completion. |
|  [`all(path, processors)`](./lambda-express.router.all.md) |  | `this` | Express-standard routing method for adding handlers that get invoked regardless of the request method (e.g. `OPTIONS`<!-- -->, `GET`<!-- -->, `POST`<!-- -->, etc) for a specific path (or set of paths). |
|  [`delete(path, processors)`](./lambda-express.router.delete.md) |  | `this` | Express-standard routing method for `DELETE` requests. |
|  [`get(path, processors)`](./lambda-express.router.get.md) |  | `this` | Express-standard routing method for `GET` requests. |
|  [`handle(originalErr, req, resp, done)`](./lambda-express.router.handle.md) |  | `void` |  |
|  [`head(path, processors)`](./lambda-express.router.head.md) |  | `this` | Express-standard routing method for `HEAD` requests. |
|  [`mount(method, path, processors)`](./lambda-express.router.mount.md) |  | `this` | Mounts middleware, error handlers, or route handlers to a specific HTTP method and route. Not included in standard Express, this is specific to Lambda Express.<p/>Note that this method creates a route-chain of all the handlers passed to it so that they are treated as a single handler. That allows any of the handlers passed to this method to call `next('route')` to skip to the next route handler (or route handler chain) for this route. |
|  [`options(path, processors)`](./lambda-express.router.options.md) |  | `this` | Express-standard routing method for `OPTIONS` requests. |
|  [`patch(path, processors)`](./lambda-express.router.patch.md) |  | `this` | Express-standard routing method for `PATCH` requests. |
|  [`post(path, processors)`](./lambda-express.router.post.md) |  | `this` | Express-standard routing method for `POST` requests. |
|  [`put(path, processors)`](./lambda-express.router.put.md) |  | `this` | Express-standard routing method for `PUT` requests. |
|  [`use(processors)`](./lambda-express.router.use.md) |  | `this` | Express-standard routing method for adding middleware and handlers that get invoked for all routes handled by this router. |

