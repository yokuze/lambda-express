[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [send](./lambda-express.response.send.md)

# Response.send method

Sends the HTTP response.

The body parameter can be a `Buffer` object, a `string`<!-- -->, an `object`<!-- -->, or an `array`<!-- -->.

Unlike Express, this method will not set the `Content-Length` header because API Gateway and Application Load Balancer already handle that when they get the response from the Lambda function (because the function must return the entire response and can not stream a response back, there's no situation where APIGW/ALB can't compute the length before they send the headers).

TODO: evaluate whether we should do the other "useful tasks" that Express does, e.g. \[it\] "provides automatic HEAD and HTTP cache freshness support". See https://expressjs.com/en/api.html\#res.send

When the parameter is a `Buffer` object, the method sets the Content-Type response header field to `application/octet-stream`<!-- -->, unless previously set.

When the parameter is a `string`<!-- -->, the method sets the Content-Type to `text/html` (unless the type has already been set).

When the parameter is an `array` or `object`<!-- -->, Express responds with the JSON representation. (See `res.json`<!-- -->)

Calling this method ends (sends) the response, after which headers can not be changed and more data can not be sent.

**Signature:**
```javascript
send(body: (Buffer | string | object | [])): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `body` | `(Buffer | string | object | [])` |  |

