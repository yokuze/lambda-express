[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [redirect](./lambda-express.response.redirect.md)

# Response.redirect method

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an \[HTTP status code\](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

If `code` not specified, status defaults to `302 "Found"`<!-- -->. Other most common option is `301`<!-- -->, which is the code for "Moved Permanently".

The `path` is passed to `res.location()`<!-- -->, so the same notes about the functionality of the path (e.g. special value `back`<!-- -->) apply to this function.

Calling this method ends (sends) the response, after which headers can not be changed and more data can not be sent.

**Signature:**
```javascript
redirect(code: number, path: string): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `code` | `number` |  |
|  `path` | `string` |  |

