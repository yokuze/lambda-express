[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [cookie](./lambda-express.response.cookie.md)

# Response.cookie method

Sets cookie `name` to `value`<!-- -->, optionally with the specified cookie options. See `CookieOpts`<!-- -->.

Generally cookie values are strings, but you can also supply a JS object, which will be stringified with `JSON.stringify(userVal)` and prefixed with `j:`<!-- -->. This matches what Express does with response cookies and what their cookie parser middleware does with incoming (request) cookie headers.

 https://github.com/expressjs/cookie-parser/blob/1dc306b0ebe86ab98521811cc090740b4bef48e7/index.js\#L84-L86  https://github.com/expressjs/express/blob/dc538f6e810bd462c98ee7e6aae24c64d4b1da93/lib/response.js\#L836-L838

TODO: how does a user see the documentation for `CookieOpts`<!-- -->?

**Signature:**
```javascript
cookie(name: string, userVal: unknown, userOpts?: CookieOpts): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `name` | `string` |  |
|  `userVal` | `unknown` |  |
|  `userOpts` | `CookieOpts` |  |

