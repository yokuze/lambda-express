[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [get](./lambda-express.request.get.md)

# Request.get method

Returns the specified HTTP request header field (case-insensitive match). The Referrer and Referer fields are interchangeable.

If the request included multiple headers with the same name, this method will return to you the \_last\_ one sent in the request. This is what API Gateway does when accessing its `evt.headers` field. If you need \_all\_ of the values sent for a header with the same name, use `req.getMultiValueHeader(name)`<!-- -->.

**Signature:**
```javascript
get(headerName: string): string | undefined;
```
**Returns:** `string | undefined`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `headerName` | `string` |  |

