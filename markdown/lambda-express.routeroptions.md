[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [RouterOptions](./lambda-express.routeroptions.md)

# RouterOptions interface

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`caseSensitive`](./lambda-express.routeroptions.casesensitive.md) | `boolean` | If URL pattern matching should be case-sensitive, set this to `true`<!-- -->. By default it is false, meaning that `/Foo` and `/foo` are the same, so if either of those requests came in, they would match to a route that you defined for `/foo`<!-- -->. With case-sensitivity enabled, only the second request would match that route. |

