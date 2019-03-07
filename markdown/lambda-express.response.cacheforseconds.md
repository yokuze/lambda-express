[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [cacheForSeconds](./lambda-express.response.cacheforseconds.md)

# Response.cacheForSeconds method

Sets the appropriate caching headers (`Expires`<!-- -->, `Cache-Control`<!-- -->, and `Pragma`<!-- -->) to cache content for a specific number of seconds. If zero or any negative number of seconds is passed in, the headers are set to disallow caching.

**Signature:**
```javascript
cacheForSeconds(seconds: number): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `seconds` | `number` |  |

