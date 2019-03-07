[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [cookies](./lambda-express.request.cookies.md)

# Request.cookies property

Contains cookies sent by the request (key/value pairs). If the request contains no cookies, it defaults to `{}`<!-- -->.

Cookie values are generally strings, but can also be JSON objects. See `Response.cookie` for more details.

**Signature:**
```javascript
cookies: StringUnknownMap
```
