[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [RequestProcessor](./lambda-express.requestprocessor.md)

# RequestProcessor interface

## Methods

|  Method | Returns | Description |
|  --- | --- | --- |
|  [`__call(req, resp, next)`](./lambda-express.requestprocessor.__call.md) | `unknown` | For use by middleware and request handlers. Typically middleware will be declared as taking all three arguments (including the `next` callback function), whereas request handlers (for a given route) typically do not need the `next` callback function because they will call a method on the response that completes the request.<p/>All functions passed to `use`<!-- -->, `get`<!-- -->, and other route-handling methods will be passed a `next` callback and \*MUST\* call the callback or a response-sending function (e.g. `send`<!-- -->, `body`<!-- -->, or `json`<!-- -->) on the response in order to complete the processing. Failure to either send a response or call `next` will result in a hung process. |

## Remarks

A function used to process each request (or each request for the route the processor is added to). Request processors generally fall into one of two categories:

1. Middleware: where common functionality that needs to be used across multiple routes or has nothing to do with the business logic of a given route lives. 2. Route handlers: where the business logic for a given route lives.
