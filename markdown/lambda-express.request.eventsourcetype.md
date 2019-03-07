[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Request](./lambda-express.request.md) &gt; [eventSourceType](./lambda-express.request.eventsourcetype.md)

# Request.eventSourceType property

Flag for determining which type of event source caused this request (Application Load Balancer, `ALB`<!-- -->, or API Gateway, `APIGW`<!-- -->). See `Request.SOURCE_ALB` and `Request.SOURCE_APIGW`<!-- -->.

**Signature:**
```javascript
eventSourceType: ('ALB' | 'APIGW')
```
