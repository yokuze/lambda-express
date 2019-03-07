[Home](./index) &gt; [@silvermine/lambda-express](./lambda-express.md) &gt; [Application](./lambda-express.application.md) &gt; [setSetting](./lambda-express.application.setsetting.md)

# Application.setSetting method

Assigns setting `name` to `value`<!-- -->. You may store any value that you want, but certain names can be used to configure the behavior of the server. These special names are listed in the app settings table.

Calling `app.setSetting('foo', true)` for a `Boolean` property is the same as calling `app.enable('foo')`<!-- -->. Similarly, calling `app.setSetting('foo', false)` for a `Boolean` property is the same as calling `app.disable('foo')`<!-- -->.

Retrieve the value of a setting with `app.getSetting()`<!-- -->.

\#\# App Settings Used By Lambda Express:

\* `trust proxy` (default `false`<!-- -->): Determines whether `X-Forwarded-*` headers are trusted or not. Be careful when enabling this setting because these headers are easily spoofed. \* `case sensitive routing` (default `false`<!-- -->): Determines whether routing is case-sensitive. When enabled, "/Foo" and "/foo" are different routes. When disabled, "/Foo" and "/foo" are treated the same. NOTE: Sub-apps (routers mounted by calling `addSubRouter`<!-- -->, or those created implicitly by calling `.route(path)`<!-- -->) will inherit the value of this setting.

**Signature:**
```javascript
setSetting(name: string, val: unknown): Application;
```
**Returns:** `Application`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `name` | `string` |  |
|  `val` | `unknown` |  |

