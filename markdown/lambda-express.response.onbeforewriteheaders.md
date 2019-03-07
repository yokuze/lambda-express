[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [onBeforeWriteHeaders](./lambda-express.response.onbeforewriteheaders.md)

# Response.onBeforeWriteHeaders method

Add a listener that will get called just before headers are written to the response. For example:


**Signature:**
```javascript
onBeforeWriteHeaders(cb: () => unknown): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `cb` | `() => unknown` |  |

