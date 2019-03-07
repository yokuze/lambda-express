[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [ip](./lambda-express.request.ip.md)

# Request.ip property

When an IP address is supplied by the Lambda integration (e.g. API Gateway supplies `evt.requestContext.identity.sourceIp`<!-- -->), that value is used. Contains the remote IP address of the request.

Otherwise, when the `trust proxy` setting on the application is truthy, the value of this property is derived from the left-most entry in the `X-Forwarded-For` header. This header can be set by the client or by the proxy.

**Signature:**
```javascript
ip: string | undefined
```
