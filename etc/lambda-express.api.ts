// @public (undocumented)
class Application extends Router {
  disable(name: string): Application;
  enable(name: string): Application;
  getSetting(name: string): unknown;
  isEnabled(name: string): boolean;
  // WARNING: The type "RequestEvent" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "HandlerContext" needs to be exported by the package (e.g. added to index.ts)
  run(evt: RequestEvent, context: HandlerContext, cb: Callback): void;
  setSetting(name: string, val: unknown): Application;
}

// @public (undocumented)
class Request {
  // WARNING: The type "RequestEvent" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "HandlerContext" needs to be exported by the package (e.g. added to index.ts)
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
  // WARNING: The type "HandlerContext" needs to be exported by the package (e.g. added to index.ts)
  readonly context: HandlerContext;
  // WARNING: The type "StringUnknownMap" needs to be exported by the package (e.g. added to index.ts)
  readonly cookies: StringUnknownMap;
  // WARNING: The type "LambdaEventSourceType" needs to be exported by the package (e.g. added to index.ts)
  readonly eventSourceType: LambdaEventSourceType;
  get(headerName: string): string | undefined;
  header(headerName: string): string | undefined;
  headerAll(headerName: string): string[] | undefined;
  readonly hostname: string | undefined;
  readonly ip: string | undefined;
  isALB(): boolean;
  // (undocumented)
  isAPIGW(): boolean;
  // WARNING: The type "ILogger" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  readonly log: ILogger;
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  makeSubRequest(baseURL: string, params?: StringMap): Request;
  readonly method: string;
  readonly originalUrl: string;
  // WARNING: The type "StringMap" needs to be exported by the package (e.g. added to index.ts)
  readonly params: Readonly<StringMap>;
  readonly path: string;
  readonly protocol: string | undefined;
  // WARNING: The type "KeyValueStringObject" needs to be exported by the package (e.g. added to index.ts)
  readonly query: KeyValueStringObject;
  // WARNING: The type "RequestEventRequestContext" needs to be exported by the package (e.g. added to index.ts)
  readonly requestContext: RequestEventRequestContext;
  readonly secure: boolean;
  // WARNING: The type "LambdaEventSourceType" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  static readonly SOURCE_ALB: LambdaEventSourceType;
  // WARNING: The type "LambdaEventSourceType" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  static readonly SOURCE_APIGW: LambdaEventSourceType;
  url: string;
  readonly xhr: boolean;
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
  // WARNING: The type "CookieOpts" needs to be exported by the package (e.g. added to index.ts)
  clearCookie(name: string, userOpts?: CookieOpts): Response;
  // WARNING: The type "CookieOpts" needs to be exported by the package (e.g. added to index.ts)
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
class Router implements IRouter {
  // WARNING: The type "RouterOptions" needs to be exported by the package (e.g. added to index.ts)
  constructor(options?: RouterOptions);
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  addSubRouter(path: PathParams, router: Router): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  all(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  delete(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  get(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "NextCallback" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  handle(originalErr: unknown, req: Request, resp: Response, done: NextCallback): void;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  head(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  mount(method: string | undefined, path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  options(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  patch(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  post(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "PathParams" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  put(path: PathParams, ...processors: ProcessorOrProcessors[]): this;
  // WARNING: The type "RouterOptions" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  readonly routerOptions: RouterOptions;
  // WARNING: The type "ProcessorOrProcessors" needs to be exported by the package (e.g. added to index.ts)
  use(...processors: ProcessorOrProcessors[]): this;
}

// (No @packagedocumentation comment for this package)
