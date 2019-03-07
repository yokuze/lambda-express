[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [path](./lambda-express.request.path.md)

# Request.path property

Contains the path part of the request URL.

When referenced from middleware, the mount point is not included in `req.path`<!-- -->. See `req.originalUrl` for more details.

When any middleware changes the value of `req.url` for internal re-routing, `req.path` is updated also. See `req.url` for an example of internal re-routing.

**Signature:**
```javascript
path: string
```
