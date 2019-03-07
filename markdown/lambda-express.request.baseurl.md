[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [baseUrl](./lambda-express.request.baseurl.md)

# Request.baseUrl property

The URL path on which a router instance was mounted.

The `req.baseUrl` property is similar to the `mountpath` property of the app object, except `app.mountpath` returns the matched path pattern(s).

For example:

Even if you use a path pattern or a set of path patterns to load the router, the `baseUrl` property returns the matched string, not the pattern(s). In the following example, the greet router is loaded on two path patterns.

When a request is made to `/greet/jp`<!-- -->, `req.baseUrl` is `/greet`<!-- -->. When a request is made to `/hello/jp`<!-- -->, `req.baseUrl` is `/hello`<!-- -->.

**Signature:**
```javascript
baseUrl: string
```
