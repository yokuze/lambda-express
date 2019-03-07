[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [RouterOptions](./lambda-express.routeroptions.md) &gt; [caseSensitive](./lambda-express.routeroptions.casesensitive.md)

# RouterOptions.caseSensitive property

If URL pattern matching should be case-sensitive, set this to `true`<!-- -->. By default it is false, meaning that `/Foo` and `/foo` are the same, so if either of those requests came in, they would match to a route that you defined for `/foo`<!-- -->. With case-sensitivity enabled, only the second request would match that route.

**Signature:**
```javascript
caseSensitive: boolean
```
