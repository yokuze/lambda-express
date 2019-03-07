[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [originalUrl](./lambda-express.request.originalurl.md)

# Request.originalUrl property

This property is much like `req.url`<!-- -->; however, it always retains the original URL from the event that triggered the request, allowing you to rewrite `req.url` freely for internal routing purposes. For example, the "mounting" feature of `app.use()` will rewrite `req.url` to strip the mount point:

`req.originalUrl` stays the same even when a route handler changes `req.url` for internal re-routing. See `req.url` for an example of internal re-routing.

**Signature:**
```javascript
originalUrl: string
```
