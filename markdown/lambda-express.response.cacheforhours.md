[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [cacheForHours](./lambda-express.response.cacheforhours.md)

# Response.cacheForHours method

Convenience wrapper for `resp.cacheForSeconds`<!-- -->. Same semantics, but allows for easier-to-read code by allowing the developer to express the number of hours without having to do multiplication (or division when you read the code.)

**Signature:**
```javascript
cacheForHours(hours: number): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `hours` | `number` |  |

