[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [params](./lambda-express.request.params.md)

# Request.params property

This property is an object containing properties mapped to the named route "parameters". For example, if you have the route `/user/:name`<!-- -->, then the "name" property is available as `req.params.name`<!-- -->. This object defaults to `{}`<!-- -->.

When you use a regular expression for the route definition, capture groups are provided in the array using `req.params[n]`<!-- -->, where `n` is the nth capture group. This rule is applied to unnamed wild card matches with string routes such as `/file/*`<!-- -->:

Middleware and route handlers are not able to change param values.

NOTE: Lambda Express automatically decodes the values in `req.params` (using `decodeURIComponent`<!-- -->).

**Signature:**
```javascript
params: Readonly<StringMap>
```
