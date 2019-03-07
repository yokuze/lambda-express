[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [end](./lambda-express.response.end.md)

# Response.end method

Ends the response process by calling the Lambda callback with the response headers and body, if they have been supplied.

Use to quickly end the response without any data. If you need to respond with data, instead use methods such as `res.send()` and `res.json()`<!-- -->.

**Signature:**
```javascript
end(): Response;
```
**Returns:** `Response`

