// @public (undocumented)
interface APIGatewayEventRequestContext extends OrigAPIGatewayEventRequestContext {
}

// @public (undocumented)
interface APIGatewayRequestEvent extends APIGatewayProxyEvent {
}

// @public (undocumented)
class Application extends Router {
  disable(name: string): Application;
  enable(name: string): Application;
  getSetting(name: string): unknown;
  isEnabled(name: string): boolean;
  run(evt: RequestEvent, context: HandlerContext, cb: Callback): void;
  setSetting(name: string, val: unknown): Application;
}

// @public (undocumented)
interface ApplicationLoadBalancerEventRequestContext {
  // (undocumented)
  elb: {
    targetGroupArn: string;
  }
}

// @public (undocumented)
interface ApplicationLoadBalancerRequestEvent {
  // (undocumented)
  body: string | null;
  // (undocumented)
  headers?: StringMap;
  // (undocumented)
  httpMethod: string;
  // (undocumented)
  isBase64Encoded: boolean;
  // (undocumented)
  multiValueHeaders?: StringArrayOfStringsMap;
  // (undocumented)
  multiValueQueryStringParameters?: StringArrayOfStringsMap;
  // (undocumented)
  path: string;
  // (undocumented)
  queryStringParameters?: StringMap;
  // (undocumented)
  requestContext: ApplicationLoadBalancerEventRequestContext;
}

// @public (undocumented)
interface CookieOpts {
  domain?: string;
  encode?: (v: string) => string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: (boolean | 'lax' | 'strict' | undefined);
  secure?: boolean;
}

// @public
interface ErrorHandlingRequestProcessor {
  (err: unknown, req: Request, resp: Response, next: NextCallback): unknown;
}

// @public
interface HandlerContext extends Context {
}

// @public (undocumented)
interface IRouter {
  all: RouteMatchingProcessorAppender<this>;
  delete: RouteMatchingProcessorAppender<this>;
  get: RouteMatchingProcessorAppender<this>;
  handle(err: unknown, req: Request, resp: Response, done: NextCallback): void;
  head: RouteMatchingProcessorAppender<this>;
  mount(method: string, path: PathParams, ...handlers: ProcessorOrProcessors[]): this;
  options: RouteMatchingProcessorAppender<this>;
  patch: RouteMatchingProcessorAppender<this>;
  post: RouteMatchingProcessorAppender<this>;
  put: RouteMatchingProcessorAppender<this>;
  // (undocumented)
  readonly routerOptions: RouterOptions;
  use(...handlers: ProcessorOrProcessors[]): this;
}

// @public (undocumented)
interface NextCallback {
  // (undocumented)
  (err?: unknown): void;
}

// WARNING: SOURCE_ALB has incomplete type information
// WARNING: SOURCE_APIGW has incomplete type information
// @public (undocumented)
class Request {
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  constructor(app: Application, eventOrRequest: RequestEvent | Request, context: HandlerContext, baseURL?: string, params?: StringMap);
  // (undocumented)
  protected _parentRequest?: Request;
  // (undocumented)
  protected _path: string;
  // (undocumented)
  protected _url: string;
  readonly app: Application;
  readonly baseUrl: string;
  body?: unknown;
  readonly context: HandlerContext;
  // WARNING: The type "StringUnknownMap" needs to be exported by the package (e.g. added to index.ts)
  readonly cookies: StringUnknownMap;
  readonly eventSourceType: ('ALB' | 'APIGW');
  get(headerName: string): string | undefined;
  header(headerName: string): string | undefined;
  headerAll(headerName: string): string[] | undefined;
  readonly hostname: string | undefined;
  readonly ip: string | undefined;
  // (undocumented)
  isALB(): boolean;
  // (undocumented)
  isAPIGW(): boolean;
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  makeSubRequest(baseURL: string, params?: StringMap): Request;
  readonly method: string;
  readonly originalUrl: string;
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  readonly params: Readonly<StringMap>;
  readonly path: string;
  readonly protocol: string | undefined;
  // WARNING: The type "KeyValueStringObject" needs to be exported by the package (e.g. added to index.ts)
  readonly query: KeyValueStringObject;
  readonly requestContext: RequestEventRequestContext;
  readonly secure: boolean;
  url: string;
  readonly xhr: boolean;
}

// @public (undocumented)
interface RequestProcessor {
  (req: Request, resp: Response, next: NextCallback): unknown;
}

// @public (undocumented)
class Response {
  constructor(app: Application, req: Request, cb: Callback);
  // (undocumented)
  readonly app: Application;
  append(key: string, values: (string | string[])): Response;
  cacheForHours(hours: number): Response;
  cacheForMinutes(minutes: number): Response;
  cacheForSeconds(seconds: number): Response;
  clearCookie(name: string, userOpts?: CookieOpts): Response;
  cookie(name: string, userVal: unknown, userOpts?: CookieOpts): Response;
  delete(headerName: string): Response;
  end(): Response;
  // WARNING: The type "StringArrayOfStringsMap" needs to be exported by the package (e.g. added to index.ts)
  getHeaders(): StringArrayOfStringsMap;
  getStatus: {
    code: number;
    message: string;
  }
  hasHeader(name: string): boolean;
  // (undocumented)
  headersSent: boolean;
  // (undocumented)
  isALB(): boolean;
  // (undocumented)
  isAPIGW(): boolean;
  json(o: unknown): Response;
  jsonp(o: unknown): Response;
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  links(links: StringMap): Response;
  location(path: string): Response;
  onAfterWrite(cb: () => unknown): Response;
  onBeforeWriteHeaders(cb: () => unknown): Response;
  redirect(code: number, path: string): Response;
  send(body: (Buffer | string | object | [])): Response;
  sendStatus(code: number): Response;
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  set(headers: StringMap): Response;
  status(code: number): Response;
  type(type: string): Response;
}

// @public (undocumented)
interface ResponseResult extends APIGatewayProxyResult {
  // (undocumented)
  multiValueHeaders: StringArrayOfStringsMap;
  // (undocumented)
  statusDescription?: string;
}

// @public (undocumented)
interface RouteMatchingProcessorAppender<T> {
  // (undocumented)
  (path: PathParams, ...handlers: ProcessorOrProcessors[]): T;
}

// @public (undocumented)
class Router implements IRouter {
  constructor(options?: RouterOptions);
  addSubRouter(path: PathParams, router: Router): this;
  all(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  delete(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  get(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // (undocumented)
  handle(originalErr: unknown, req: Request, resp: Response, done: NextCallback): void;
  head(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  mount(method: string | undefined, path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  options(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  patch(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  post(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  put(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // (undocumented)
  readonly routerOptions: RouterOptions;
  use(...processors: ProcessorOrProcessors[]): this;
}

// @public (undocumented)
interface RouterOptions {
  caseSensitive: boolean;
}

// WARNING: Unsupported export: RequestEvent
// WARNING: Unsupported export: RequestEventRequestContext
// WARNING: Unsupported export: AnyRequestProcessor
// WARNING: Unsupported export: ProcessorOrProcessors
// WARNING: Unsupported export: PathParams
// (No @packagedocumentation comment for this package)
