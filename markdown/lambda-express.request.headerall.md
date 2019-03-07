[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [headerAll](./lambda-express.request.headerall.md)

# Request.headerAll method

Uses the same logic as `req.get(name)`<!-- -->, but returns to you an array containing \_all\_ of the values sent for the header with `headerName`<!-- -->. If you only need one value, use `req.get(name)` instead.

**Signature:**
```javascript
headerAll(headerName: string): string[] | undefined;
```
**Returns:** `string[] | undefined`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `headerName` | `string` |  |

