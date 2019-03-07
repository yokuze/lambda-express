[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [NextCallback](./lambda-express.nextcallback.md)

# NextCallback interface

## Methods

|  Method | Returns | Description |
|  --- | --- | --- |
|  [`__call(err)`](./lambda-express.nextcallback.__call.md) | `void` |  |

## Remarks

The function that is passed to request processors for them to signal that they are done performing their processing of the request. If an error occurred during the processing of the request, the processor should pass the error as the only argument to the callback.

Once the callback is called (with no error argument), control is handed over to the next request processor in the chain. On the other hand, if an error argument was passed to the callback, all other standard request processors will be skipped and control will be handed over to the first error-handling request processor in the chain.
