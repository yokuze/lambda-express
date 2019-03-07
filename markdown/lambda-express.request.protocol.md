[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [protocol](./lambda-express.request.protocol.md)

# Request.protocol property

Contains the request protocol string: either `http` or (for TLS requests) `https` (always lowercase).

When the `trust proxy` setting does not evaluate to false, this property will use the value of the `X-Forwarded-Proto` header field if present. This header can be set by the client or by the proxy.

When the request comes from API Gateway, the protocol is `https` regardless of whether the proxy is set (the `X-Forwarded-Proto` header is not consulted) because API Gateway only supports HTTPS.

**Signature:**
```javascript
protocol: string | undefined
```
