[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [links](./lambda-express.response.links.md)

# Response.links method

Joins the links provided as properties of the parameter to populate the response's `Link` HTTP header field.

For example, the following call:

Would result in this header:

Note that any subsequent call to `resp.links(...)` will \*overwrite\* the values that were already in the header.

**Signature:**
```javascript
links(links: StringMap): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `links` | `StringMap` |  |

