[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Response](./lambda-express.response.md) &gt; [json](./lambda-express.response.json.md)

# Response.json method

Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using \[JSON.stringify()\](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/JSON/stringify).

The parameter can be any JSON type, including `object`<!-- -->, `array`<!-- -->, `string`<!-- -->, `Boolean`<!-- -->, `number`<!-- -->, or `null`<!-- -->.

Calling this method ends (sends) the response, after which headers can not be changed and more data can not be sent.

**Signature:**
```javascript
json(o: unknown): Response;
```
**Returns:** `Response`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `o` | `unknown` |  |

