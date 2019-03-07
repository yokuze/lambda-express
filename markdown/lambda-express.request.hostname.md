[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [hostname](./lambda-express.request.hostname.md)

# Request.hostname property

Contains the hostname derived from the `Host` HTTP header.

When the `trust proxy` app setting is truthy, this property will instead have the value of the `X-Forwarded-Host` header field. This header can be set by the client or by the proxy.

**Signature:**
```javascript
hostname: string | undefined
```
