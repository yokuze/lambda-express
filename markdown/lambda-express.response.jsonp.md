[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [jsonp](./lambda-express.response.jsonp.md)

# Response.jsonp method

Sends a JSON response with JSONP support. This method is identical to `res.json()`<!-- -->, except that it opts-in to JSONP callback support.

The JSONP function name that will be invoked should be sent in the query string of the request. The query string parameter, by default, is simply `callback` (e.g. `/some-url?callback=myFunction`<!-- -->). To override the name of the query string parameter, set the application setting named `jsonp callback name`<!-- -->. For example, `app.setSetting('jsonp callback name', 'cb')` would support URLs like `/some-url?cb=myFunction`<!-- -->.

Calling this method ends (sends) the response, after which headers can not be changed and more data can not be sent.

**Signature:**
```javascript
jsonp(o: unknown): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `o` | `unknown` |  |

