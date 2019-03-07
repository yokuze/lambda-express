[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [CookieOpts](./lambda-express.cookieopts.md) &gt; [maxAge](./lambda-express.cookieopts.maxage.md)

# CookieOpts.maxAge property

Convenient option for setting the expiry time relative to the current time in milliseconds.

By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application.

Note that the \[cookie storage model specification\](https://tools.ietf.org/html/rfc6265\#section-5.3) states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients obey this, so if both are set, they should point to the same date and time. Thus, if you set both `maxAge` and `expires`<!-- -->, the `maxAge` value will be used to override your `expires` so that both values are guaranteed to be the same.

**Signature:**
```javascript
maxAge: number
```
