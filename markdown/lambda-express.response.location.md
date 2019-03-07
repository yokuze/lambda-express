[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [location](./lambda-express.response.location.md)

# Response.location method

Sets the response `Location` HTTP header to the specified `path` parameter.

A path value of `back` has a special meaning; it refers to the URL specified in the `Referer` header of the request. If the `Referer` header was not specified, the location will be set to `/`<!-- -->.

The URL set in the `Location` header will automatically be URL-encoded for you. For example:


**Signature:**
```javascript
location(path: string): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `string` |  |

