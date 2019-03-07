[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [RequestProcessor](./lambda-express.requestprocessor.md) &gt; [\_\_call](./lambda-express.requestprocessor.__call.md)

# RequestProcessor.\_\_call method

For use by middleware and request handlers. Typically middleware will be declared as taking all three arguments (including the `next` callback function), whereas request handlers (for a given route) typically do not need the `next` callback function because they will call a method on the response that completes the request.

All functions passed to `use`<!-- -->, `get`<!-- -->, and other route-handling methods will be passed a `next` callback and \*MUST\* call the callback or a response-sending function (e.g. `send`<!-- -->, `body`<!-- -->, or `json`<!-- -->) on the response in order to complete the processing. Failure to either send a response or call `next` will result in a hung process.

**Signature:**
```javascript
(req: Request, resp: Response, next: NextCallback): unknown;
```
**Returns:** `unknown`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `req` | `Request` |  |
|  `resp` | `Response` |  |
|  `next` | `NextCallback` |  |

