[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [type](./lambda-express.response.type.md)

# Response.type method

Sets the `Content-Type` HTTP header to the MIME type as determined by \[mime.lookup()\](https://www.npmjs.com/package/mime) for the specified type. If type contains the `/` character, then it sets the `Content-Type` to the argument (without a lookup). For example:


**Signature:**
```javascript
type(type: string): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `type` | `string` |  |

