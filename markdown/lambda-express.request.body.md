[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [body](./lambda-express.request.body.md)

# Request.body property

The body of the request. If the body is an empty value (e.g. `''`<!-- -->), `req.body` will be `null` to make body-exists checks (e.g. `if (req.body)`<!-- -->) simpler.

Middleware can be plugged in to support body parsing, e.g. JSON and multi-part form bodies.

**Signature:**
```javascript
body: unknown
```
