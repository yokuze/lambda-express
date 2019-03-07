[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [IRouter](./lambda-express.irouter.md)

# IRouter interface

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`all`](./lambda-express.irouter.all.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all requests on the given path - regardless of request method. |
|  [`delete`](./lambda-express.irouter.delete.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `DELETE` requests on the given path. |
|  [`get`](./lambda-express.irouter.get.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `GET` requests on the given path. |
|  [`head`](./lambda-express.irouter.head.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `HEAD` requests on the given path. |
|  [`options`](./lambda-express.irouter.options.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `OPTIONS` requests on the given path. |
|  [`patch`](./lambda-express.irouter.patch.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `PATCH` requests on the given path. |
|  [`post`](./lambda-express.irouter.post.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `POST` requests on the given path. |
|  [`put`](./lambda-express.irouter.put.md) | `RouteMatchingProcessorAppender<this>` | Add request processors to all `PUT` requests on the given path. |
|  [`routerOptions`](./lambda-express.irouter.routeroptions.md) | `RouterOptions` |  |

## Methods

|  Method | Returns | Description |
|  --- | --- | --- |
|  [`handle(err, req, resp, done)`](./lambda-express.irouter.handle.md) | `void` | Handles a request, optionally starting it with an error (for use when this router is not the first request processor to have handled the request, and a previous one already generated an error). |
|  [`mount(method, path, handlers)`](./lambda-express.irouter.mount.md) | `this` | Add request processors to all requests for the given (HTTP) method on the given path. |
|  [`use(handlers)`](./lambda-express.irouter.use.md) | `this` | Add request processors to all routes handled by this router - regardless of path or method. |

