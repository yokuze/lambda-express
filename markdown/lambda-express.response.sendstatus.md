[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [sendStatus](./lambda-express.response.sendstatus.md)

# Response.sendStatus method

Sets the response HTTP status code to statusCode and send its string representation as the response body.

If an unsupported status code is specified, the HTTP status is still set to `statusCode` and the string version of the code is sent as the response body. For example:

Calling this method ends (sends) the response, after which headers can not be changed and more data can not be sent.

**Signature:**
```javascript
sendStatus(code: number): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `code` | `number` |  |

