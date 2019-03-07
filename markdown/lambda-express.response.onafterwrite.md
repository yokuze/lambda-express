[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [onAfterWrite](./lambda-express.response.onafterwrite.md)

# Response.onAfterWrite method

Add a listener that will get called after the response is written, as part of a cleanup phase of request handling. See the example in `res.onBeforeWriteHeaders()`<!-- -->.

**Signature:**
```javascript
onAfterWrite(cb: () => unknown): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `cb` | `() => unknown` |  |

