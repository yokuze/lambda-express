[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [getHeaders](./lambda-express.response.getheaders.md)

# Response.getHeaders method

Get the response headers in their current state. Modifications to the object returned by this method will not be reflected in the response headers - you must use the response methods (e.g. `res.set(k, v)`<!-- -->) to manipulate response headers.

**Signature:**
```javascript
getHeaders(): StringArrayOfStringsMap;
```
**Returns:** `StringArrayOfStringsMap`

