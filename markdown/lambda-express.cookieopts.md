[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [CookieOpts](./lambda-express.cookieopts.md)

# CookieOpts interface

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`domain`](./lambda-express.cookieopts.domain.md) | `string` | Domain name for the cookie. By default, no domain is set, and most clients will consider the cookie to apply to only the current domain. |
|  [`encode`](./lambda-express.cookieopts.encode.md) | `(v: string) => string` | A synchronous function used for cookie value encoding. Defaults to \[encodeURIComponent\](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/encodeURIComponent). |
|  [`expires`](./lambda-express.cookieopts.expires.md) | `Date` | Expiry date of the cookie. If not provided, creates a session cookie. See notes on `maxAge`<!-- -->. |
|  [`httpOnly`](./lambda-express.cookieopts.httponly.md) | `boolean` | Flags the cookie to be accessible only by the web server. Defaults to `true`<!-- -->. |
|  [`maxAge`](./lambda-express.cookieopts.maxage.md) | `number` | Convenient option for setting the expiry time relative to the current time in milliseconds.<p/>By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application.<p/>Note that the \[cookie storage model specification\](https://tools.ietf.org/html/rfc6265\#section-5.3) states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients obey this, so if both are set, they should point to the same date and time. Thus, if you set both `maxAge` and `expires`<!-- -->, the `maxAge` value will be used to override your `expires` so that both values are guaranteed to be the same. |
|  [`path`](./lambda-express.cookieopts.path.md) | `string` | Path for the cookie. Defaults to `/`<!-- -->. |
|  [`sameSite`](./lambda-express.cookieopts.samesite.md) | `(boolean | 'lax' | 'strict' | undefined)` | Value of the `SameSite` `Set-Cookie` attribute. More information at https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00\#section-4.1.1. |
|  [`secure`](./lambda-express.cookieopts.secure.md) | `boolean` | Marks the cookie to be used with HTTPS only. |

