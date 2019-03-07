[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [getStatus](./lambda-express.response.getstatus.md)

# Response.getStatus method

Get the current response status code and message (e.g. "200 OK"). Modifications to the object returned by this method will not be reflected in the response itself - you must use the response methods (e.g. `res.status(n)`<!-- -->) to manipulate response status.

**Signature:**
```javascript
getStatus:
```
**Returns:** `{
        code: number;
        message: string;
    }`

