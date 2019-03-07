[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [cacheForMinutes](./lambda-express.response.cacheforminutes.md)

# Response.cacheForMinutes method

Convenience wrapper for `resp.cacheForSeconds`<!-- -->. Same semantics, but allows for easier-to-read code by allowing the developer to express the number of minutes without having to do multiplication (or division when you read the code.)

**Signature:**
```javascript
cacheForMinutes(minutes: number): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `minutes` | `number` |  |

