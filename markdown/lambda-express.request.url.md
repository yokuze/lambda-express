[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [url](./lambda-express.request.url.md)

# Request.url property

`req.url` is the same as `req.path` in most cases.

However, route handlers and other middleware may change the value of `req.url` to redirect the request to other registered middleware. For example:

In the example above, the `GET` request to `/admin/users/1337` is re-routed to the `/profile` handler in `router2`<!-- -->. Any other route handlers on `router1` that would have handled the `/users/1337` route are skiped. Also, notice that `req.url` keeps the value given to it by `router1`<!-- -->'s route handler, but `req.originalUrl` stays the same.

If the route handler or middleware that changes `req.url` adds a query string to `req.url`<!-- -->, the query string is retained on the `req.url` property but the query string keys and values are \*not\* parsed and `req.params` is \*not\* updated. This follows Express' apparent behavior when handling internal re-routing with URLs that contain query strings.

**Signature:**
```javascript
url: string
```
