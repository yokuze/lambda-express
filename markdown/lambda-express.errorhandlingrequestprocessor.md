[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [ErrorHandlingRequestProcessor](./lambda-express.errorhandlingrequestprocessor.md)

# ErrorHandlingRequestProcessor interface

When an error is thrown (or passed to the `next` callback) by any standard middleware or route handler, the error, request, and response are all passed to any error handling request processors for the application and route.

## Methods

|  Method | Returns | Description |
|  --- | --- | --- |
|  [`__call(err, req, resp, next)`](./lambda-express.errorhandlingrequestprocessor.__call.md) | `unknown` | See the documentation on `RequestProcessor` for details about the request, response, and especially the `next` callback. |

