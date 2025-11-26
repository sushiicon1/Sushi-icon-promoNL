
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FavoriteProduct
 * 
 */
export type FavoriteProduct = $Result.DefaultSelection<Prisma.$FavoriteProductPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderLineItem
 * 
 */
export type OrderLineItem = $Result.DefaultSelection<Prisma.$OrderLineItemPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model MessageSubscription
 * 
 */
export type MessageSubscription = $Result.DefaultSelection<Prisma.$MessageSubscriptionPayload>
/**
 * Model BroadcastMessage
 * 
 */
export type BroadcastMessage = $Result.DefaultSelection<Prisma.$BroadcastMessagePayload>
/**
 * Model MessageDelivery
 * 
 */
export type MessageDelivery = $Result.DefaultSelection<Prisma.$MessageDeliveryPayload>
/**
 * Model OwnerLoginSession
 * 
 */
export type OwnerLoginSession = $Result.DefaultSelection<Prisma.$OwnerLoginSessionPayload>
/**
 * Model FormDraft
 * 
 */
export type FormDraft = $Result.DefaultSelection<Prisma.$FormDraftPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeliveryStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]

}

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FavoriteProducts
 * const favoriteProducts = await prisma.favoriteProduct.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FavoriteProducts
   * const favoriteProducts = await prisma.favoriteProduct.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.favoriteProduct`: Exposes CRUD operations for the **FavoriteProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteProducts
    * const favoriteProducts = await prisma.favoriteProduct.findMany()
    * ```
    */
  get favoriteProduct(): Prisma.FavoriteProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderLineItem`: Exposes CRUD operations for the **OrderLineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderLineItems
    * const orderLineItems = await prisma.orderLineItem.findMany()
    * ```
    */
  get orderLineItem(): Prisma.OrderLineItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageSubscription`: Exposes CRUD operations for the **MessageSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageSubscriptions
    * const messageSubscriptions = await prisma.messageSubscription.findMany()
    * ```
    */
  get messageSubscription(): Prisma.MessageSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcastMessage`: Exposes CRUD operations for the **BroadcastMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BroadcastMessages
    * const broadcastMessages = await prisma.broadcastMessage.findMany()
    * ```
    */
  get broadcastMessage(): Prisma.BroadcastMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageDelivery`: Exposes CRUD operations for the **MessageDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageDeliveries
    * const messageDeliveries = await prisma.messageDelivery.findMany()
    * ```
    */
  get messageDelivery(): Prisma.MessageDeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ownerLoginSession`: Exposes CRUD operations for the **OwnerLoginSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnerLoginSessions
    * const ownerLoginSessions = await prisma.ownerLoginSession.findMany()
    * ```
    */
  get ownerLoginSession(): Prisma.OwnerLoginSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formDraft`: Exposes CRUD operations for the **FormDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormDrafts
    * const formDrafts = await prisma.formDraft.findMany()
    * ```
    */
  get formDraft(): Prisma.FormDraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FavoriteProduct: 'FavoriteProduct',
    Product: 'Product',
    Customer: 'Customer',
    Order: 'Order',
    OrderLineItem: 'OrderLineItem',
    Owner: 'Owner',
    MessageSubscription: 'MessageSubscription',
    BroadcastMessage: 'BroadcastMessage',
    MessageDelivery: 'MessageDelivery',
    OwnerLoginSession: 'OwnerLoginSession',
    FormDraft: 'FormDraft',
    ProductCategory: 'ProductCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "favoriteProduct" | "product" | "customer" | "order" | "orderLineItem" | "owner" | "messageSubscription" | "broadcastMessage" | "messageDelivery" | "ownerLoginSession" | "formDraft" | "productCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FavoriteProduct: {
        payload: Prisma.$FavoriteProductPayload<ExtArgs>
        fields: Prisma.FavoriteProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>
          }
          findFirst: {
            args: Prisma.FavoriteProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>
          }
          findMany: {
            args: Prisma.FavoriteProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>[]
          }
          create: {
            args: Prisma.FavoriteProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>
          }
          createMany: {
            args: Prisma.FavoriteProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>[]
          }
          delete: {
            args: Prisma.FavoriteProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>
          }
          update: {
            args: Prisma.FavoriteProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteProductPayload>
          }
          aggregate: {
            args: Prisma.FavoriteProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteProduct>
          }
          groupBy: {
            args: Prisma.FavoriteProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteProductCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteProductCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderLineItem: {
        payload: Prisma.$OrderLineItemPayload<ExtArgs>
        fields: Prisma.OrderLineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderLineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderLineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>
          }
          findFirst: {
            args: Prisma.OrderLineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderLineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>
          }
          findMany: {
            args: Prisma.OrderLineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>[]
          }
          create: {
            args: Prisma.OrderLineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>
          }
          createMany: {
            args: Prisma.OrderLineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderLineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>[]
          }
          delete: {
            args: Prisma.OrderLineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>
          }
          update: {
            args: Prisma.OrderLineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderLineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderLineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderLineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderLineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLineItemPayload>
          }
          aggregate: {
            args: Prisma.OrderLineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderLineItem>
          }
          groupBy: {
            args: Prisma.OrderLineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderLineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderLineItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderLineItemCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      MessageSubscription: {
        payload: Prisma.$MessageSubscriptionPayload<ExtArgs>
        fields: Prisma.MessageSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.MessageSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          findMany: {
            args: Prisma.MessageSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>[]
          }
          create: {
            args: Prisma.MessageSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          createMany: {
            args: Prisma.MessageSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.MessageSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          update: {
            args: Prisma.MessageSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.MessageSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.MessageSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.MessageSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageSubscription>
          }
          groupBy: {
            args: Prisma.MessageSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<MessageSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      BroadcastMessage: {
        payload: Prisma.$BroadcastMessagePayload<ExtArgs>
        fields: Prisma.BroadcastMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BroadcastMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BroadcastMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          findFirst: {
            args: Prisma.BroadcastMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BroadcastMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          findMany: {
            args: Prisma.BroadcastMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          create: {
            args: Prisma.BroadcastMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          createMany: {
            args: Prisma.BroadcastMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BroadcastMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          delete: {
            args: Prisma.BroadcastMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          update: {
            args: Prisma.BroadcastMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          deleteMany: {
            args: Prisma.BroadcastMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BroadcastMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BroadcastMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          upsert: {
            args: Prisma.BroadcastMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          aggregate: {
            args: Prisma.BroadcastMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcastMessage>
          }
          groupBy: {
            args: Prisma.BroadcastMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BroadcastMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BroadcastMessageCountArgs<ExtArgs>
            result: $Utils.Optional<BroadcastMessageCountAggregateOutputType> | number
          }
        }
      }
      MessageDelivery: {
        payload: Prisma.$MessageDeliveryPayload<ExtArgs>
        fields: Prisma.MessageDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          findFirst: {
            args: Prisma.MessageDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          findMany: {
            args: Prisma.MessageDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>[]
          }
          create: {
            args: Prisma.MessageDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          createMany: {
            args: Prisma.MessageDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>[]
          }
          delete: {
            args: Prisma.MessageDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          update: {
            args: Prisma.MessageDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.MessageDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.MessageDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          aggregate: {
            args: Prisma.MessageDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageDelivery>
          }
          groupBy: {
            args: Prisma.MessageDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<MessageDeliveryCountAggregateOutputType> | number
          }
        }
      }
      OwnerLoginSession: {
        payload: Prisma.$OwnerLoginSessionPayload<ExtArgs>
        fields: Prisma.OwnerLoginSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerLoginSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerLoginSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          findFirst: {
            args: Prisma.OwnerLoginSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerLoginSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          findMany: {
            args: Prisma.OwnerLoginSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>[]
          }
          create: {
            args: Prisma.OwnerLoginSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          createMany: {
            args: Prisma.OwnerLoginSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerLoginSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>[]
          }
          delete: {
            args: Prisma.OwnerLoginSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          update: {
            args: Prisma.OwnerLoginSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          deleteMany: {
            args: Prisma.OwnerLoginSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerLoginSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerLoginSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>[]
          }
          upsert: {
            args: Prisma.OwnerLoginSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          aggregate: {
            args: Prisma.OwnerLoginSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnerLoginSession>
          }
          groupBy: {
            args: Prisma.OwnerLoginSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerLoginSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerLoginSessionCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerLoginSessionCountAggregateOutputType> | number
          }
        }
      }
      FormDraft: {
        payload: Prisma.$FormDraftPayload<ExtArgs>
        fields: Prisma.FormDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          findFirst: {
            args: Prisma.FormDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          findMany: {
            args: Prisma.FormDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>[]
          }
          create: {
            args: Prisma.FormDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          createMany: {
            args: Prisma.FormDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>[]
          }
          delete: {
            args: Prisma.FormDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          update: {
            args: Prisma.FormDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          deleteMany: {
            args: Prisma.FormDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormDraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>[]
          }
          upsert: {
            args: Prisma.FormDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          aggregate: {
            args: Prisma.FormDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormDraft>
          }
          groupBy: {
            args: Prisma.FormDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormDraftCountArgs<ExtArgs>
            result: $Utils.Optional<FormDraftCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    favoriteProduct?: FavoriteProductOmit
    product?: ProductOmit
    customer?: CustomerOmit
    order?: OrderOmit
    orderLineItem?: OrderLineItemOmit
    owner?: OwnerOmit
    messageSubscription?: MessageSubscriptionOmit
    broadcastMessage?: BroadcastMessageOmit
    messageDelivery?: MessageDeliveryOmit
    ownerLoginSession?: OwnerLoginSessionOmit
    formDraft?: FormDraftOmit
    productCategory?: ProductCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    favoritedBy: number
    OrderLineItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritedBy?: boolean | ProductCountOutputTypeCountFavoritedByArgs
    OrderLineItem?: boolean | ProductCountOutputTypeCountOrderLineItemArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderLineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderLineItemWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    favorites: number
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | CustomerCountOutputTypeCountFavoritesArgs
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteProductWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderLineItemWhereInput
  }


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    loginSessions: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginSessions?: boolean | OwnerCountOutputTypeCountLoginSessionsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountLoginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerLoginSessionWhereInput
  }


  /**
   * Count Type MessageSubscriptionCountOutputType
   */

  export type MessageSubscriptionCountOutputType = {
    deliveries: number
  }

  export type MessageSubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | MessageSubscriptionCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * MessageSubscriptionCountOutputType without action
   */
  export type MessageSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscriptionCountOutputType
     */
    select?: MessageSubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageSubscriptionCountOutputType without action
   */
  export type MessageSubscriptionCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageDeliveryWhereInput
  }


  /**
   * Count Type BroadcastMessageCountOutputType
   */

  export type BroadcastMessageCountOutputType = {
    deliveries: number
  }

  export type BroadcastMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | BroadcastMessageCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * BroadcastMessageCountOutputType without action
   */
  export type BroadcastMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessageCountOutputType
     */
    select?: BroadcastMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BroadcastMessageCountOutputType without action
   */
  export type BroadcastMessageCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageDeliveryWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    products: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FavoriteProduct
   */

  export type AggregateFavoriteProduct = {
    _count: FavoriteProductCountAggregateOutputType | null
    _avg: FavoriteProductAvgAggregateOutputType | null
    _sum: FavoriteProductSumAggregateOutputType | null
    _min: FavoriteProductMinAggregateOutputType | null
    _max: FavoriteProductMaxAggregateOutputType | null
  }

  export type FavoriteProductAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FavoriteProductSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FavoriteProductMinAggregateOutputType = {
    id: number | null
    customerId: string | null
    productId: number | null
    createdAt: Date | null
  }

  export type FavoriteProductMaxAggregateOutputType = {
    id: number | null
    customerId: string | null
    productId: number | null
    createdAt: Date | null
  }

  export type FavoriteProductCountAggregateOutputType = {
    id: number
    customerId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type FavoriteProductAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type FavoriteProductSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type FavoriteProductMinAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
    createdAt?: true
  }

  export type FavoriteProductMaxAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
    createdAt?: true
  }

  export type FavoriteProductCountAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteProduct to aggregate.
     */
    where?: FavoriteProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteProducts to fetch.
     */
    orderBy?: FavoriteProductOrderByWithRelationInput | FavoriteProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteProducts
    **/
    _count?: true | FavoriteProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteProductMaxAggregateInputType
  }

  export type GetFavoriteProductAggregateType<T extends FavoriteProductAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteProduct[P]>
      : GetScalarType<T[P], AggregateFavoriteProduct[P]>
  }




  export type FavoriteProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteProductWhereInput
    orderBy?: FavoriteProductOrderByWithAggregationInput | FavoriteProductOrderByWithAggregationInput[]
    by: FavoriteProductScalarFieldEnum[] | FavoriteProductScalarFieldEnum
    having?: FavoriteProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteProductCountAggregateInputType | true
    _avg?: FavoriteProductAvgAggregateInputType
    _sum?: FavoriteProductSumAggregateInputType
    _min?: FavoriteProductMinAggregateInputType
    _max?: FavoriteProductMaxAggregateInputType
  }

  export type FavoriteProductGroupByOutputType = {
    id: number
    customerId: string
    productId: number
    createdAt: Date
    _count: FavoriteProductCountAggregateOutputType | null
    _avg: FavoriteProductAvgAggregateOutputType | null
    _sum: FavoriteProductSumAggregateOutputType | null
    _min: FavoriteProductMinAggregateOutputType | null
    _max: FavoriteProductMaxAggregateOutputType | null
  }

  type GetFavoriteProductGroupByPayload<T extends FavoriteProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteProductGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteProductGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteProduct"]>

  export type FavoriteProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteProduct"]>

  export type FavoriteProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteProduct"]>

  export type FavoriteProductSelectScalar = {
    id?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type FavoriteProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "productId" | "createdAt", ExtArgs["result"]["favoriteProduct"]>
  export type FavoriteProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FavoriteProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FavoriteProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $FavoriteProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteProduct"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: string
      productId: number
      createdAt: Date
    }, ExtArgs["result"]["favoriteProduct"]>
    composites: {}
  }

  type FavoriteProductGetPayload<S extends boolean | null | undefined | FavoriteProductDefaultArgs> = $Result.GetResult<Prisma.$FavoriteProductPayload, S>

  type FavoriteProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteProductCountAggregateInputType | true
    }

  export interface FavoriteProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteProduct'], meta: { name: 'FavoriteProduct' } }
    /**
     * Find zero or one FavoriteProduct that matches the filter.
     * @param {FavoriteProductFindUniqueArgs} args - Arguments to find a FavoriteProduct
     * @example
     * // Get one FavoriteProduct
     * const favoriteProduct = await prisma.favoriteProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteProductFindUniqueArgs>(args: SelectSubset<T, FavoriteProductFindUniqueArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteProductFindUniqueOrThrowArgs} args - Arguments to find a FavoriteProduct
     * @example
     * // Get one FavoriteProduct
     * const favoriteProduct = await prisma.favoriteProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteProductFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductFindFirstArgs} args - Arguments to find a FavoriteProduct
     * @example
     * // Get one FavoriteProduct
     * const favoriteProduct = await prisma.favoriteProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteProductFindFirstArgs>(args?: SelectSubset<T, FavoriteProductFindFirstArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductFindFirstOrThrowArgs} args - Arguments to find a FavoriteProduct
     * @example
     * // Get one FavoriteProduct
     * const favoriteProduct = await prisma.favoriteProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteProductFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteProducts
     * const favoriteProducts = await prisma.favoriteProduct.findMany()
     * 
     * // Get first 10 FavoriteProducts
     * const favoriteProducts = await prisma.favoriteProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteProductWithIdOnly = await prisma.favoriteProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteProductFindManyArgs>(args?: SelectSubset<T, FavoriteProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteProduct.
     * @param {FavoriteProductCreateArgs} args - Arguments to create a FavoriteProduct.
     * @example
     * // Create one FavoriteProduct
     * const FavoriteProduct = await prisma.favoriteProduct.create({
     *   data: {
     *     // ... data to create a FavoriteProduct
     *   }
     * })
     * 
     */
    create<T extends FavoriteProductCreateArgs>(args: SelectSubset<T, FavoriteProductCreateArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteProducts.
     * @param {FavoriteProductCreateManyArgs} args - Arguments to create many FavoriteProducts.
     * @example
     * // Create many FavoriteProducts
     * const favoriteProduct = await prisma.favoriteProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteProductCreateManyArgs>(args?: SelectSubset<T, FavoriteProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteProducts and returns the data saved in the database.
     * @param {FavoriteProductCreateManyAndReturnArgs} args - Arguments to create many FavoriteProducts.
     * @example
     * // Create many FavoriteProducts
     * const favoriteProduct = await prisma.favoriteProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteProducts and only return the `id`
     * const favoriteProductWithIdOnly = await prisma.favoriteProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteProductCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteProduct.
     * @param {FavoriteProductDeleteArgs} args - Arguments to delete one FavoriteProduct.
     * @example
     * // Delete one FavoriteProduct
     * const FavoriteProduct = await prisma.favoriteProduct.delete({
     *   where: {
     *     // ... filter to delete one FavoriteProduct
     *   }
     * })
     * 
     */
    delete<T extends FavoriteProductDeleteArgs>(args: SelectSubset<T, FavoriteProductDeleteArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteProduct.
     * @param {FavoriteProductUpdateArgs} args - Arguments to update one FavoriteProduct.
     * @example
     * // Update one FavoriteProduct
     * const favoriteProduct = await prisma.favoriteProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteProductUpdateArgs>(args: SelectSubset<T, FavoriteProductUpdateArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteProducts.
     * @param {FavoriteProductDeleteManyArgs} args - Arguments to filter FavoriteProducts to delete.
     * @example
     * // Delete a few FavoriteProducts
     * const { count } = await prisma.favoriteProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteProductDeleteManyArgs>(args?: SelectSubset<T, FavoriteProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteProducts
     * const favoriteProduct = await prisma.favoriteProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteProductUpdateManyArgs>(args: SelectSubset<T, FavoriteProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteProducts and returns the data updated in the database.
     * @param {FavoriteProductUpdateManyAndReturnArgs} args - Arguments to update many FavoriteProducts.
     * @example
     * // Update many FavoriteProducts
     * const favoriteProduct = await prisma.favoriteProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteProducts and only return the `id`
     * const favoriteProductWithIdOnly = await prisma.favoriteProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteProductUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteProduct.
     * @param {FavoriteProductUpsertArgs} args - Arguments to update or create a FavoriteProduct.
     * @example
     * // Update or create a FavoriteProduct
     * const favoriteProduct = await prisma.favoriteProduct.upsert({
     *   create: {
     *     // ... data to create a FavoriteProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteProduct we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteProductUpsertArgs>(args: SelectSubset<T, FavoriteProductUpsertArgs<ExtArgs>>): Prisma__FavoriteProductClient<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductCountArgs} args - Arguments to filter FavoriteProducts to count.
     * @example
     * // Count the number of FavoriteProducts
     * const count = await prisma.favoriteProduct.count({
     *   where: {
     *     // ... the filter for the FavoriteProducts we want to count
     *   }
     * })
    **/
    count<T extends FavoriteProductCountArgs>(
      args?: Subset<T, FavoriteProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteProductAggregateArgs>(args: Subset<T, FavoriteProductAggregateArgs>): Prisma.PrismaPromise<GetFavoriteProductAggregateType<T>>

    /**
     * Group by FavoriteProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteProductGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteProduct model
   */
  readonly fields: FavoriteProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteProduct model
   */
  interface FavoriteProductFieldRefs {
    readonly id: FieldRef<"FavoriteProduct", 'Int'>
    readonly customerId: FieldRef<"FavoriteProduct", 'String'>
    readonly productId: FieldRef<"FavoriteProduct", 'Int'>
    readonly createdAt: FieldRef<"FavoriteProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteProduct findUnique
   */
  export type FavoriteProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteProduct to fetch.
     */
    where: FavoriteProductWhereUniqueInput
  }

  /**
   * FavoriteProduct findUniqueOrThrow
   */
  export type FavoriteProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteProduct to fetch.
     */
    where: FavoriteProductWhereUniqueInput
  }

  /**
   * FavoriteProduct findFirst
   */
  export type FavoriteProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteProduct to fetch.
     */
    where?: FavoriteProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteProducts to fetch.
     */
    orderBy?: FavoriteProductOrderByWithRelationInput | FavoriteProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteProducts.
     */
    cursor?: FavoriteProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteProducts.
     */
    distinct?: FavoriteProductScalarFieldEnum | FavoriteProductScalarFieldEnum[]
  }

  /**
   * FavoriteProduct findFirstOrThrow
   */
  export type FavoriteProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteProduct to fetch.
     */
    where?: FavoriteProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteProducts to fetch.
     */
    orderBy?: FavoriteProductOrderByWithRelationInput | FavoriteProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteProducts.
     */
    cursor?: FavoriteProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteProducts.
     */
    distinct?: FavoriteProductScalarFieldEnum | FavoriteProductScalarFieldEnum[]
  }

  /**
   * FavoriteProduct findMany
   */
  export type FavoriteProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteProducts to fetch.
     */
    where?: FavoriteProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteProducts to fetch.
     */
    orderBy?: FavoriteProductOrderByWithRelationInput | FavoriteProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteProducts.
     */
    cursor?: FavoriteProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteProducts.
     */
    skip?: number
    distinct?: FavoriteProductScalarFieldEnum | FavoriteProductScalarFieldEnum[]
  }

  /**
   * FavoriteProduct create
   */
  export type FavoriteProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteProduct.
     */
    data: XOR<FavoriteProductCreateInput, FavoriteProductUncheckedCreateInput>
  }

  /**
   * FavoriteProduct createMany
   */
  export type FavoriteProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteProducts.
     */
    data: FavoriteProductCreateManyInput | FavoriteProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteProduct createManyAndReturn
   */
  export type FavoriteProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteProducts.
     */
    data: FavoriteProductCreateManyInput | FavoriteProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteProduct update
   */
  export type FavoriteProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteProduct.
     */
    data: XOR<FavoriteProductUpdateInput, FavoriteProductUncheckedUpdateInput>
    /**
     * Choose, which FavoriteProduct to update.
     */
    where: FavoriteProductWhereUniqueInput
  }

  /**
   * FavoriteProduct updateMany
   */
  export type FavoriteProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteProducts.
     */
    data: XOR<FavoriteProductUpdateManyMutationInput, FavoriteProductUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteProducts to update
     */
    where?: FavoriteProductWhereInput
    /**
     * Limit how many FavoriteProducts to update.
     */
    limit?: number
  }

  /**
   * FavoriteProduct updateManyAndReturn
   */
  export type FavoriteProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteProducts.
     */
    data: XOR<FavoriteProductUpdateManyMutationInput, FavoriteProductUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteProducts to update
     */
    where?: FavoriteProductWhereInput
    /**
     * Limit how many FavoriteProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteProduct upsert
   */
  export type FavoriteProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteProduct to update in case it exists.
     */
    where: FavoriteProductWhereUniqueInput
    /**
     * In case the FavoriteProduct found by the `where` argument doesn't exist, create a new FavoriteProduct with this data.
     */
    create: XOR<FavoriteProductCreateInput, FavoriteProductUncheckedCreateInput>
    /**
     * In case the FavoriteProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteProductUpdateInput, FavoriteProductUncheckedUpdateInput>
  }

  /**
   * FavoriteProduct delete
   */
  export type FavoriteProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    /**
     * Filter which FavoriteProduct to delete.
     */
    where: FavoriteProductWhereUniqueInput
  }

  /**
   * FavoriteProduct deleteMany
   */
  export type FavoriteProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteProducts to delete
     */
    where?: FavoriteProductWhereInput
    /**
     * Limit how many FavoriteProducts to delete.
     */
    limit?: number
  }

  /**
   * FavoriteProduct without action
   */
  export type FavoriteProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    price: number | null
    imageUrl: string | null
    name_ru: string | null
    name_en: string | null
    name_uk: string | null
    name_nl: string | null
    ingredients_ru: string | null
    ingredients_en: string | null
    ingredients_uk: string | null
    ingredients_nl: string | null
    isPopular: boolean | null
    isChefRecommendation: boolean | null
    isPromotion: boolean | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    price: number | null
    imageUrl: string | null
    name_ru: string | null
    name_en: string | null
    name_uk: string | null
    name_nl: string | null
    ingredients_ru: string | null
    ingredients_en: string | null
    ingredients_uk: string | null
    ingredients_nl: string | null
    isPopular: boolean | null
    isChefRecommendation: boolean | null
    isPromotion: boolean | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    price: number
    imageUrl: number
    name_ru: number
    name_en: number
    name_uk: number
    name_nl: number
    ingredients_ru: number
    ingredients_en: number
    ingredients_uk: number
    ingredients_nl: number
    isPopular: number
    isChefRecommendation: number
    isPromotion: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    price?: true
    imageUrl?: true
    name_ru?: true
    name_en?: true
    name_uk?: true
    name_nl?: true
    ingredients_ru?: true
    ingredients_en?: true
    ingredients_uk?: true
    ingredients_nl?: true
    isPopular?: true
    isChefRecommendation?: true
    isPromotion?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    price?: true
    imageUrl?: true
    name_ru?: true
    name_en?: true
    name_uk?: true
    name_nl?: true
    ingredients_ru?: true
    ingredients_en?: true
    ingredients_uk?: true
    ingredients_nl?: true
    isPopular?: true
    isChefRecommendation?: true
    isPromotion?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    price?: true
    imageUrl?: true
    name_ru?: true
    name_en?: true
    name_uk?: true
    name_nl?: true
    ingredients_ru?: true
    ingredients_en?: true
    ingredients_uk?: true
    ingredients_nl?: true
    isPopular?: true
    isChefRecommendation?: true
    isPromotion?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    price: number
    imageUrl: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru: string | null
    ingredients_en: string | null
    ingredients_uk: string | null
    ingredients_nl: string | null
    isPopular: boolean
    isChefRecommendation: boolean
    isPromotion: boolean
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    imageUrl?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
    ingredients_ru?: boolean
    ingredients_en?: boolean
    ingredients_uk?: boolean
    ingredients_nl?: boolean
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    favoritedBy?: boolean | Product$favoritedByArgs<ExtArgs>
    OrderLineItem?: boolean | Product$OrderLineItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    imageUrl?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
    ingredients_ru?: boolean
    ingredients_en?: boolean
    ingredients_uk?: boolean
    ingredients_nl?: boolean
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    imageUrl?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
    ingredients_ru?: boolean
    ingredients_en?: boolean
    ingredients_uk?: boolean
    ingredients_nl?: boolean
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    price?: boolean
    imageUrl?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
    ingredients_ru?: boolean
    ingredients_en?: boolean
    ingredients_uk?: boolean
    ingredients_nl?: boolean
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "imageUrl" | "name_ru" | "name_en" | "name_uk" | "name_nl" | "ingredients_ru" | "ingredients_en" | "ingredients_uk" | "ingredients_nl" | "isPopular" | "isChefRecommendation" | "isPromotion" | "categoryId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    favoritedBy?: boolean | Product$favoritedByArgs<ExtArgs>
    OrderLineItem?: boolean | Product$OrderLineItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$ProductCategoryPayload<ExtArgs>
      favoritedBy: Prisma.$FavoriteProductPayload<ExtArgs>[]
      OrderLineItem: Prisma.$OrderLineItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      imageUrl: string | null
      name_ru: string
      name_en: string
      name_uk: string
      name_nl: string
      ingredients_ru: string | null
      ingredients_en: string | null
      ingredients_uk: string | null
      ingredients_nl: string | null
      isPopular: boolean
      isChefRecommendation: boolean
      isPromotion: boolean
      categoryId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoritedBy<T extends Product$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderLineItem<T extends Product$OrderLineItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderLineItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly name_ru: FieldRef<"Product", 'String'>
    readonly name_en: FieldRef<"Product", 'String'>
    readonly name_uk: FieldRef<"Product", 'String'>
    readonly name_nl: FieldRef<"Product", 'String'>
    readonly ingredients_ru: FieldRef<"Product", 'String'>
    readonly ingredients_en: FieldRef<"Product", 'String'>
    readonly ingredients_uk: FieldRef<"Product", 'String'>
    readonly ingredients_nl: FieldRef<"Product", 'String'>
    readonly isPopular: FieldRef<"Product", 'Boolean'>
    readonly isChefRecommendation: FieldRef<"Product", 'Boolean'>
    readonly isPromotion: FieldRef<"Product", 'Boolean'>
    readonly categoryId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.favoritedBy
   */
  export type Product$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    where?: FavoriteProductWhereInput
    orderBy?: FavoriteProductOrderByWithRelationInput | FavoriteProductOrderByWithRelationInput[]
    cursor?: FavoriteProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteProductScalarFieldEnum | FavoriteProductScalarFieldEnum[]
  }

  /**
   * Product.OrderLineItem
   */
  export type Product$OrderLineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    where?: OrderLineItemWhereInput
    orderBy?: OrderLineItemOrderByWithRelationInput | OrderLineItemOrderByWithRelationInput[]
    cursor?: OrderLineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderLineItemScalarFieldEnum | OrderLineItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    telegramId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    telegramId: bigint | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    telegramId: bigint | null
    languageCode: string | null
    firstName: string | null
    lastName: string | null
    country: string | null
    phoneNumber: string | null
    email: string | null
    birthDate: Date | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    preferredFood: string | null
    feedback: string | null
    discountCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
    emailVerificationCode: string | null
    marketingConsent: boolean | null
    lastBirthdayGreetingSent: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    telegramId: bigint | null
    languageCode: string | null
    firstName: string | null
    lastName: string | null
    country: string | null
    phoneNumber: string | null
    email: string | null
    birthDate: Date | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    preferredFood: string | null
    feedback: string | null
    discountCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
    emailVerificationCode: string | null
    marketingConsent: boolean | null
    lastBirthdayGreetingSent: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    telegramId: number
    languageCode: number
    firstName: number
    lastName: number
    country: number
    phoneNumber: number
    email: number
    birthDate: number
    city: number
    street: number
    postalCode: number
    houseNumber: number
    preferredFood: number
    feedback: number
    discountCode: number
    createdAt: number
    updatedAt: number
    isEmailVerified: number
    emailVerificationCode: number
    marketingConsent: number
    lastBirthdayGreetingSent: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    telegramId?: true
  }

  export type CustomerSumAggregateInputType = {
    telegramId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    telegramId?: true
    languageCode?: true
    firstName?: true
    lastName?: true
    country?: true
    phoneNumber?: true
    email?: true
    birthDate?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    preferredFood?: true
    feedback?: true
    discountCode?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerificationCode?: true
    marketingConsent?: true
    lastBirthdayGreetingSent?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    telegramId?: true
    languageCode?: true
    firstName?: true
    lastName?: true
    country?: true
    phoneNumber?: true
    email?: true
    birthDate?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    preferredFood?: true
    feedback?: true
    discountCode?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerificationCode?: true
    marketingConsent?: true
    lastBirthdayGreetingSent?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    telegramId?: true
    languageCode?: true
    firstName?: true
    lastName?: true
    country?: true
    phoneNumber?: true
    email?: true
    birthDate?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    preferredFood?: true
    feedback?: true
    discountCode?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerificationCode?: true
    marketingConsent?: true
    lastBirthdayGreetingSent?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    telegramId: bigint | null
    languageCode: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email: string | null
    birthDate: Date | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    preferredFood: string | null
    feedback: string | null
    discountCode: string
    createdAt: Date
    updatedAt: Date
    isEmailVerified: boolean
    emailVerificationCode: string | null
    marketingConsent: boolean
    lastBirthdayGreetingSent: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    languageCode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationCode?: boolean
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: boolean
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    favorites?: boolean | Customer$favoritesArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    languageCode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationCode?: boolean
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    languageCode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationCode?: boolean
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    telegramId?: boolean
    languageCode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationCode?: boolean
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegramId" | "languageCode" | "firstName" | "lastName" | "country" | "phoneNumber" | "email" | "birthDate" | "city" | "street" | "postalCode" | "houseNumber" | "preferredFood" | "feedback" | "discountCode" | "createdAt" | "updatedAt" | "isEmailVerified" | "emailVerificationCode" | "marketingConsent" | "lastBirthdayGreetingSent", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    favorites?: boolean | Customer$favoritesArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      subscriptions: Prisma.$MessageSubscriptionPayload<ExtArgs> | null
      favorites: Prisma.$FavoriteProductPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      telegramId: bigint | null
      languageCode: string | null
      firstName: string
      lastName: string
      country: string
      phoneNumber: string
      email: string | null
      birthDate: Date | null
      city: string | null
      street: string | null
      postalCode: string | null
      houseNumber: string | null
      preferredFood: string | null
      feedback: string | null
      discountCode: string
      createdAt: Date
      updatedAt: Date
      isEmailVerified: boolean
      emailVerificationCode: string | null
      marketingConsent: boolean
      lastBirthdayGreetingSent: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Customer$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$subscriptionsArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favorites<T extends Customer$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly telegramId: FieldRef<"Customer", 'BigInt'>
    readonly languageCode: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly birthDate: FieldRef<"Customer", 'DateTime'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly street: FieldRef<"Customer", 'String'>
    readonly postalCode: FieldRef<"Customer", 'String'>
    readonly houseNumber: FieldRef<"Customer", 'String'>
    readonly preferredFood: FieldRef<"Customer", 'String'>
    readonly feedback: FieldRef<"Customer", 'String'>
    readonly discountCode: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly isEmailVerified: FieldRef<"Customer", 'Boolean'>
    readonly emailVerificationCode: FieldRef<"Customer", 'String'>
    readonly marketingConsent: FieldRef<"Customer", 'Boolean'>
    readonly lastBirthdayGreetingSent: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.subscriptions
   */
  export type Customer$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    where?: MessageSubscriptionWhereInput
  }

  /**
   * Customer.favorites
   */
  export type Customer$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteProduct
     */
    select?: FavoriteProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteProduct
     */
    omit?: FavoriteProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteProductInclude<ExtArgs> | null
    where?: FavoriteProductWhereInput
    orderBy?: FavoriteProductOrderByWithRelationInput | FavoriteProductOrderByWithRelationInput[]
    cursor?: FavoriteProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteProductScalarFieldEnum | FavoriteProductScalarFieldEnum[]
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerId: string | null
    totalPrice: number | null
    status: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerId: string | null
    totalPrice: number | null
    status: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerId: number
    totalPrice: number
    status: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    customerId: string
    totalPrice: number
    status: string
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "totalPrice" | "status" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      items: Prisma.$OrderLineItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: string
      totalPrice: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'String'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    where?: OrderLineItemWhereInput
    orderBy?: OrderLineItemOrderByWithRelationInput | OrderLineItemOrderByWithRelationInput[]
    cursor?: OrderLineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderLineItemScalarFieldEnum | OrderLineItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderLineItem
   */

  export type AggregateOrderLineItem = {
    _count: OrderLineItemCountAggregateOutputType | null
    _avg: OrderLineItemAvgAggregateOutputType | null
    _sum: OrderLineItemSumAggregateOutputType | null
    _min: OrderLineItemMinAggregateOutputType | null
    _max: OrderLineItemMaxAggregateOutputType | null
  }

  export type OrderLineItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderLineItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderLineItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderLineItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderLineItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderLineItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderLineItemSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderLineItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderLineItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderLineItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderLineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderLineItem to aggregate.
     */
    where?: OrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLineItems to fetch.
     */
    orderBy?: OrderLineItemOrderByWithRelationInput | OrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderLineItems
    **/
    _count?: true | OrderLineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderLineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderLineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderLineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderLineItemMaxAggregateInputType
  }

  export type GetOrderLineItemAggregateType<T extends OrderLineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderLineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderLineItem[P]>
      : GetScalarType<T[P], AggregateOrderLineItem[P]>
  }




  export type OrderLineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderLineItemWhereInput
    orderBy?: OrderLineItemOrderByWithAggregationInput | OrderLineItemOrderByWithAggregationInput[]
    by: OrderLineItemScalarFieldEnum[] | OrderLineItemScalarFieldEnum
    having?: OrderLineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderLineItemCountAggregateInputType | true
    _avg?: OrderLineItemAvgAggregateInputType
    _sum?: OrderLineItemSumAggregateInputType
    _min?: OrderLineItemMinAggregateInputType
    _max?: OrderLineItemMaxAggregateInputType
  }

  export type OrderLineItemGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    _count: OrderLineItemCountAggregateOutputType | null
    _avg: OrderLineItemAvgAggregateOutputType | null
    _sum: OrderLineItemSumAggregateOutputType | null
    _min: OrderLineItemMinAggregateOutputType | null
    _max: OrderLineItemMaxAggregateOutputType | null
  }

  type GetOrderLineItemGroupByPayload<T extends OrderLineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderLineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderLineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderLineItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderLineItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderLineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderLineItem"]>

  export type OrderLineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderLineItem"]>

  export type OrderLineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderLineItem"]>

  export type OrderLineItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type OrderLineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity" | "price", ExtArgs["result"]["orderLineItem"]>
  export type OrderLineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderLineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderLineItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderLineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderLineItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
      quantity: number
      price: number
    }, ExtArgs["result"]["orderLineItem"]>
    composites: {}
  }

  type OrderLineItemGetPayload<S extends boolean | null | undefined | OrderLineItemDefaultArgs> = $Result.GetResult<Prisma.$OrderLineItemPayload, S>

  type OrderLineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderLineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderLineItemCountAggregateInputType | true
    }

  export interface OrderLineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderLineItem'], meta: { name: 'OrderLineItem' } }
    /**
     * Find zero or one OrderLineItem that matches the filter.
     * @param {OrderLineItemFindUniqueArgs} args - Arguments to find a OrderLineItem
     * @example
     * // Get one OrderLineItem
     * const orderLineItem = await prisma.orderLineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderLineItemFindUniqueArgs>(args: SelectSubset<T, OrderLineItemFindUniqueArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderLineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderLineItemFindUniqueOrThrowArgs} args - Arguments to find a OrderLineItem
     * @example
     * // Get one OrderLineItem
     * const orderLineItem = await prisma.orderLineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderLineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderLineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderLineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemFindFirstArgs} args - Arguments to find a OrderLineItem
     * @example
     * // Get one OrderLineItem
     * const orderLineItem = await prisma.orderLineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderLineItemFindFirstArgs>(args?: SelectSubset<T, OrderLineItemFindFirstArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderLineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemFindFirstOrThrowArgs} args - Arguments to find a OrderLineItem
     * @example
     * // Get one OrderLineItem
     * const orderLineItem = await prisma.orderLineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderLineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderLineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderLineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderLineItems
     * const orderLineItems = await prisma.orderLineItem.findMany()
     * 
     * // Get first 10 OrderLineItems
     * const orderLineItems = await prisma.orderLineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderLineItemWithIdOnly = await prisma.orderLineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderLineItemFindManyArgs>(args?: SelectSubset<T, OrderLineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderLineItem.
     * @param {OrderLineItemCreateArgs} args - Arguments to create a OrderLineItem.
     * @example
     * // Create one OrderLineItem
     * const OrderLineItem = await prisma.orderLineItem.create({
     *   data: {
     *     // ... data to create a OrderLineItem
     *   }
     * })
     * 
     */
    create<T extends OrderLineItemCreateArgs>(args: SelectSubset<T, OrderLineItemCreateArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderLineItems.
     * @param {OrderLineItemCreateManyArgs} args - Arguments to create many OrderLineItems.
     * @example
     * // Create many OrderLineItems
     * const orderLineItem = await prisma.orderLineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderLineItemCreateManyArgs>(args?: SelectSubset<T, OrderLineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderLineItems and returns the data saved in the database.
     * @param {OrderLineItemCreateManyAndReturnArgs} args - Arguments to create many OrderLineItems.
     * @example
     * // Create many OrderLineItems
     * const orderLineItem = await prisma.orderLineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderLineItems and only return the `id`
     * const orderLineItemWithIdOnly = await prisma.orderLineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderLineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderLineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderLineItem.
     * @param {OrderLineItemDeleteArgs} args - Arguments to delete one OrderLineItem.
     * @example
     * // Delete one OrderLineItem
     * const OrderLineItem = await prisma.orderLineItem.delete({
     *   where: {
     *     // ... filter to delete one OrderLineItem
     *   }
     * })
     * 
     */
    delete<T extends OrderLineItemDeleteArgs>(args: SelectSubset<T, OrderLineItemDeleteArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderLineItem.
     * @param {OrderLineItemUpdateArgs} args - Arguments to update one OrderLineItem.
     * @example
     * // Update one OrderLineItem
     * const orderLineItem = await prisma.orderLineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderLineItemUpdateArgs>(args: SelectSubset<T, OrderLineItemUpdateArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderLineItems.
     * @param {OrderLineItemDeleteManyArgs} args - Arguments to filter OrderLineItems to delete.
     * @example
     * // Delete a few OrderLineItems
     * const { count } = await prisma.orderLineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderLineItemDeleteManyArgs>(args?: SelectSubset<T, OrderLineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderLineItems
     * const orderLineItem = await prisma.orderLineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderLineItemUpdateManyArgs>(args: SelectSubset<T, OrderLineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderLineItems and returns the data updated in the database.
     * @param {OrderLineItemUpdateManyAndReturnArgs} args - Arguments to update many OrderLineItems.
     * @example
     * // Update many OrderLineItems
     * const orderLineItem = await prisma.orderLineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderLineItems and only return the `id`
     * const orderLineItemWithIdOnly = await prisma.orderLineItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderLineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderLineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderLineItem.
     * @param {OrderLineItemUpsertArgs} args - Arguments to update or create a OrderLineItem.
     * @example
     * // Update or create a OrderLineItem
     * const orderLineItem = await prisma.orderLineItem.upsert({
     *   create: {
     *     // ... data to create a OrderLineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderLineItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderLineItemUpsertArgs>(args: SelectSubset<T, OrderLineItemUpsertArgs<ExtArgs>>): Prisma__OrderLineItemClient<$Result.GetResult<Prisma.$OrderLineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemCountArgs} args - Arguments to filter OrderLineItems to count.
     * @example
     * // Count the number of OrderLineItems
     * const count = await prisma.orderLineItem.count({
     *   where: {
     *     // ... the filter for the OrderLineItems we want to count
     *   }
     * })
    **/
    count<T extends OrderLineItemCountArgs>(
      args?: Subset<T, OrderLineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderLineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderLineItemAggregateArgs>(args: Subset<T, OrderLineItemAggregateArgs>): Prisma.PrismaPromise<GetOrderLineItemAggregateType<T>>

    /**
     * Group by OrderLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderLineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderLineItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderLineItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderLineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderLineItem model
   */
  readonly fields: OrderLineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderLineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderLineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderLineItem model
   */
  interface OrderLineItemFieldRefs {
    readonly id: FieldRef<"OrderLineItem", 'Int'>
    readonly orderId: FieldRef<"OrderLineItem", 'Int'>
    readonly productId: FieldRef<"OrderLineItem", 'Int'>
    readonly quantity: FieldRef<"OrderLineItem", 'Int'>
    readonly price: FieldRef<"OrderLineItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderLineItem findUnique
   */
  export type OrderLineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderLineItem to fetch.
     */
    where: OrderLineItemWhereUniqueInput
  }

  /**
   * OrderLineItem findUniqueOrThrow
   */
  export type OrderLineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderLineItem to fetch.
     */
    where: OrderLineItemWhereUniqueInput
  }

  /**
   * OrderLineItem findFirst
   */
  export type OrderLineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderLineItem to fetch.
     */
    where?: OrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLineItems to fetch.
     */
    orderBy?: OrderLineItemOrderByWithRelationInput | OrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderLineItems.
     */
    cursor?: OrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderLineItems.
     */
    distinct?: OrderLineItemScalarFieldEnum | OrderLineItemScalarFieldEnum[]
  }

  /**
   * OrderLineItem findFirstOrThrow
   */
  export type OrderLineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderLineItem to fetch.
     */
    where?: OrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLineItems to fetch.
     */
    orderBy?: OrderLineItemOrderByWithRelationInput | OrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderLineItems.
     */
    cursor?: OrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderLineItems.
     */
    distinct?: OrderLineItemScalarFieldEnum | OrderLineItemScalarFieldEnum[]
  }

  /**
   * OrderLineItem findMany
   */
  export type OrderLineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderLineItems to fetch.
     */
    where?: OrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLineItems to fetch.
     */
    orderBy?: OrderLineItemOrderByWithRelationInput | OrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderLineItems.
     */
    cursor?: OrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLineItems.
     */
    skip?: number
    distinct?: OrderLineItemScalarFieldEnum | OrderLineItemScalarFieldEnum[]
  }

  /**
   * OrderLineItem create
   */
  export type OrderLineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderLineItem.
     */
    data: XOR<OrderLineItemCreateInput, OrderLineItemUncheckedCreateInput>
  }

  /**
   * OrderLineItem createMany
   */
  export type OrderLineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderLineItems.
     */
    data: OrderLineItemCreateManyInput | OrderLineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderLineItem createManyAndReturn
   */
  export type OrderLineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderLineItems.
     */
    data: OrderLineItemCreateManyInput | OrderLineItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderLineItem update
   */
  export type OrderLineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderLineItem.
     */
    data: XOR<OrderLineItemUpdateInput, OrderLineItemUncheckedUpdateInput>
    /**
     * Choose, which OrderLineItem to update.
     */
    where: OrderLineItemWhereUniqueInput
  }

  /**
   * OrderLineItem updateMany
   */
  export type OrderLineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderLineItems.
     */
    data: XOR<OrderLineItemUpdateManyMutationInput, OrderLineItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderLineItems to update
     */
    where?: OrderLineItemWhereInput
    /**
     * Limit how many OrderLineItems to update.
     */
    limit?: number
  }

  /**
   * OrderLineItem updateManyAndReturn
   */
  export type OrderLineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderLineItems.
     */
    data: XOR<OrderLineItemUpdateManyMutationInput, OrderLineItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderLineItems to update
     */
    where?: OrderLineItemWhereInput
    /**
     * Limit how many OrderLineItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderLineItem upsert
   */
  export type OrderLineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderLineItem to update in case it exists.
     */
    where: OrderLineItemWhereUniqueInput
    /**
     * In case the OrderLineItem found by the `where` argument doesn't exist, create a new OrderLineItem with this data.
     */
    create: XOR<OrderLineItemCreateInput, OrderLineItemUncheckedCreateInput>
    /**
     * In case the OrderLineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderLineItemUpdateInput, OrderLineItemUncheckedUpdateInput>
  }

  /**
   * OrderLineItem delete
   */
  export type OrderLineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
    /**
     * Filter which OrderLineItem to delete.
     */
    where: OrderLineItemWhereUniqueInput
  }

  /**
   * OrderLineItem deleteMany
   */
  export type OrderLineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderLineItems to delete
     */
    where?: OrderLineItemWhereInput
    /**
     * Limit how many OrderLineItems to delete.
     */
    limit?: number
  }

  /**
   * OrderLineItem without action
   */
  export type OrderLineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLineItem
     */
    select?: OrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLineItem
     */
    omit?: OrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineItemInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    accessCode: string | null
    password: string | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerificationCode: string | null
    isEmailVerified: boolean | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    accessCode: string | null
    password: string | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerificationCode: string | null
    isEmailVerified: boolean | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    email: number
    name: number
    accessCode: number
    password: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    emailVerificationCode: number
    isEmailVerified: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    accessCode?: true
    password?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    accessCode?: true
    password?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    accessCode?: true
    password?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    emailVerificationCode: string | null
    isEmailVerified: boolean
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
    loginSessions?: boolean | Owner$loginSessionsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "accessCode" | "password" | "isActive" | "lastLogin" | "createdAt" | "updatedAt" | "emailVerificationCode" | "isEmailVerified", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginSessions?: boolean | Owner$loginSessionsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      loginSessions: Prisma.$OwnerLoginSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      accessCode: string
      password: string
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
      emailVerificationCode: string | null
      isEmailVerified: boolean
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loginSessions<T extends Owner$loginSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$loginSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly name: FieldRef<"Owner", 'String'>
    readonly accessCode: FieldRef<"Owner", 'String'>
    readonly password: FieldRef<"Owner", 'String'>
    readonly isActive: FieldRef<"Owner", 'Boolean'>
    readonly lastLogin: FieldRef<"Owner", 'DateTime'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
    readonly updatedAt: FieldRef<"Owner", 'DateTime'>
    readonly emailVerificationCode: FieldRef<"Owner", 'String'>
    readonly isEmailVerified: FieldRef<"Owner", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.loginSessions
   */
  export type Owner$loginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    where?: OwnerLoginSessionWhereInput
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    cursor?: OwnerLoginSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model MessageSubscription
   */

  export type AggregateMessageSubscription = {
    _count: MessageSubscriptionCountAggregateOutputType | null
    _min: MessageSubscriptionMinAggregateOutputType | null
    _max: MessageSubscriptionMaxAggregateOutputType | null
  }

  export type MessageSubscriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageSubscriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageSubscriptionCountAggregateOutputType = {
    id: number
    customerId: number
    subscribed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageSubscriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageSubscriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageSubscriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageSubscription to aggregate.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageSubscriptions
    **/
    _count?: true | MessageSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageSubscriptionMaxAggregateInputType
  }

  export type GetMessageSubscriptionAggregateType<T extends MessageSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageSubscription[P]>
      : GetScalarType<T[P], AggregateMessageSubscription[P]>
  }




  export type MessageSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageSubscriptionWhereInput
    orderBy?: MessageSubscriptionOrderByWithAggregationInput | MessageSubscriptionOrderByWithAggregationInput[]
    by: MessageSubscriptionScalarFieldEnum[] | MessageSubscriptionScalarFieldEnum
    having?: MessageSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageSubscriptionCountAggregateInputType | true
    _min?: MessageSubscriptionMinAggregateInputType
    _max?: MessageSubscriptionMaxAggregateInputType
  }

  export type MessageSubscriptionGroupByOutputType = {
    id: string
    customerId: string
    subscribed: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageSubscriptionCountAggregateOutputType | null
    _min: MessageSubscriptionMinAggregateOutputType | null
    _max: MessageSubscriptionMaxAggregateOutputType | null
  }

  type GetMessageSubscriptionGroupByPayload<T extends MessageSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], MessageSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type MessageSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveries?: boolean | MessageSubscription$deliveriesArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    _count?: boolean | MessageSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSubscription"]>

  export type MessageSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSubscription"]>

  export type MessageSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSubscription"]>

  export type MessageSubscriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "subscribed" | "createdAt" | "updatedAt", ExtArgs["result"]["messageSubscription"]>
  export type MessageSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | MessageSubscription$deliveriesArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    _count?: boolean | MessageSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type MessageSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $MessageSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageSubscription"
    objects: {
      deliveries: Prisma.$MessageDeliveryPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      subscribed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messageSubscription"]>
    composites: {}
  }

  type MessageSubscriptionGetPayload<S extends boolean | null | undefined | MessageSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$MessageSubscriptionPayload, S>

  type MessageSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageSubscriptionCountAggregateInputType | true
    }

  export interface MessageSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageSubscription'], meta: { name: 'MessageSubscription' } }
    /**
     * Find zero or one MessageSubscription that matches the filter.
     * @param {MessageSubscriptionFindUniqueArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageSubscriptionFindUniqueArgs>(args: SelectSubset<T, MessageSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionFindFirstArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageSubscriptionFindFirstArgs>(args?: SelectSubset<T, MessageSubscriptionFindFirstArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionFindFirstOrThrowArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageSubscriptions
     * const messageSubscriptions = await prisma.messageSubscription.findMany()
     * 
     * // Get first 10 MessageSubscriptions
     * const messageSubscriptions = await prisma.messageSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageSubscriptionWithIdOnly = await prisma.messageSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageSubscriptionFindManyArgs>(args?: SelectSubset<T, MessageSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageSubscription.
     * @param {MessageSubscriptionCreateArgs} args - Arguments to create a MessageSubscription.
     * @example
     * // Create one MessageSubscription
     * const MessageSubscription = await prisma.messageSubscription.create({
     *   data: {
     *     // ... data to create a MessageSubscription
     *   }
     * })
     * 
     */
    create<T extends MessageSubscriptionCreateArgs>(args: SelectSubset<T, MessageSubscriptionCreateArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageSubscriptions.
     * @param {MessageSubscriptionCreateManyArgs} args - Arguments to create many MessageSubscriptions.
     * @example
     * // Create many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageSubscriptionCreateManyArgs>(args?: SelectSubset<T, MessageSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageSubscriptions and returns the data saved in the database.
     * @param {MessageSubscriptionCreateManyAndReturnArgs} args - Arguments to create many MessageSubscriptions.
     * @example
     * // Create many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageSubscriptions and only return the `id`
     * const messageSubscriptionWithIdOnly = await prisma.messageSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageSubscription.
     * @param {MessageSubscriptionDeleteArgs} args - Arguments to delete one MessageSubscription.
     * @example
     * // Delete one MessageSubscription
     * const MessageSubscription = await prisma.messageSubscription.delete({
     *   where: {
     *     // ... filter to delete one MessageSubscription
     *   }
     * })
     * 
     */
    delete<T extends MessageSubscriptionDeleteArgs>(args: SelectSubset<T, MessageSubscriptionDeleteArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageSubscription.
     * @param {MessageSubscriptionUpdateArgs} args - Arguments to update one MessageSubscription.
     * @example
     * // Update one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageSubscriptionUpdateArgs>(args: SelectSubset<T, MessageSubscriptionUpdateArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageSubscriptions.
     * @param {MessageSubscriptionDeleteManyArgs} args - Arguments to filter MessageSubscriptions to delete.
     * @example
     * // Delete a few MessageSubscriptions
     * const { count } = await prisma.messageSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageSubscriptionDeleteManyArgs>(args?: SelectSubset<T, MessageSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageSubscriptionUpdateManyArgs>(args: SelectSubset<T, MessageSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageSubscriptions and returns the data updated in the database.
     * @param {MessageSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many MessageSubscriptions.
     * @example
     * // Update many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageSubscriptions and only return the `id`
     * const messageSubscriptionWithIdOnly = await prisma.messageSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageSubscription.
     * @param {MessageSubscriptionUpsertArgs} args - Arguments to update or create a MessageSubscription.
     * @example
     * // Update or create a MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.upsert({
     *   create: {
     *     // ... data to create a MessageSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageSubscription we want to update
     *   }
     * })
     */
    upsert<T extends MessageSubscriptionUpsertArgs>(args: SelectSubset<T, MessageSubscriptionUpsertArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionCountArgs} args - Arguments to filter MessageSubscriptions to count.
     * @example
     * // Count the number of MessageSubscriptions
     * const count = await prisma.messageSubscription.count({
     *   where: {
     *     // ... the filter for the MessageSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends MessageSubscriptionCountArgs>(
      args?: Subset<T, MessageSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageSubscriptionAggregateArgs>(args: Subset<T, MessageSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetMessageSubscriptionAggregateType<T>>

    /**
     * Group by MessageSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: MessageSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageSubscription model
   */
  readonly fields: MessageSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends MessageSubscription$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, MessageSubscription$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageSubscription model
   */
  interface MessageSubscriptionFieldRefs {
    readonly id: FieldRef<"MessageSubscription", 'String'>
    readonly customerId: FieldRef<"MessageSubscription", 'String'>
    readonly subscribed: FieldRef<"MessageSubscription", 'Boolean'>
    readonly createdAt: FieldRef<"MessageSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageSubscription findUnique
   */
  export type MessageSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription findUniqueOrThrow
   */
  export type MessageSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription findFirst
   */
  export type MessageSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSubscriptions.
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSubscriptions.
     */
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * MessageSubscription findFirstOrThrow
   */
  export type MessageSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSubscriptions.
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSubscriptions.
     */
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * MessageSubscription findMany
   */
  export type MessageSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscriptions to fetch.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageSubscriptions.
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * MessageSubscription create
   */
  export type MessageSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageSubscription.
     */
    data: XOR<MessageSubscriptionCreateInput, MessageSubscriptionUncheckedCreateInput>
  }

  /**
   * MessageSubscription createMany
   */
  export type MessageSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageSubscriptions.
     */
    data: MessageSubscriptionCreateManyInput | MessageSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageSubscription createManyAndReturn
   */
  export type MessageSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many MessageSubscriptions.
     */
    data: MessageSubscriptionCreateManyInput | MessageSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageSubscription update
   */
  export type MessageSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageSubscription.
     */
    data: XOR<MessageSubscriptionUpdateInput, MessageSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which MessageSubscription to update.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription updateMany
   */
  export type MessageSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageSubscriptions.
     */
    data: XOR<MessageSubscriptionUpdateManyMutationInput, MessageSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which MessageSubscriptions to update
     */
    where?: MessageSubscriptionWhereInput
    /**
     * Limit how many MessageSubscriptions to update.
     */
    limit?: number
  }

  /**
   * MessageSubscription updateManyAndReturn
   */
  export type MessageSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update MessageSubscriptions.
     */
    data: XOR<MessageSubscriptionUpdateManyMutationInput, MessageSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which MessageSubscriptions to update
     */
    where?: MessageSubscriptionWhereInput
    /**
     * Limit how many MessageSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageSubscription upsert
   */
  export type MessageSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageSubscription to update in case it exists.
     */
    where: MessageSubscriptionWhereUniqueInput
    /**
     * In case the MessageSubscription found by the `where` argument doesn't exist, create a new MessageSubscription with this data.
     */
    create: XOR<MessageSubscriptionCreateInput, MessageSubscriptionUncheckedCreateInput>
    /**
     * In case the MessageSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageSubscriptionUpdateInput, MessageSubscriptionUncheckedUpdateInput>
  }

  /**
   * MessageSubscription delete
   */
  export type MessageSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which MessageSubscription to delete.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription deleteMany
   */
  export type MessageSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageSubscriptions to delete
     */
    where?: MessageSubscriptionWhereInput
    /**
     * Limit how many MessageSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * MessageSubscription.deliveries
   */
  export type MessageSubscription$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    where?: MessageDeliveryWhereInput
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    cursor?: MessageDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageSubscription without action
   */
  export type MessageSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model BroadcastMessage
   */

  export type AggregateBroadcastMessage = {
    _count: BroadcastMessageCountAggregateOutputType | null
    _min: BroadcastMessageMinAggregateOutputType | null
    _max: BroadcastMessageMaxAggregateOutputType | null
  }

  export type BroadcastMessageMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    createdAt: Date | null
    scheduledFor: Date | null
  }

  export type BroadcastMessageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    createdAt: Date | null
    scheduledFor: Date | null
  }

  export type BroadcastMessageCountAggregateOutputType = {
    id: number
    title: number
    body: number
    createdAt: number
    scheduledFor: number
    _all: number
  }


  export type BroadcastMessageMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    scheduledFor?: true
  }

  export type BroadcastMessageMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    scheduledFor?: true
  }

  export type BroadcastMessageCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    scheduledFor?: true
    _all?: true
  }

  export type BroadcastMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastMessage to aggregate.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BroadcastMessages
    **/
    _count?: true | BroadcastMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BroadcastMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BroadcastMessageMaxAggregateInputType
  }

  export type GetBroadcastMessageAggregateType<T extends BroadcastMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcastMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcastMessage[P]>
      : GetScalarType<T[P], AggregateBroadcastMessage[P]>
  }




  export type BroadcastMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastMessageWhereInput
    orderBy?: BroadcastMessageOrderByWithAggregationInput | BroadcastMessageOrderByWithAggregationInput[]
    by: BroadcastMessageScalarFieldEnum[] | BroadcastMessageScalarFieldEnum
    having?: BroadcastMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BroadcastMessageCountAggregateInputType | true
    _min?: BroadcastMessageMinAggregateInputType
    _max?: BroadcastMessageMaxAggregateInputType
  }

  export type BroadcastMessageGroupByOutputType = {
    id: string
    title: string
    body: string
    createdAt: Date
    scheduledFor: Date | null
    _count: BroadcastMessageCountAggregateOutputType | null
    _min: BroadcastMessageMinAggregateOutputType | null
    _max: BroadcastMessageMaxAggregateOutputType | null
  }

  type GetBroadcastMessageGroupByPayload<T extends BroadcastMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcastMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BroadcastMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BroadcastMessageGroupByOutputType[P]>
            : GetScalarType<T[P], BroadcastMessageGroupByOutputType[P]>
        }
      >
    >


  export type BroadcastMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
    deliveries?: boolean | BroadcastMessage$deliveriesArgs<ExtArgs>
    _count?: boolean | BroadcastMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
  }

  export type BroadcastMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "createdAt" | "scheduledFor", ExtArgs["result"]["broadcastMessage"]>
  export type BroadcastMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | BroadcastMessage$deliveriesArgs<ExtArgs>
    _count?: boolean | BroadcastMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BroadcastMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BroadcastMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BroadcastMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BroadcastMessage"
    objects: {
      deliveries: Prisma.$MessageDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: string
      createdAt: Date
      scheduledFor: Date | null
    }, ExtArgs["result"]["broadcastMessage"]>
    composites: {}
  }

  type BroadcastMessageGetPayload<S extends boolean | null | undefined | BroadcastMessageDefaultArgs> = $Result.GetResult<Prisma.$BroadcastMessagePayload, S>

  type BroadcastMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcastMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcastMessageCountAggregateInputType | true
    }

  export interface BroadcastMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BroadcastMessage'], meta: { name: 'BroadcastMessage' } }
    /**
     * Find zero or one BroadcastMessage that matches the filter.
     * @param {BroadcastMessageFindUniqueArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcastMessageFindUniqueArgs>(args: SelectSubset<T, BroadcastMessageFindUniqueArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BroadcastMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcastMessageFindUniqueOrThrowArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcastMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, BroadcastMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindFirstArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcastMessageFindFirstArgs>(args?: SelectSubset<T, BroadcastMessageFindFirstArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindFirstOrThrowArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcastMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, BroadcastMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BroadcastMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BroadcastMessages
     * const broadcastMessages = await prisma.broadcastMessage.findMany()
     * 
     * // Get first 10 BroadcastMessages
     * const broadcastMessages = await prisma.broadcastMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BroadcastMessageFindManyArgs>(args?: SelectSubset<T, BroadcastMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BroadcastMessage.
     * @param {BroadcastMessageCreateArgs} args - Arguments to create a BroadcastMessage.
     * @example
     * // Create one BroadcastMessage
     * const BroadcastMessage = await prisma.broadcastMessage.create({
     *   data: {
     *     // ... data to create a BroadcastMessage
     *   }
     * })
     * 
     */
    create<T extends BroadcastMessageCreateArgs>(args: SelectSubset<T, BroadcastMessageCreateArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BroadcastMessages.
     * @param {BroadcastMessageCreateManyArgs} args - Arguments to create many BroadcastMessages.
     * @example
     * // Create many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BroadcastMessageCreateManyArgs>(args?: SelectSubset<T, BroadcastMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BroadcastMessages and returns the data saved in the database.
     * @param {BroadcastMessageCreateManyAndReturnArgs} args - Arguments to create many BroadcastMessages.
     * @example
     * // Create many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BroadcastMessages and only return the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BroadcastMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, BroadcastMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BroadcastMessage.
     * @param {BroadcastMessageDeleteArgs} args - Arguments to delete one BroadcastMessage.
     * @example
     * // Delete one BroadcastMessage
     * const BroadcastMessage = await prisma.broadcastMessage.delete({
     *   where: {
     *     // ... filter to delete one BroadcastMessage
     *   }
     * })
     * 
     */
    delete<T extends BroadcastMessageDeleteArgs>(args: SelectSubset<T, BroadcastMessageDeleteArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BroadcastMessage.
     * @param {BroadcastMessageUpdateArgs} args - Arguments to update one BroadcastMessage.
     * @example
     * // Update one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BroadcastMessageUpdateArgs>(args: SelectSubset<T, BroadcastMessageUpdateArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BroadcastMessages.
     * @param {BroadcastMessageDeleteManyArgs} args - Arguments to filter BroadcastMessages to delete.
     * @example
     * // Delete a few BroadcastMessages
     * const { count } = await prisma.broadcastMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BroadcastMessageDeleteManyArgs>(args?: SelectSubset<T, BroadcastMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BroadcastMessageUpdateManyArgs>(args: SelectSubset<T, BroadcastMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastMessages and returns the data updated in the database.
     * @param {BroadcastMessageUpdateManyAndReturnArgs} args - Arguments to update many BroadcastMessages.
     * @example
     * // Update many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BroadcastMessages and only return the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BroadcastMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, BroadcastMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BroadcastMessage.
     * @param {BroadcastMessageUpsertArgs} args - Arguments to update or create a BroadcastMessage.
     * @example
     * // Update or create a BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.upsert({
     *   create: {
     *     // ... data to create a BroadcastMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BroadcastMessage we want to update
     *   }
     * })
     */
    upsert<T extends BroadcastMessageUpsertArgs>(args: SelectSubset<T, BroadcastMessageUpsertArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BroadcastMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageCountArgs} args - Arguments to filter BroadcastMessages to count.
     * @example
     * // Count the number of BroadcastMessages
     * const count = await prisma.broadcastMessage.count({
     *   where: {
     *     // ... the filter for the BroadcastMessages we want to count
     *   }
     * })
    **/
    count<T extends BroadcastMessageCountArgs>(
      args?: Subset<T, BroadcastMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcastMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BroadcastMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BroadcastMessageAggregateArgs>(args: Subset<T, BroadcastMessageAggregateArgs>): Prisma.PrismaPromise<GetBroadcastMessageAggregateType<T>>

    /**
     * Group by BroadcastMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BroadcastMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcastMessageGroupByArgs['orderBy'] }
        : { orderBy?: BroadcastMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BroadcastMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcastMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BroadcastMessage model
   */
  readonly fields: BroadcastMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BroadcastMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcastMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends BroadcastMessage$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, BroadcastMessage$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BroadcastMessage model
   */
  interface BroadcastMessageFieldRefs {
    readonly id: FieldRef<"BroadcastMessage", 'String'>
    readonly title: FieldRef<"BroadcastMessage", 'String'>
    readonly body: FieldRef<"BroadcastMessage", 'String'>
    readonly createdAt: FieldRef<"BroadcastMessage", 'DateTime'>
    readonly scheduledFor: FieldRef<"BroadcastMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BroadcastMessage findUnique
   */
  export type BroadcastMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage findUniqueOrThrow
   */
  export type BroadcastMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage findFirst
   */
  export type BroadcastMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastMessages.
     */
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage findFirstOrThrow
   */
  export type BroadcastMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastMessages.
     */
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage findMany
   */
  export type BroadcastMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessages to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage create
   */
  export type BroadcastMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a BroadcastMessage.
     */
    data: XOR<BroadcastMessageCreateInput, BroadcastMessageUncheckedCreateInput>
  }

  /**
   * BroadcastMessage createMany
   */
  export type BroadcastMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BroadcastMessages.
     */
    data: BroadcastMessageCreateManyInput | BroadcastMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BroadcastMessage createManyAndReturn
   */
  export type BroadcastMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * The data used to create many BroadcastMessages.
     */
    data: BroadcastMessageCreateManyInput | BroadcastMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BroadcastMessage update
   */
  export type BroadcastMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a BroadcastMessage.
     */
    data: XOR<BroadcastMessageUpdateInput, BroadcastMessageUncheckedUpdateInput>
    /**
     * Choose, which BroadcastMessage to update.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage updateMany
   */
  export type BroadcastMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BroadcastMessages.
     */
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastMessages to update
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to update.
     */
    limit?: number
  }

  /**
   * BroadcastMessage updateManyAndReturn
   */
  export type BroadcastMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * The data used to update BroadcastMessages.
     */
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastMessages to update
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to update.
     */
    limit?: number
  }

  /**
   * BroadcastMessage upsert
   */
  export type BroadcastMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the BroadcastMessage to update in case it exists.
     */
    where: BroadcastMessageWhereUniqueInput
    /**
     * In case the BroadcastMessage found by the `where` argument doesn't exist, create a new BroadcastMessage with this data.
     */
    create: XOR<BroadcastMessageCreateInput, BroadcastMessageUncheckedCreateInput>
    /**
     * In case the BroadcastMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcastMessageUpdateInput, BroadcastMessageUncheckedUpdateInput>
  }

  /**
   * BroadcastMessage delete
   */
  export type BroadcastMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter which BroadcastMessage to delete.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage deleteMany
   */
  export type BroadcastMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastMessages to delete
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to delete.
     */
    limit?: number
  }

  /**
   * BroadcastMessage.deliveries
   */
  export type BroadcastMessage$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    where?: MessageDeliveryWhereInput
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    cursor?: MessageDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * BroadcastMessage without action
   */
  export type BroadcastMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageDelivery
   */

  export type AggregateMessageDelivery = {
    _count: MessageDeliveryCountAggregateOutputType | null
    _min: MessageDeliveryMinAggregateOutputType | null
    _max: MessageDeliveryMaxAggregateOutputType | null
  }

  export type MessageDeliveryMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    subscriptionId: string | null
    phoneNumber: string | null
    status: $Enums.DeliveryStatus | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageDeliveryMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    subscriptionId: string | null
    phoneNumber: string | null
    status: $Enums.DeliveryStatus | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageDeliveryCountAggregateOutputType = {
    id: number
    messageId: number
    subscriptionId: number
    phoneNumber: number
    status: number
    sentAt: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageDeliveryMinAggregateInputType = {
    id?: true
    messageId?: true
    subscriptionId?: true
    phoneNumber?: true
    status?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageDeliveryMaxAggregateInputType = {
    id?: true
    messageId?: true
    subscriptionId?: true
    phoneNumber?: true
    status?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageDeliveryCountAggregateInputType = {
    id?: true
    messageId?: true
    subscriptionId?: true
    phoneNumber?: true
    status?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageDelivery to aggregate.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageDeliveries
    **/
    _count?: true | MessageDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageDeliveryMaxAggregateInputType
  }

  export type GetMessageDeliveryAggregateType<T extends MessageDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageDelivery[P]>
      : GetScalarType<T[P], AggregateMessageDelivery[P]>
  }




  export type MessageDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageDeliveryWhereInput
    orderBy?: MessageDeliveryOrderByWithAggregationInput | MessageDeliveryOrderByWithAggregationInput[]
    by: MessageDeliveryScalarFieldEnum[] | MessageDeliveryScalarFieldEnum
    having?: MessageDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageDeliveryCountAggregateInputType | true
    _min?: MessageDeliveryMinAggregateInputType
    _max?: MessageDeliveryMaxAggregateInputType
  }

  export type MessageDeliveryGroupByOutputType = {
    id: string
    messageId: string
    subscriptionId: string
    phoneNumber: string
    status: $Enums.DeliveryStatus
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: MessageDeliveryCountAggregateOutputType | null
    _min: MessageDeliveryMinAggregateOutputType | null
    _max: MessageDeliveryMaxAggregateOutputType | null
  }

  type GetMessageDeliveryGroupByPayload<T extends MessageDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], MessageDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type MessageDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageDelivery"]>

  export type MessageDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageDelivery"]>

  export type MessageDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageDelivery"]>

  export type MessageDeliverySelectScalar = {
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "subscriptionId" | "phoneNumber" | "status" | "sentAt" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["messageDelivery"]>
  export type MessageDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }
  export type MessageDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }
  export type MessageDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }

  export type $MessageDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageDelivery"
    objects: {
      message: Prisma.$BroadcastMessagePayload<ExtArgs>
      subscription: Prisma.$MessageSubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      subscriptionId: string
      phoneNumber: string
      status: $Enums.DeliveryStatus
      sentAt: Date | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messageDelivery"]>
    composites: {}
  }

  type MessageDeliveryGetPayload<S extends boolean | null | undefined | MessageDeliveryDefaultArgs> = $Result.GetResult<Prisma.$MessageDeliveryPayload, S>

  type MessageDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageDeliveryCountAggregateInputType | true
    }

  export interface MessageDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageDelivery'], meta: { name: 'MessageDelivery' } }
    /**
     * Find zero or one MessageDelivery that matches the filter.
     * @param {MessageDeliveryFindUniqueArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageDeliveryFindUniqueArgs>(args: SelectSubset<T, MessageDeliveryFindUniqueArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageDeliveryFindUniqueOrThrowArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryFindFirstArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageDeliveryFindFirstArgs>(args?: SelectSubset<T, MessageDeliveryFindFirstArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryFindFirstOrThrowArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageDeliveries
     * const messageDeliveries = await prisma.messageDelivery.findMany()
     * 
     * // Get first 10 MessageDeliveries
     * const messageDeliveries = await prisma.messageDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageDeliveryWithIdOnly = await prisma.messageDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageDeliveryFindManyArgs>(args?: SelectSubset<T, MessageDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageDelivery.
     * @param {MessageDeliveryCreateArgs} args - Arguments to create a MessageDelivery.
     * @example
     * // Create one MessageDelivery
     * const MessageDelivery = await prisma.messageDelivery.create({
     *   data: {
     *     // ... data to create a MessageDelivery
     *   }
     * })
     * 
     */
    create<T extends MessageDeliveryCreateArgs>(args: SelectSubset<T, MessageDeliveryCreateArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageDeliveries.
     * @param {MessageDeliveryCreateManyArgs} args - Arguments to create many MessageDeliveries.
     * @example
     * // Create many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageDeliveryCreateManyArgs>(args?: SelectSubset<T, MessageDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageDeliveries and returns the data saved in the database.
     * @param {MessageDeliveryCreateManyAndReturnArgs} args - Arguments to create many MessageDeliveries.
     * @example
     * // Create many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageDeliveries and only return the `id`
     * const messageDeliveryWithIdOnly = await prisma.messageDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageDelivery.
     * @param {MessageDeliveryDeleteArgs} args - Arguments to delete one MessageDelivery.
     * @example
     * // Delete one MessageDelivery
     * const MessageDelivery = await prisma.messageDelivery.delete({
     *   where: {
     *     // ... filter to delete one MessageDelivery
     *   }
     * })
     * 
     */
    delete<T extends MessageDeliveryDeleteArgs>(args: SelectSubset<T, MessageDeliveryDeleteArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageDelivery.
     * @param {MessageDeliveryUpdateArgs} args - Arguments to update one MessageDelivery.
     * @example
     * // Update one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageDeliveryUpdateArgs>(args: SelectSubset<T, MessageDeliveryUpdateArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageDeliveries.
     * @param {MessageDeliveryDeleteManyArgs} args - Arguments to filter MessageDeliveries to delete.
     * @example
     * // Delete a few MessageDeliveries
     * const { count } = await prisma.messageDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeliveryDeleteManyArgs>(args?: SelectSubset<T, MessageDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageDeliveryUpdateManyArgs>(args: SelectSubset<T, MessageDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageDeliveries and returns the data updated in the database.
     * @param {MessageDeliveryUpdateManyAndReturnArgs} args - Arguments to update many MessageDeliveries.
     * @example
     * // Update many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageDeliveries and only return the `id`
     * const messageDeliveryWithIdOnly = await prisma.messageDelivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageDelivery.
     * @param {MessageDeliveryUpsertArgs} args - Arguments to update or create a MessageDelivery.
     * @example
     * // Update or create a MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.upsert({
     *   create: {
     *     // ... data to create a MessageDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageDelivery we want to update
     *   }
     * })
     */
    upsert<T extends MessageDeliveryUpsertArgs>(args: SelectSubset<T, MessageDeliveryUpsertArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryCountArgs} args - Arguments to filter MessageDeliveries to count.
     * @example
     * // Count the number of MessageDeliveries
     * const count = await prisma.messageDelivery.count({
     *   where: {
     *     // ... the filter for the MessageDeliveries we want to count
     *   }
     * })
    **/
    count<T extends MessageDeliveryCountArgs>(
      args?: Subset<T, MessageDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageDeliveryAggregateArgs>(args: Subset<T, MessageDeliveryAggregateArgs>): Prisma.PrismaPromise<GetMessageDeliveryAggregateType<T>>

    /**
     * Group by MessageDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: MessageDeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageDelivery model
   */
  readonly fields: MessageDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends BroadcastMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BroadcastMessageDefaultArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends MessageSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageSubscriptionDefaultArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageDelivery model
   */
  interface MessageDeliveryFieldRefs {
    readonly id: FieldRef<"MessageDelivery", 'String'>
    readonly messageId: FieldRef<"MessageDelivery", 'String'>
    readonly subscriptionId: FieldRef<"MessageDelivery", 'String'>
    readonly phoneNumber: FieldRef<"MessageDelivery", 'String'>
    readonly status: FieldRef<"MessageDelivery", 'DeliveryStatus'>
    readonly sentAt: FieldRef<"MessageDelivery", 'DateTime'>
    readonly errorMessage: FieldRef<"MessageDelivery", 'String'>
    readonly createdAt: FieldRef<"MessageDelivery", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageDelivery findUnique
   */
  export type MessageDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery findUniqueOrThrow
   */
  export type MessageDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery findFirst
   */
  export type MessageDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageDeliveries.
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageDeliveries.
     */
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageDelivery findFirstOrThrow
   */
  export type MessageDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageDeliveries.
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageDeliveries.
     */
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageDelivery findMany
   */
  export type MessageDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDeliveries to fetch.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageDeliveries.
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageDelivery create
   */
  export type MessageDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageDelivery.
     */
    data: XOR<MessageDeliveryCreateInput, MessageDeliveryUncheckedCreateInput>
  }

  /**
   * MessageDelivery createMany
   */
  export type MessageDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageDeliveries.
     */
    data: MessageDeliveryCreateManyInput | MessageDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageDelivery createManyAndReturn
   */
  export type MessageDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many MessageDeliveries.
     */
    data: MessageDeliveryCreateManyInput | MessageDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageDelivery update
   */
  export type MessageDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageDelivery.
     */
    data: XOR<MessageDeliveryUpdateInput, MessageDeliveryUncheckedUpdateInput>
    /**
     * Choose, which MessageDelivery to update.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery updateMany
   */
  export type MessageDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageDeliveries.
     */
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which MessageDeliveries to update
     */
    where?: MessageDeliveryWhereInput
    /**
     * Limit how many MessageDeliveries to update.
     */
    limit?: number
  }

  /**
   * MessageDelivery updateManyAndReturn
   */
  export type MessageDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update MessageDeliveries.
     */
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which MessageDeliveries to update
     */
    where?: MessageDeliveryWhereInput
    /**
     * Limit how many MessageDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageDelivery upsert
   */
  export type MessageDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageDelivery to update in case it exists.
     */
    where: MessageDeliveryWhereUniqueInput
    /**
     * In case the MessageDelivery found by the `where` argument doesn't exist, create a new MessageDelivery with this data.
     */
    create: XOR<MessageDeliveryCreateInput, MessageDeliveryUncheckedCreateInput>
    /**
     * In case the MessageDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageDeliveryUpdateInput, MessageDeliveryUncheckedUpdateInput>
  }

  /**
   * MessageDelivery delete
   */
  export type MessageDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter which MessageDelivery to delete.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery deleteMany
   */
  export type MessageDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageDeliveries to delete
     */
    where?: MessageDeliveryWhereInput
    /**
     * Limit how many MessageDeliveries to delete.
     */
    limit?: number
  }

  /**
   * MessageDelivery without action
   */
  export type MessageDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
  }


  /**
   * Model OwnerLoginSession
   */

  export type AggregateOwnerLoginSession = {
    _count: OwnerLoginSessionCountAggregateOutputType | null
    _avg: OwnerLoginSessionAvgAggregateOutputType | null
    _sum: OwnerLoginSessionSumAggregateOutputType | null
    _min: OwnerLoginSessionMinAggregateOutputType | null
    _max: OwnerLoginSessionMaxAggregateOutputType | null
  }

  export type OwnerLoginSessionAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    countryPopulation: number | null
    countryArea: number | null
  }

  export type OwnerLoginSessionSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    countryPopulation: number | null
    countryArea: number | null
  }

  export type OwnerLoginSessionMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    userAgent: string | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isSuccessful: boolean | null
    loginAt: Date | null
    timezone: string | null
    isp: string | null
    region: string | null
    deviceType: string | null
    deviceModel: string | null
    browserName: string | null
    browserVersion: string | null
    osName: string | null
    osVersion: string | null
    countryCode: string | null
    regionCode: string | null
    postal: string | null
    currency: string | null
    currencyName: string | null
    languages: string | null
    countryPopulation: number | null
    countryArea: number | null
    countryCapital: string | null
    continent: string | null
    isEu: boolean | null
    callingCode: string | null
    utcOffset: string | null
  }

  export type OwnerLoginSessionMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    userAgent: string | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isSuccessful: boolean | null
    loginAt: Date | null
    timezone: string | null
    isp: string | null
    region: string | null
    deviceType: string | null
    deviceModel: string | null
    browserName: string | null
    browserVersion: string | null
    osName: string | null
    osVersion: string | null
    countryCode: string | null
    regionCode: string | null
    postal: string | null
    currency: string | null
    currencyName: string | null
    languages: string | null
    countryPopulation: number | null
    countryArea: number | null
    countryCapital: string | null
    continent: string | null
    isEu: boolean | null
    callingCode: string | null
    utcOffset: string | null
  }

  export type OwnerLoginSessionCountAggregateOutputType = {
    id: number
    ownerId: number
    deviceInfo: number
    ipAddress: number
    location: number
    userAgent: number
    browser: number
    os: number
    device: number
    country: number
    city: number
    latitude: number
    longitude: number
    isSuccessful: number
    loginAt: number
    timezone: number
    isp: number
    region: number
    deviceType: number
    deviceModel: number
    browserName: number
    browserVersion: number
    osName: number
    osVersion: number
    countryCode: number
    regionCode: number
    postal: number
    currency: number
    currencyName: number
    languages: number
    countryPopulation: number
    countryArea: number
    countryCapital: number
    continent: number
    isEu: number
    callingCode: number
    utcOffset: number
    _all: number
  }


  export type OwnerLoginSessionAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    countryPopulation?: true
    countryArea?: true
  }

  export type OwnerLoginSessionSumAggregateInputType = {
    latitude?: true
    longitude?: true
    countryPopulation?: true
    countryArea?: true
  }

  export type OwnerLoginSessionMinAggregateInputType = {
    id?: true
    ownerId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    userAgent?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    isSuccessful?: true
    loginAt?: true
    timezone?: true
    isp?: true
    region?: true
    deviceType?: true
    deviceModel?: true
    browserName?: true
    browserVersion?: true
    osName?: true
    osVersion?: true
    countryCode?: true
    regionCode?: true
    postal?: true
    currency?: true
    currencyName?: true
    languages?: true
    countryPopulation?: true
    countryArea?: true
    countryCapital?: true
    continent?: true
    isEu?: true
    callingCode?: true
    utcOffset?: true
  }

  export type OwnerLoginSessionMaxAggregateInputType = {
    id?: true
    ownerId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    userAgent?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    isSuccessful?: true
    loginAt?: true
    timezone?: true
    isp?: true
    region?: true
    deviceType?: true
    deviceModel?: true
    browserName?: true
    browserVersion?: true
    osName?: true
    osVersion?: true
    countryCode?: true
    regionCode?: true
    postal?: true
    currency?: true
    currencyName?: true
    languages?: true
    countryPopulation?: true
    countryArea?: true
    countryCapital?: true
    continent?: true
    isEu?: true
    callingCode?: true
    utcOffset?: true
  }

  export type OwnerLoginSessionCountAggregateInputType = {
    id?: true
    ownerId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    userAgent?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    isSuccessful?: true
    loginAt?: true
    timezone?: true
    isp?: true
    region?: true
    deviceType?: true
    deviceModel?: true
    browserName?: true
    browserVersion?: true
    osName?: true
    osVersion?: true
    countryCode?: true
    regionCode?: true
    postal?: true
    currency?: true
    currencyName?: true
    languages?: true
    countryPopulation?: true
    countryArea?: true
    countryCapital?: true
    continent?: true
    isEu?: true
    callingCode?: true
    utcOffset?: true
    _all?: true
  }

  export type OwnerLoginSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerLoginSession to aggregate.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnerLoginSessions
    **/
    _count?: true | OwnerLoginSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerLoginSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerLoginSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerLoginSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerLoginSessionMaxAggregateInputType
  }

  export type GetOwnerLoginSessionAggregateType<T extends OwnerLoginSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnerLoginSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnerLoginSession[P]>
      : GetScalarType<T[P], AggregateOwnerLoginSession[P]>
  }




  export type OwnerLoginSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerLoginSessionWhereInput
    orderBy?: OwnerLoginSessionOrderByWithAggregationInput | OwnerLoginSessionOrderByWithAggregationInput[]
    by: OwnerLoginSessionScalarFieldEnum[] | OwnerLoginSessionScalarFieldEnum
    having?: OwnerLoginSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerLoginSessionCountAggregateInputType | true
    _avg?: OwnerLoginSessionAvgAggregateInputType
    _sum?: OwnerLoginSessionSumAggregateInputType
    _min?: OwnerLoginSessionMinAggregateInputType
    _max?: OwnerLoginSessionMaxAggregateInputType
  }

  export type OwnerLoginSessionGroupByOutputType = {
    id: string
    ownerId: string
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    userAgent: string | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isSuccessful: boolean
    loginAt: Date
    timezone: string | null
    isp: string | null
    region: string | null
    deviceType: string | null
    deviceModel: string | null
    browserName: string | null
    browserVersion: string | null
    osName: string | null
    osVersion: string | null
    countryCode: string | null
    regionCode: string | null
    postal: string | null
    currency: string | null
    currencyName: string | null
    languages: string | null
    countryPopulation: number | null
    countryArea: number | null
    countryCapital: string | null
    continent: string | null
    isEu: boolean | null
    callingCode: string | null
    utcOffset: string | null
    _count: OwnerLoginSessionCountAggregateOutputType | null
    _avg: OwnerLoginSessionAvgAggregateOutputType | null
    _sum: OwnerLoginSessionSumAggregateOutputType | null
    _min: OwnerLoginSessionMinAggregateOutputType | null
    _max: OwnerLoginSessionMaxAggregateOutputType | null
  }

  type GetOwnerLoginSessionGroupByPayload<T extends OwnerLoginSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerLoginSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerLoginSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerLoginSessionGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerLoginSessionGroupByOutputType[P]>
        }
      >
    >


  export type OwnerLoginSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerLoginSession"]>

  export type OwnerLoginSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerLoginSession"]>

  export type OwnerLoginSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerLoginSession"]>

  export type OwnerLoginSessionSelectScalar = {
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
  }

  export type OwnerLoginSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "deviceInfo" | "ipAddress" | "location" | "userAgent" | "browser" | "os" | "device" | "country" | "city" | "latitude" | "longitude" | "isSuccessful" | "loginAt" | "timezone" | "isp" | "region" | "deviceType" | "deviceModel" | "browserName" | "browserVersion" | "osName" | "osVersion" | "countryCode" | "regionCode" | "postal" | "currency" | "currencyName" | "languages" | "countryPopulation" | "countryArea" | "countryCapital" | "continent" | "isEu" | "callingCode" | "utcOffset", ExtArgs["result"]["ownerLoginSession"]>
  export type OwnerLoginSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type OwnerLoginSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type OwnerLoginSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $OwnerLoginSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnerLoginSession"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      deviceInfo: string | null
      ipAddress: string | null
      location: string | null
      userAgent: string | null
      browser: string | null
      os: string | null
      device: string | null
      country: string | null
      city: string | null
      latitude: number | null
      longitude: number | null
      isSuccessful: boolean
      loginAt: Date
      timezone: string | null
      isp: string | null
      region: string | null
      deviceType: string | null
      deviceModel: string | null
      browserName: string | null
      browserVersion: string | null
      osName: string | null
      osVersion: string | null
      countryCode: string | null
      regionCode: string | null
      postal: string | null
      currency: string | null
      currencyName: string | null
      languages: string | null
      countryPopulation: number | null
      countryArea: number | null
      countryCapital: string | null
      continent: string | null
      isEu: boolean | null
      callingCode: string | null
      utcOffset: string | null
    }, ExtArgs["result"]["ownerLoginSession"]>
    composites: {}
  }

  type OwnerLoginSessionGetPayload<S extends boolean | null | undefined | OwnerLoginSessionDefaultArgs> = $Result.GetResult<Prisma.$OwnerLoginSessionPayload, S>

  type OwnerLoginSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerLoginSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerLoginSessionCountAggregateInputType | true
    }

  export interface OwnerLoginSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnerLoginSession'], meta: { name: 'OwnerLoginSession' } }
    /**
     * Find zero or one OwnerLoginSession that matches the filter.
     * @param {OwnerLoginSessionFindUniqueArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerLoginSessionFindUniqueArgs>(args: SelectSubset<T, OwnerLoginSessionFindUniqueArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnerLoginSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerLoginSessionFindUniqueOrThrowArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerLoginSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerLoginSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerLoginSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionFindFirstArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerLoginSessionFindFirstArgs>(args?: SelectSubset<T, OwnerLoginSessionFindFirstArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerLoginSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionFindFirstOrThrowArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerLoginSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerLoginSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnerLoginSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnerLoginSessions
     * const ownerLoginSessions = await prisma.ownerLoginSession.findMany()
     * 
     * // Get first 10 OwnerLoginSessions
     * const ownerLoginSessions = await prisma.ownerLoginSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerLoginSessionWithIdOnly = await prisma.ownerLoginSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerLoginSessionFindManyArgs>(args?: SelectSubset<T, OwnerLoginSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnerLoginSession.
     * @param {OwnerLoginSessionCreateArgs} args - Arguments to create a OwnerLoginSession.
     * @example
     * // Create one OwnerLoginSession
     * const OwnerLoginSession = await prisma.ownerLoginSession.create({
     *   data: {
     *     // ... data to create a OwnerLoginSession
     *   }
     * })
     * 
     */
    create<T extends OwnerLoginSessionCreateArgs>(args: SelectSubset<T, OwnerLoginSessionCreateArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnerLoginSessions.
     * @param {OwnerLoginSessionCreateManyArgs} args - Arguments to create many OwnerLoginSessions.
     * @example
     * // Create many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerLoginSessionCreateManyArgs>(args?: SelectSubset<T, OwnerLoginSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnerLoginSessions and returns the data saved in the database.
     * @param {OwnerLoginSessionCreateManyAndReturnArgs} args - Arguments to create many OwnerLoginSessions.
     * @example
     * // Create many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnerLoginSessions and only return the `id`
     * const ownerLoginSessionWithIdOnly = await prisma.ownerLoginSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerLoginSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerLoginSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnerLoginSession.
     * @param {OwnerLoginSessionDeleteArgs} args - Arguments to delete one OwnerLoginSession.
     * @example
     * // Delete one OwnerLoginSession
     * const OwnerLoginSession = await prisma.ownerLoginSession.delete({
     *   where: {
     *     // ... filter to delete one OwnerLoginSession
     *   }
     * })
     * 
     */
    delete<T extends OwnerLoginSessionDeleteArgs>(args: SelectSubset<T, OwnerLoginSessionDeleteArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnerLoginSession.
     * @param {OwnerLoginSessionUpdateArgs} args - Arguments to update one OwnerLoginSession.
     * @example
     * // Update one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerLoginSessionUpdateArgs>(args: SelectSubset<T, OwnerLoginSessionUpdateArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnerLoginSessions.
     * @param {OwnerLoginSessionDeleteManyArgs} args - Arguments to filter OwnerLoginSessions to delete.
     * @example
     * // Delete a few OwnerLoginSessions
     * const { count } = await prisma.ownerLoginSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerLoginSessionDeleteManyArgs>(args?: SelectSubset<T, OwnerLoginSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerLoginSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerLoginSessionUpdateManyArgs>(args: SelectSubset<T, OwnerLoginSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerLoginSessions and returns the data updated in the database.
     * @param {OwnerLoginSessionUpdateManyAndReturnArgs} args - Arguments to update many OwnerLoginSessions.
     * @example
     * // Update many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnerLoginSessions and only return the `id`
     * const ownerLoginSessionWithIdOnly = await prisma.ownerLoginSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerLoginSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerLoginSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnerLoginSession.
     * @param {OwnerLoginSessionUpsertArgs} args - Arguments to update or create a OwnerLoginSession.
     * @example
     * // Update or create a OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.upsert({
     *   create: {
     *     // ... data to create a OwnerLoginSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnerLoginSession we want to update
     *   }
     * })
     */
    upsert<T extends OwnerLoginSessionUpsertArgs>(args: SelectSubset<T, OwnerLoginSessionUpsertArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnerLoginSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionCountArgs} args - Arguments to filter OwnerLoginSessions to count.
     * @example
     * // Count the number of OwnerLoginSessions
     * const count = await prisma.ownerLoginSession.count({
     *   where: {
     *     // ... the filter for the OwnerLoginSessions we want to count
     *   }
     * })
    **/
    count<T extends OwnerLoginSessionCountArgs>(
      args?: Subset<T, OwnerLoginSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerLoginSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnerLoginSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerLoginSessionAggregateArgs>(args: Subset<T, OwnerLoginSessionAggregateArgs>): Prisma.PrismaPromise<GetOwnerLoginSessionAggregateType<T>>

    /**
     * Group by OwnerLoginSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerLoginSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerLoginSessionGroupByArgs['orderBy'] }
        : { orderBy?: OwnerLoginSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerLoginSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerLoginSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnerLoginSession model
   */
  readonly fields: OwnerLoginSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnerLoginSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerLoginSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OwnerLoginSession model
   */
  interface OwnerLoginSessionFieldRefs {
    readonly id: FieldRef<"OwnerLoginSession", 'String'>
    readonly ownerId: FieldRef<"OwnerLoginSession", 'String'>
    readonly deviceInfo: FieldRef<"OwnerLoginSession", 'String'>
    readonly ipAddress: FieldRef<"OwnerLoginSession", 'String'>
    readonly location: FieldRef<"OwnerLoginSession", 'String'>
    readonly userAgent: FieldRef<"OwnerLoginSession", 'String'>
    readonly browser: FieldRef<"OwnerLoginSession", 'String'>
    readonly os: FieldRef<"OwnerLoginSession", 'String'>
    readonly device: FieldRef<"OwnerLoginSession", 'String'>
    readonly country: FieldRef<"OwnerLoginSession", 'String'>
    readonly city: FieldRef<"OwnerLoginSession", 'String'>
    readonly latitude: FieldRef<"OwnerLoginSession", 'Float'>
    readonly longitude: FieldRef<"OwnerLoginSession", 'Float'>
    readonly isSuccessful: FieldRef<"OwnerLoginSession", 'Boolean'>
    readonly loginAt: FieldRef<"OwnerLoginSession", 'DateTime'>
    readonly timezone: FieldRef<"OwnerLoginSession", 'String'>
    readonly isp: FieldRef<"OwnerLoginSession", 'String'>
    readonly region: FieldRef<"OwnerLoginSession", 'String'>
    readonly deviceType: FieldRef<"OwnerLoginSession", 'String'>
    readonly deviceModel: FieldRef<"OwnerLoginSession", 'String'>
    readonly browserName: FieldRef<"OwnerLoginSession", 'String'>
    readonly browserVersion: FieldRef<"OwnerLoginSession", 'String'>
    readonly osName: FieldRef<"OwnerLoginSession", 'String'>
    readonly osVersion: FieldRef<"OwnerLoginSession", 'String'>
    readonly countryCode: FieldRef<"OwnerLoginSession", 'String'>
    readonly regionCode: FieldRef<"OwnerLoginSession", 'String'>
    readonly postal: FieldRef<"OwnerLoginSession", 'String'>
    readonly currency: FieldRef<"OwnerLoginSession", 'String'>
    readonly currencyName: FieldRef<"OwnerLoginSession", 'String'>
    readonly languages: FieldRef<"OwnerLoginSession", 'String'>
    readonly countryPopulation: FieldRef<"OwnerLoginSession", 'Int'>
    readonly countryArea: FieldRef<"OwnerLoginSession", 'Int'>
    readonly countryCapital: FieldRef<"OwnerLoginSession", 'String'>
    readonly continent: FieldRef<"OwnerLoginSession", 'String'>
    readonly isEu: FieldRef<"OwnerLoginSession", 'Boolean'>
    readonly callingCode: FieldRef<"OwnerLoginSession", 'String'>
    readonly utcOffset: FieldRef<"OwnerLoginSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OwnerLoginSession findUnique
   */
  export type OwnerLoginSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession findUniqueOrThrow
   */
  export type OwnerLoginSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession findFirst
   */
  export type OwnerLoginSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerLoginSessions.
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerLoginSessions.
     */
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * OwnerLoginSession findFirstOrThrow
   */
  export type OwnerLoginSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerLoginSessions.
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerLoginSessions.
     */
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * OwnerLoginSession findMany
   */
  export type OwnerLoginSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSessions to fetch.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnerLoginSessions.
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * OwnerLoginSession create
   */
  export type OwnerLoginSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a OwnerLoginSession.
     */
    data: XOR<OwnerLoginSessionCreateInput, OwnerLoginSessionUncheckedCreateInput>
  }

  /**
   * OwnerLoginSession createMany
   */
  export type OwnerLoginSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnerLoginSessions.
     */
    data: OwnerLoginSessionCreateManyInput | OwnerLoginSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnerLoginSession createManyAndReturn
   */
  export type OwnerLoginSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * The data used to create many OwnerLoginSessions.
     */
    data: OwnerLoginSessionCreateManyInput | OwnerLoginSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerLoginSession update
   */
  export type OwnerLoginSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a OwnerLoginSession.
     */
    data: XOR<OwnerLoginSessionUpdateInput, OwnerLoginSessionUncheckedUpdateInput>
    /**
     * Choose, which OwnerLoginSession to update.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession updateMany
   */
  export type OwnerLoginSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnerLoginSessions.
     */
    data: XOR<OwnerLoginSessionUpdateManyMutationInput, OwnerLoginSessionUncheckedUpdateManyInput>
    /**
     * Filter which OwnerLoginSessions to update
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * Limit how many OwnerLoginSessions to update.
     */
    limit?: number
  }

  /**
   * OwnerLoginSession updateManyAndReturn
   */
  export type OwnerLoginSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * The data used to update OwnerLoginSessions.
     */
    data: XOR<OwnerLoginSessionUpdateManyMutationInput, OwnerLoginSessionUncheckedUpdateManyInput>
    /**
     * Filter which OwnerLoginSessions to update
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * Limit how many OwnerLoginSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerLoginSession upsert
   */
  export type OwnerLoginSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the OwnerLoginSession to update in case it exists.
     */
    where: OwnerLoginSessionWhereUniqueInput
    /**
     * In case the OwnerLoginSession found by the `where` argument doesn't exist, create a new OwnerLoginSession with this data.
     */
    create: XOR<OwnerLoginSessionCreateInput, OwnerLoginSessionUncheckedCreateInput>
    /**
     * In case the OwnerLoginSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerLoginSessionUpdateInput, OwnerLoginSessionUncheckedUpdateInput>
  }

  /**
   * OwnerLoginSession delete
   */
  export type OwnerLoginSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter which OwnerLoginSession to delete.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession deleteMany
   */
  export type OwnerLoginSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerLoginSessions to delete
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * Limit how many OwnerLoginSessions to delete.
     */
    limit?: number
  }

  /**
   * OwnerLoginSession without action
   */
  export type OwnerLoginSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
  }


  /**
   * Model FormDraft
   */

  export type AggregateFormDraft = {
    _count: FormDraftCountAggregateOutputType | null
    _min: FormDraftMinAggregateOutputType | null
    _max: FormDraftMaxAggregateOutputType | null
  }

  export type FormDraftMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    country: string | null
    preferredFood: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    birthDate: Date | null
  }

  export type FormDraftMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    country: string | null
    preferredFood: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    birthDate: Date | null
  }

  export type FormDraftCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phoneNumber: number
    email: number
    city: number
    street: number
    postalCode: number
    houseNumber: number
    country: number
    preferredFood: number
    feedback: number
    createdAt: number
    updatedAt: number
    birthDate: number
    _all: number
  }


  export type FormDraftMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    country?: true
    preferredFood?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    birthDate?: true
  }

  export type FormDraftMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    country?: true
    preferredFood?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    birthDate?: true
  }

  export type FormDraftCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    country?: true
    preferredFood?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    birthDate?: true
    _all?: true
  }

  export type FormDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormDraft to aggregate.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormDrafts
    **/
    _count?: true | FormDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormDraftMaxAggregateInputType
  }

  export type GetFormDraftAggregateType<T extends FormDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateFormDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormDraft[P]>
      : GetScalarType<T[P], AggregateFormDraft[P]>
  }




  export type FormDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormDraftWhereInput
    orderBy?: FormDraftOrderByWithAggregationInput | FormDraftOrderByWithAggregationInput[]
    by: FormDraftScalarFieldEnum[] | FormDraftScalarFieldEnum
    having?: FormDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormDraftCountAggregateInputType | true
    _min?: FormDraftMinAggregateInputType
    _max?: FormDraftMaxAggregateInputType
  }

  export type FormDraftGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    country: string | null
    preferredFood: string | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    birthDate: Date | null
    _count: FormDraftCountAggregateOutputType | null
    _min: FormDraftMinAggregateOutputType | null
    _max: FormDraftMaxAggregateOutputType | null
  }

  type GetFormDraftGroupByPayload<T extends FormDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormDraftGroupByOutputType[P]>
            : GetScalarType<T[P], FormDraftGroupByOutputType[P]>
        }
      >
    >


  export type FormDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthDate?: boolean
  }, ExtArgs["result"]["formDraft"]>

  export type FormDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthDate?: boolean
  }, ExtArgs["result"]["formDraft"]>

  export type FormDraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthDate?: boolean
  }, ExtArgs["result"]["formDraft"]>

  export type FormDraftSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthDate?: boolean
  }

  export type FormDraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phoneNumber" | "email" | "city" | "street" | "postalCode" | "houseNumber" | "country" | "preferredFood" | "feedback" | "createdAt" | "updatedAt" | "birthDate", ExtArgs["result"]["formDraft"]>

  export type $FormDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormDraft"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      email: string | null
      city: string | null
      street: string | null
      postalCode: string | null
      houseNumber: string | null
      country: string | null
      preferredFood: string | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
      birthDate: Date | null
    }, ExtArgs["result"]["formDraft"]>
    composites: {}
  }

  type FormDraftGetPayload<S extends boolean | null | undefined | FormDraftDefaultArgs> = $Result.GetResult<Prisma.$FormDraftPayload, S>

  type FormDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormDraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormDraftCountAggregateInputType | true
    }

  export interface FormDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormDraft'], meta: { name: 'FormDraft' } }
    /**
     * Find zero or one FormDraft that matches the filter.
     * @param {FormDraftFindUniqueArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormDraftFindUniqueArgs>(args: SelectSubset<T, FormDraftFindUniqueArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormDraft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormDraftFindUniqueOrThrowArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, FormDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftFindFirstArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormDraftFindFirstArgs>(args?: SelectSubset<T, FormDraftFindFirstArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftFindFirstOrThrowArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, FormDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormDrafts
     * const formDrafts = await prisma.formDraft.findMany()
     * 
     * // Get first 10 FormDrafts
     * const formDrafts = await prisma.formDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formDraftWithIdOnly = await prisma.formDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormDraftFindManyArgs>(args?: SelectSubset<T, FormDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormDraft.
     * @param {FormDraftCreateArgs} args - Arguments to create a FormDraft.
     * @example
     * // Create one FormDraft
     * const FormDraft = await prisma.formDraft.create({
     *   data: {
     *     // ... data to create a FormDraft
     *   }
     * })
     * 
     */
    create<T extends FormDraftCreateArgs>(args: SelectSubset<T, FormDraftCreateArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormDrafts.
     * @param {FormDraftCreateManyArgs} args - Arguments to create many FormDrafts.
     * @example
     * // Create many FormDrafts
     * const formDraft = await prisma.formDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormDraftCreateManyArgs>(args?: SelectSubset<T, FormDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormDrafts and returns the data saved in the database.
     * @param {FormDraftCreateManyAndReturnArgs} args - Arguments to create many FormDrafts.
     * @example
     * // Create many FormDrafts
     * const formDraft = await prisma.formDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormDrafts and only return the `id`
     * const formDraftWithIdOnly = await prisma.formDraft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, FormDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormDraft.
     * @param {FormDraftDeleteArgs} args - Arguments to delete one FormDraft.
     * @example
     * // Delete one FormDraft
     * const FormDraft = await prisma.formDraft.delete({
     *   where: {
     *     // ... filter to delete one FormDraft
     *   }
     * })
     * 
     */
    delete<T extends FormDraftDeleteArgs>(args: SelectSubset<T, FormDraftDeleteArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormDraft.
     * @param {FormDraftUpdateArgs} args - Arguments to update one FormDraft.
     * @example
     * // Update one FormDraft
     * const formDraft = await prisma.formDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormDraftUpdateArgs>(args: SelectSubset<T, FormDraftUpdateArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormDrafts.
     * @param {FormDraftDeleteManyArgs} args - Arguments to filter FormDrafts to delete.
     * @example
     * // Delete a few FormDrafts
     * const { count } = await prisma.formDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDraftDeleteManyArgs>(args?: SelectSubset<T, FormDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormDrafts
     * const formDraft = await prisma.formDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormDraftUpdateManyArgs>(args: SelectSubset<T, FormDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormDrafts and returns the data updated in the database.
     * @param {FormDraftUpdateManyAndReturnArgs} args - Arguments to update many FormDrafts.
     * @example
     * // Update many FormDrafts
     * const formDraft = await prisma.formDraft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormDrafts and only return the `id`
     * const formDraftWithIdOnly = await prisma.formDraft.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormDraftUpdateManyAndReturnArgs>(args: SelectSubset<T, FormDraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormDraft.
     * @param {FormDraftUpsertArgs} args - Arguments to update or create a FormDraft.
     * @example
     * // Update or create a FormDraft
     * const formDraft = await prisma.formDraft.upsert({
     *   create: {
     *     // ... data to create a FormDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormDraft we want to update
     *   }
     * })
     */
    upsert<T extends FormDraftUpsertArgs>(args: SelectSubset<T, FormDraftUpsertArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftCountArgs} args - Arguments to filter FormDrafts to count.
     * @example
     * // Count the number of FormDrafts
     * const count = await prisma.formDraft.count({
     *   where: {
     *     // ... the filter for the FormDrafts we want to count
     *   }
     * })
    **/
    count<T extends FormDraftCountArgs>(
      args?: Subset<T, FormDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormDraftAggregateArgs>(args: Subset<T, FormDraftAggregateArgs>): Prisma.PrismaPromise<GetFormDraftAggregateType<T>>

    /**
     * Group by FormDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormDraftGroupByArgs['orderBy'] }
        : { orderBy?: FormDraftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormDraft model
   */
  readonly fields: FormDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormDraft model
   */
  interface FormDraftFieldRefs {
    readonly id: FieldRef<"FormDraft", 'String'>
    readonly firstName: FieldRef<"FormDraft", 'String'>
    readonly lastName: FieldRef<"FormDraft", 'String'>
    readonly phoneNumber: FieldRef<"FormDraft", 'String'>
    readonly email: FieldRef<"FormDraft", 'String'>
    readonly city: FieldRef<"FormDraft", 'String'>
    readonly street: FieldRef<"FormDraft", 'String'>
    readonly postalCode: FieldRef<"FormDraft", 'String'>
    readonly houseNumber: FieldRef<"FormDraft", 'String'>
    readonly country: FieldRef<"FormDraft", 'String'>
    readonly preferredFood: FieldRef<"FormDraft", 'String'>
    readonly feedback: FieldRef<"FormDraft", 'String'>
    readonly createdAt: FieldRef<"FormDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"FormDraft", 'DateTime'>
    readonly birthDate: FieldRef<"FormDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormDraft findUnique
   */
  export type FormDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft findUniqueOrThrow
   */
  export type FormDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft findFirst
   */
  export type FormDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormDrafts.
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormDrafts.
     */
    distinct?: FormDraftScalarFieldEnum | FormDraftScalarFieldEnum[]
  }

  /**
   * FormDraft findFirstOrThrow
   */
  export type FormDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormDrafts.
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormDrafts.
     */
    distinct?: FormDraftScalarFieldEnum | FormDraftScalarFieldEnum[]
  }

  /**
   * FormDraft findMany
   */
  export type FormDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDrafts to fetch.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormDrafts.
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    distinct?: FormDraftScalarFieldEnum | FormDraftScalarFieldEnum[]
  }

  /**
   * FormDraft create
   */
  export type FormDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data needed to create a FormDraft.
     */
    data: XOR<FormDraftCreateInput, FormDraftUncheckedCreateInput>
  }

  /**
   * FormDraft createMany
   */
  export type FormDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormDrafts.
     */
    data: FormDraftCreateManyInput | FormDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormDraft createManyAndReturn
   */
  export type FormDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data used to create many FormDrafts.
     */
    data: FormDraftCreateManyInput | FormDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormDraft update
   */
  export type FormDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data needed to update a FormDraft.
     */
    data: XOR<FormDraftUpdateInput, FormDraftUncheckedUpdateInput>
    /**
     * Choose, which FormDraft to update.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft updateMany
   */
  export type FormDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormDrafts.
     */
    data: XOR<FormDraftUpdateManyMutationInput, FormDraftUncheckedUpdateManyInput>
    /**
     * Filter which FormDrafts to update
     */
    where?: FormDraftWhereInput
    /**
     * Limit how many FormDrafts to update.
     */
    limit?: number
  }

  /**
   * FormDraft updateManyAndReturn
   */
  export type FormDraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data used to update FormDrafts.
     */
    data: XOR<FormDraftUpdateManyMutationInput, FormDraftUncheckedUpdateManyInput>
    /**
     * Filter which FormDrafts to update
     */
    where?: FormDraftWhereInput
    /**
     * Limit how many FormDrafts to update.
     */
    limit?: number
  }

  /**
   * FormDraft upsert
   */
  export type FormDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The filter to search for the FormDraft to update in case it exists.
     */
    where: FormDraftWhereUniqueInput
    /**
     * In case the FormDraft found by the `where` argument doesn't exist, create a new FormDraft with this data.
     */
    create: XOR<FormDraftCreateInput, FormDraftUncheckedCreateInput>
    /**
     * In case the FormDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormDraftUpdateInput, FormDraftUncheckedUpdateInput>
  }

  /**
   * FormDraft delete
   */
  export type FormDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter which FormDraft to delete.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft deleteMany
   */
  export type FormDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormDrafts to delete
     */
    where?: FormDraftWhereInput
    /**
     * Limit how many FormDrafts to delete.
     */
    limit?: number
  }

  /**
   * FormDraft without action
   */
  export type FormDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: number | null
    name_ru: string | null
    name_en: string | null
    name_uk: string | null
    name_nl: string | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: number | null
    name_ru: string | null
    name_en: string | null
    name_uk: string | null
    name_nl: string | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name_ru: number
    name_en: number
    name_uk: number
    name_nl: number
    _all: number
  }


  export type ProductCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ProductCategorySumAggregateInputType = {
    id?: true
  }

  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name_ru?: true
    name_en?: true
    name_uk?: true
    name_nl?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name_ru?: true
    name_en?: true
    name_uk?: true
    name_nl?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name_ru?: true
    name_en?: true
    name_uk?: true
    name_nl?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _avg?: ProductCategoryAvgAggregateInputType
    _sum?: ProductCategorySumAggregateInputType
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: number
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    name_ru?: boolean
    name_en?: boolean
    name_uk?: boolean
    name_nl?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_ru" | "name_en" | "name_uk" | "name_nl", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_ru: string
      name_en: string
      name_uk: string
      name_nl: string
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCategories and returns the data saved in the database.
     * @param {ProductCategoryCreateManyAndReturnArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories and returns the data updated in the database.
     * @param {ProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProductCategories.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'Int'>
    readonly name_ru: FieldRef<"ProductCategory", 'String'>
    readonly name_en: FieldRef<"ProductCategory", 'String'>
    readonly name_uk: FieldRef<"ProductCategory", 'String'>
    readonly name_nl: FieldRef<"ProductCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory createManyAndReturn
   */
  export type ProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory updateManyAndReturn
   */
  export type ProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.products
   */
  export type ProductCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FavoriteProductScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type FavoriteProductScalarFieldEnum = (typeof FavoriteProductScalarFieldEnum)[keyof typeof FavoriteProductScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    price: 'price',
    imageUrl: 'imageUrl',
    name_ru: 'name_ru',
    name_en: 'name_en',
    name_uk: 'name_uk',
    name_nl: 'name_nl',
    ingredients_ru: 'ingredients_ru',
    ingredients_en: 'ingredients_en',
    ingredients_uk: 'ingredients_uk',
    ingredients_nl: 'ingredients_nl',
    isPopular: 'isPopular',
    isChefRecommendation: 'isChefRecommendation',
    isPromotion: 'isPromotion',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    languageCode: 'languageCode',
    firstName: 'firstName',
    lastName: 'lastName',
    country: 'country',
    phoneNumber: 'phoneNumber',
    email: 'email',
    birthDate: 'birthDate',
    city: 'city',
    street: 'street',
    postalCode: 'postalCode',
    houseNumber: 'houseNumber',
    preferredFood: 'preferredFood',
    feedback: 'feedback',
    discountCode: 'discountCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isEmailVerified: 'isEmailVerified',
    emailVerificationCode: 'emailVerificationCode',
    marketingConsent: 'marketingConsent',
    lastBirthdayGreetingSent: 'lastBirthdayGreetingSent'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    totalPrice: 'totalPrice',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderLineItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderLineItemScalarFieldEnum = (typeof OrderLineItemScalarFieldEnum)[keyof typeof OrderLineItemScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    accessCode: 'accessCode',
    password: 'password',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerificationCode: 'emailVerificationCode',
    isEmailVerified: 'isEmailVerified'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const MessageSubscriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    subscribed: 'subscribed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageSubscriptionScalarFieldEnum = (typeof MessageSubscriptionScalarFieldEnum)[keyof typeof MessageSubscriptionScalarFieldEnum]


  export const BroadcastMessageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    createdAt: 'createdAt',
    scheduledFor: 'scheduledFor'
  };

  export type BroadcastMessageScalarFieldEnum = (typeof BroadcastMessageScalarFieldEnum)[keyof typeof BroadcastMessageScalarFieldEnum]


  export const MessageDeliveryScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    subscriptionId: 'subscriptionId',
    phoneNumber: 'phoneNumber',
    status: 'status',
    sentAt: 'sentAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageDeliveryScalarFieldEnum = (typeof MessageDeliveryScalarFieldEnum)[keyof typeof MessageDeliveryScalarFieldEnum]


  export const OwnerLoginSessionScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    location: 'location',
    userAgent: 'userAgent',
    browser: 'browser',
    os: 'os',
    device: 'device',
    country: 'country',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    isSuccessful: 'isSuccessful',
    loginAt: 'loginAt',
    timezone: 'timezone',
    isp: 'isp',
    region: 'region',
    deviceType: 'deviceType',
    deviceModel: 'deviceModel',
    browserName: 'browserName',
    browserVersion: 'browserVersion',
    osName: 'osName',
    osVersion: 'osVersion',
    countryCode: 'countryCode',
    regionCode: 'regionCode',
    postal: 'postal',
    currency: 'currency',
    currencyName: 'currencyName',
    languages: 'languages',
    countryPopulation: 'countryPopulation',
    countryArea: 'countryArea',
    countryCapital: 'countryCapital',
    continent: 'continent',
    isEu: 'isEu',
    callingCode: 'callingCode',
    utcOffset: 'utcOffset'
  };

  export type OwnerLoginSessionScalarFieldEnum = (typeof OwnerLoginSessionScalarFieldEnum)[keyof typeof OwnerLoginSessionScalarFieldEnum]


  export const FormDraftScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    city: 'city',
    street: 'street',
    postalCode: 'postalCode',
    houseNumber: 'houseNumber',
    country: 'country',
    preferredFood: 'preferredFood',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    birthDate: 'birthDate'
  };

  export type FormDraftScalarFieldEnum = (typeof FormDraftScalarFieldEnum)[keyof typeof FormDraftScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name_ru: 'name_ru',
    name_en: 'name_en',
    name_uk: 'name_uk',
    name_nl: 'name_nl'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type FavoriteProductWhereInput = {
    AND?: FavoriteProductWhereInput | FavoriteProductWhereInput[]
    OR?: FavoriteProductWhereInput[]
    NOT?: FavoriteProductWhereInput | FavoriteProductWhereInput[]
    id?: IntFilter<"FavoriteProduct"> | number
    customerId?: StringFilter<"FavoriteProduct"> | string
    productId?: IntFilter<"FavoriteProduct"> | number
    createdAt?: DateTimeFilter<"FavoriteProduct"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type FavoriteProductOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type FavoriteProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    customerId_productId?: FavoriteProductCustomerIdProductIdCompoundUniqueInput
    AND?: FavoriteProductWhereInput | FavoriteProductWhereInput[]
    OR?: FavoriteProductWhereInput[]
    NOT?: FavoriteProductWhereInput | FavoriteProductWhereInput[]
    customerId?: StringFilter<"FavoriteProduct"> | string
    productId?: IntFilter<"FavoriteProduct"> | number
    createdAt?: DateTimeFilter<"FavoriteProduct"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "customerId_productId">

  export type FavoriteProductOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteProductCountOrderByAggregateInput
    _avg?: FavoriteProductAvgOrderByAggregateInput
    _max?: FavoriteProductMaxOrderByAggregateInput
    _min?: FavoriteProductMinOrderByAggregateInput
    _sum?: FavoriteProductSumOrderByAggregateInput
  }

  export type FavoriteProductScalarWhereWithAggregatesInput = {
    AND?: FavoriteProductScalarWhereWithAggregatesInput | FavoriteProductScalarWhereWithAggregatesInput[]
    OR?: FavoriteProductScalarWhereWithAggregatesInput[]
    NOT?: FavoriteProductScalarWhereWithAggregatesInput | FavoriteProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteProduct"> | number
    customerId?: StringWithAggregatesFilter<"FavoriteProduct"> | string
    productId?: IntWithAggregatesFilter<"FavoriteProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteProduct"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    name_ru?: StringFilter<"Product"> | string
    name_en?: StringFilter<"Product"> | string
    name_uk?: StringFilter<"Product"> | string
    name_nl?: StringFilter<"Product"> | string
    ingredients_ru?: StringNullableFilter<"Product"> | string | null
    ingredients_en?: StringNullableFilter<"Product"> | string | null
    ingredients_uk?: StringNullableFilter<"Product"> | string | null
    ingredients_nl?: StringNullableFilter<"Product"> | string | null
    isPopular?: BoolFilter<"Product"> | boolean
    isChefRecommendation?: BoolFilter<"Product"> | boolean
    isPromotion?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    favoritedBy?: FavoriteProductListRelationFilter
    OrderLineItem?: OrderLineItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    ingredients_ru?: SortOrderInput | SortOrder
    ingredients_en?: SortOrderInput | SortOrder
    ingredients_uk?: SortOrderInput | SortOrder
    ingredients_nl?: SortOrderInput | SortOrder
    isPopular?: SortOrder
    isChefRecommendation?: SortOrder
    isPromotion?: SortOrder
    categoryId?: SortOrder
    category?: ProductCategoryOrderByWithRelationInput
    favoritedBy?: FavoriteProductOrderByRelationAggregateInput
    OrderLineItem?: OrderLineItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    name_ru?: StringFilter<"Product"> | string
    name_en?: StringFilter<"Product"> | string
    name_uk?: StringFilter<"Product"> | string
    name_nl?: StringFilter<"Product"> | string
    ingredients_ru?: StringNullableFilter<"Product"> | string | null
    ingredients_en?: StringNullableFilter<"Product"> | string | null
    ingredients_uk?: StringNullableFilter<"Product"> | string | null
    ingredients_nl?: StringNullableFilter<"Product"> | string | null
    isPopular?: BoolFilter<"Product"> | boolean
    isChefRecommendation?: BoolFilter<"Product"> | boolean
    isPromotion?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    favoritedBy?: FavoriteProductListRelationFilter
    OrderLineItem?: OrderLineItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    ingredients_ru?: SortOrderInput | SortOrder
    ingredients_en?: SortOrderInput | SortOrder
    ingredients_uk?: SortOrderInput | SortOrder
    ingredients_nl?: SortOrderInput | SortOrder
    isPopular?: SortOrder
    isChefRecommendation?: SortOrder
    isPromotion?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name_ru?: StringWithAggregatesFilter<"Product"> | string
    name_en?: StringWithAggregatesFilter<"Product"> | string
    name_uk?: StringWithAggregatesFilter<"Product"> | string
    name_nl?: StringWithAggregatesFilter<"Product"> | string
    ingredients_ru?: StringNullableWithAggregatesFilter<"Product"> | string | null
    ingredients_en?: StringNullableWithAggregatesFilter<"Product"> | string | null
    ingredients_uk?: StringNullableWithAggregatesFilter<"Product"> | string | null
    ingredients_nl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isPopular?: BoolWithAggregatesFilter<"Product"> | boolean
    isChefRecommendation?: BoolWithAggregatesFilter<"Product"> | boolean
    isPromotion?: BoolWithAggregatesFilter<"Product"> | boolean
    categoryId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    telegramId?: BigIntNullableFilter<"Customer"> | bigint | number | null
    languageCode?: StringNullableFilter<"Customer"> | string | null
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    birthDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    street?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    houseNumber?: StringNullableFilter<"Customer"> | string | null
    preferredFood?: StringNullableFilter<"Customer"> | string | null
    feedback?: StringNullableFilter<"Customer"> | string | null
    discountCode?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    isEmailVerified?: BoolFilter<"Customer"> | boolean
    emailVerificationCode?: StringNullableFilter<"Customer"> | string | null
    marketingConsent?: BoolFilter<"Customer"> | boolean
    lastBirthdayGreetingSent?: DateTimeNullableFilter<"Customer"> | Date | string | null
    subscriptions?: XOR<MessageSubscriptionNullableScalarRelationFilter, MessageSubscriptionWhereInput> | null
    favorites?: FavoriteProductListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    marketingConsent?: SortOrder
    lastBirthdayGreetingSent?: SortOrderInput | SortOrder
    subscriptions?: MessageSubscriptionOrderByWithRelationInput
    favorites?: FavoriteProductOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: bigint | number
    phoneNumber?: string
    email?: string
    discountCode?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    languageCode?: StringNullableFilter<"Customer"> | string | null
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    birthDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    street?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    houseNumber?: StringNullableFilter<"Customer"> | string | null
    preferredFood?: StringNullableFilter<"Customer"> | string | null
    feedback?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    isEmailVerified?: BoolFilter<"Customer"> | boolean
    emailVerificationCode?: StringNullableFilter<"Customer"> | string | null
    marketingConsent?: BoolFilter<"Customer"> | boolean
    lastBirthdayGreetingSent?: DateTimeNullableFilter<"Customer"> | Date | string | null
    subscriptions?: XOR<MessageSubscriptionNullableScalarRelationFilter, MessageSubscriptionWhereInput> | null
    favorites?: FavoriteProductListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "telegramId" | "phoneNumber" | "email" | "discountCode">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    marketingConsent?: SortOrder
    lastBirthdayGreetingSent?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    telegramId?: BigIntNullableWithAggregatesFilter<"Customer"> | bigint | number | null
    languageCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    country?: StringWithAggregatesFilter<"Customer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    street?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    houseNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    preferredFood?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    discountCode?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    isEmailVerified?: BoolWithAggregatesFilter<"Customer"> | boolean
    emailVerificationCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    marketingConsent?: BoolWithAggregatesFilter<"Customer"> | boolean
    lastBirthdayGreetingSent?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: StringFilter<"Order"> | string
    totalPrice?: FloatFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: OrderLineItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    items?: OrderLineItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: StringFilter<"Order"> | string
    totalPrice?: FloatFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: OrderLineItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    customerId?: StringWithAggregatesFilter<"Order"> | string
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderLineItemWhereInput = {
    AND?: OrderLineItemWhereInput | OrderLineItemWhereInput[]
    OR?: OrderLineItemWhereInput[]
    NOT?: OrderLineItemWhereInput | OrderLineItemWhereInput[]
    id?: IntFilter<"OrderLineItem"> | number
    orderId?: IntFilter<"OrderLineItem"> | number
    productId?: IntFilter<"OrderLineItem"> | number
    quantity?: IntFilter<"OrderLineItem"> | number
    price?: FloatFilter<"OrderLineItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderLineItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderLineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderLineItemWhereInput | OrderLineItemWhereInput[]
    OR?: OrderLineItemWhereInput[]
    NOT?: OrderLineItemWhereInput | OrderLineItemWhereInput[]
    orderId?: IntFilter<"OrderLineItem"> | number
    productId?: IntFilter<"OrderLineItem"> | number
    quantity?: IntFilter<"OrderLineItem"> | number
    price?: FloatFilter<"OrderLineItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderLineItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: OrderLineItemCountOrderByAggregateInput
    _avg?: OrderLineItemAvgOrderByAggregateInput
    _max?: OrderLineItemMaxOrderByAggregateInput
    _min?: OrderLineItemMinOrderByAggregateInput
    _sum?: OrderLineItemSumOrderByAggregateInput
  }

  export type OrderLineItemScalarWhereWithAggregatesInput = {
    AND?: OrderLineItemScalarWhereWithAggregatesInput | OrderLineItemScalarWhereWithAggregatesInput[]
    OR?: OrderLineItemScalarWhereWithAggregatesInput[]
    NOT?: OrderLineItemScalarWhereWithAggregatesInput | OrderLineItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderLineItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderLineItem"> | number
    productId?: IntWithAggregatesFilter<"OrderLineItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderLineItem"> | number
    price?: FloatWithAggregatesFilter<"OrderLineItem"> | number
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    name?: StringFilter<"Owner"> | string
    accessCode?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    isActive?: BoolFilter<"Owner"> | boolean
    lastLogin?: DateTimeNullableFilter<"Owner"> | Date | string | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    emailVerificationCode?: StringNullableFilter<"Owner"> | string | null
    isEmailVerified?: BoolFilter<"Owner"> | boolean
    loginSessions?: OwnerLoginSessionListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    loginSessions?: OwnerLoginSessionOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    accessCode?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    name?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    isActive?: BoolFilter<"Owner"> | boolean
    lastLogin?: DateTimeNullableFilter<"Owner"> | Date | string | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    emailVerificationCode?: StringNullableFilter<"Owner"> | string | null
    isEmailVerified?: BoolFilter<"Owner"> | boolean
    loginSessions?: OwnerLoginSessionListRelationFilter
  }, "id" | "email" | "accessCode">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    name?: StringWithAggregatesFilter<"Owner"> | string
    accessCode?: StringWithAggregatesFilter<"Owner"> | string
    password?: StringWithAggregatesFilter<"Owner"> | string
    isActive?: BoolWithAggregatesFilter<"Owner"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Owner"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    emailVerificationCode?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"Owner"> | boolean
  }

  export type MessageSubscriptionWhereInput = {
    AND?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    OR?: MessageSubscriptionWhereInput[]
    NOT?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    id?: StringFilter<"MessageSubscription"> | string
    customerId?: StringFilter<"MessageSubscription"> | string
    subscribed?: BoolFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    deliveries?: MessageDeliveryListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type MessageSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveries?: MessageDeliveryOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type MessageSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId?: string
    AND?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    OR?: MessageSubscriptionWhereInput[]
    NOT?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    subscribed?: BoolFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    deliveries?: MessageDeliveryListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "customerId">

  export type MessageSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageSubscriptionCountOrderByAggregateInput
    _max?: MessageSubscriptionMaxOrderByAggregateInput
    _min?: MessageSubscriptionMinOrderByAggregateInput
  }

  export type MessageSubscriptionScalarWhereWithAggregatesInput = {
    AND?: MessageSubscriptionScalarWhereWithAggregatesInput | MessageSubscriptionScalarWhereWithAggregatesInput[]
    OR?: MessageSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: MessageSubscriptionScalarWhereWithAggregatesInput | MessageSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageSubscription"> | string
    customerId?: StringWithAggregatesFilter<"MessageSubscription"> | string
    subscribed?: BoolWithAggregatesFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageSubscription"> | Date | string
  }

  export type BroadcastMessageWhereInput = {
    AND?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    OR?: BroadcastMessageWhereInput[]
    NOT?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    id?: StringFilter<"BroadcastMessage"> | string
    title?: StringFilter<"BroadcastMessage"> | string
    body?: StringFilter<"BroadcastMessage"> | string
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    scheduledFor?: DateTimeNullableFilter<"BroadcastMessage"> | Date | string | null
    deliveries?: MessageDeliveryListRelationFilter
  }

  export type BroadcastMessageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    deliveries?: MessageDeliveryOrderByRelationAggregateInput
  }

  export type BroadcastMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    OR?: BroadcastMessageWhereInput[]
    NOT?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    title?: StringFilter<"BroadcastMessage"> | string
    body?: StringFilter<"BroadcastMessage"> | string
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    scheduledFor?: DateTimeNullableFilter<"BroadcastMessage"> | Date | string | null
    deliveries?: MessageDeliveryListRelationFilter
  }, "id">

  export type BroadcastMessageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    _count?: BroadcastMessageCountOrderByAggregateInput
    _max?: BroadcastMessageMaxOrderByAggregateInput
    _min?: BroadcastMessageMinOrderByAggregateInput
  }

  export type BroadcastMessageScalarWhereWithAggregatesInput = {
    AND?: BroadcastMessageScalarWhereWithAggregatesInput | BroadcastMessageScalarWhereWithAggregatesInput[]
    OR?: BroadcastMessageScalarWhereWithAggregatesInput[]
    NOT?: BroadcastMessageScalarWhereWithAggregatesInput | BroadcastMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    title?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    body?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BroadcastMessage"> | Date | string
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"BroadcastMessage"> | Date | string | null
  }

  export type MessageDeliveryWhereInput = {
    AND?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    OR?: MessageDeliveryWhereInput[]
    NOT?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    id?: StringFilter<"MessageDelivery"> | string
    messageId?: StringFilter<"MessageDelivery"> | string
    subscriptionId?: StringFilter<"MessageDelivery"> | string
    phoneNumber?: StringFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    message?: XOR<BroadcastMessageScalarRelationFilter, BroadcastMessageWhereInput>
    subscription?: XOR<MessageSubscriptionScalarRelationFilter, MessageSubscriptionWhereInput>
  }

  export type MessageDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    message?: BroadcastMessageOrderByWithRelationInput
    subscription?: MessageSubscriptionOrderByWithRelationInput
  }

  export type MessageDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    OR?: MessageDeliveryWhereInput[]
    NOT?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    messageId?: StringFilter<"MessageDelivery"> | string
    subscriptionId?: StringFilter<"MessageDelivery"> | string
    phoneNumber?: StringFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    message?: XOR<BroadcastMessageScalarRelationFilter, BroadcastMessageWhereInput>
    subscription?: XOR<MessageSubscriptionScalarRelationFilter, MessageSubscriptionWhereInput>
  }, "id">

  export type MessageDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageDeliveryCountOrderByAggregateInput
    _max?: MessageDeliveryMaxOrderByAggregateInput
    _min?: MessageDeliveryMinOrderByAggregateInput
  }

  export type MessageDeliveryScalarWhereWithAggregatesInput = {
    AND?: MessageDeliveryScalarWhereWithAggregatesInput | MessageDeliveryScalarWhereWithAggregatesInput[]
    OR?: MessageDeliveryScalarWhereWithAggregatesInput[]
    NOT?: MessageDeliveryScalarWhereWithAggregatesInput | MessageDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageDelivery"> | string
    messageId?: StringWithAggregatesFilter<"MessageDelivery"> | string
    subscriptionId?: StringWithAggregatesFilter<"MessageDelivery"> | string
    phoneNumber?: StringWithAggregatesFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusWithAggregatesFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableWithAggregatesFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageDelivery"> | Date | string
  }

  export type OwnerLoginSessionWhereInput = {
    AND?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    OR?: OwnerLoginSessionWhereInput[]
    NOT?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    id?: StringFilter<"OwnerLoginSession"> | string
    ownerId?: StringFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableFilter<"OwnerLoginSession"> | string | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }

  export type OwnerLoginSessionOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    deviceModel?: SortOrderInput | SortOrder
    browserName?: SortOrderInput | SortOrder
    browserVersion?: SortOrderInput | SortOrder
    osName?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    regionCode?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    currencyName?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    countryPopulation?: SortOrderInput | SortOrder
    countryArea?: SortOrderInput | SortOrder
    countryCapital?: SortOrderInput | SortOrder
    continent?: SortOrderInput | SortOrder
    isEu?: SortOrderInput | SortOrder
    callingCode?: SortOrderInput | SortOrder
    utcOffset?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
  }

  export type OwnerLoginSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    OR?: OwnerLoginSessionWhereInput[]
    NOT?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    ownerId?: StringFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableFilter<"OwnerLoginSession"> | string | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }, "id">

  export type OwnerLoginSessionOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    deviceModel?: SortOrderInput | SortOrder
    browserName?: SortOrderInput | SortOrder
    browserVersion?: SortOrderInput | SortOrder
    osName?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    regionCode?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    currencyName?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    countryPopulation?: SortOrderInput | SortOrder
    countryArea?: SortOrderInput | SortOrder
    countryCapital?: SortOrderInput | SortOrder
    continent?: SortOrderInput | SortOrder
    isEu?: SortOrderInput | SortOrder
    callingCode?: SortOrderInput | SortOrder
    utcOffset?: SortOrderInput | SortOrder
    _count?: OwnerLoginSessionCountOrderByAggregateInput
    _avg?: OwnerLoginSessionAvgOrderByAggregateInput
    _max?: OwnerLoginSessionMaxOrderByAggregateInput
    _min?: OwnerLoginSessionMinOrderByAggregateInput
    _sum?: OwnerLoginSessionSumOrderByAggregateInput
  }

  export type OwnerLoginSessionScalarWhereWithAggregatesInput = {
    AND?: OwnerLoginSessionScalarWhereWithAggregatesInput | OwnerLoginSessionScalarWhereWithAggregatesInput[]
    OR?: OwnerLoginSessionScalarWhereWithAggregatesInput[]
    NOT?: OwnerLoginSessionScalarWhereWithAggregatesInput | OwnerLoginSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OwnerLoginSession"> | string
    ownerId?: StringWithAggregatesFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolWithAggregatesFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeWithAggregatesFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableWithAggregatesFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
  }

  export type FormDraftWhereInput = {
    AND?: FormDraftWhereInput | FormDraftWhereInput[]
    OR?: FormDraftWhereInput[]
    NOT?: FormDraftWhereInput | FormDraftWhereInput[]
    id?: StringFilter<"FormDraft"> | string
    firstName?: StringNullableFilter<"FormDraft"> | string | null
    lastName?: StringNullableFilter<"FormDraft"> | string | null
    phoneNumber?: StringNullableFilter<"FormDraft"> | string | null
    email?: StringNullableFilter<"FormDraft"> | string | null
    city?: StringNullableFilter<"FormDraft"> | string | null
    street?: StringNullableFilter<"FormDraft"> | string | null
    postalCode?: StringNullableFilter<"FormDraft"> | string | null
    houseNumber?: StringNullableFilter<"FormDraft"> | string | null
    country?: StringNullableFilter<"FormDraft"> | string | null
    preferredFood?: StringNullableFilter<"FormDraft"> | string | null
    feedback?: StringNullableFilter<"FormDraft"> | string | null
    createdAt?: DateTimeFilter<"FormDraft"> | Date | string
    updatedAt?: DateTimeFilter<"FormDraft"> | Date | string
    birthDate?: DateTimeNullableFilter<"FormDraft"> | Date | string | null
  }

  export type FormDraftOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthDate?: SortOrderInput | SortOrder
  }

  export type FormDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormDraftWhereInput | FormDraftWhereInput[]
    OR?: FormDraftWhereInput[]
    NOT?: FormDraftWhereInput | FormDraftWhereInput[]
    firstName?: StringNullableFilter<"FormDraft"> | string | null
    lastName?: StringNullableFilter<"FormDraft"> | string | null
    phoneNumber?: StringNullableFilter<"FormDraft"> | string | null
    email?: StringNullableFilter<"FormDraft"> | string | null
    city?: StringNullableFilter<"FormDraft"> | string | null
    street?: StringNullableFilter<"FormDraft"> | string | null
    postalCode?: StringNullableFilter<"FormDraft"> | string | null
    houseNumber?: StringNullableFilter<"FormDraft"> | string | null
    country?: StringNullableFilter<"FormDraft"> | string | null
    preferredFood?: StringNullableFilter<"FormDraft"> | string | null
    feedback?: StringNullableFilter<"FormDraft"> | string | null
    createdAt?: DateTimeFilter<"FormDraft"> | Date | string
    updatedAt?: DateTimeFilter<"FormDraft"> | Date | string
    birthDate?: DateTimeNullableFilter<"FormDraft"> | Date | string | null
  }, "id">

  export type FormDraftOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    _count?: FormDraftCountOrderByAggregateInput
    _max?: FormDraftMaxOrderByAggregateInput
    _min?: FormDraftMinOrderByAggregateInput
  }

  export type FormDraftScalarWhereWithAggregatesInput = {
    AND?: FormDraftScalarWhereWithAggregatesInput | FormDraftScalarWhereWithAggregatesInput[]
    OR?: FormDraftScalarWhereWithAggregatesInput[]
    NOT?: FormDraftScalarWhereWithAggregatesInput | FormDraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormDraft"> | string
    firstName?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    email?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    city?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    street?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    houseNumber?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    country?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    preferredFood?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FormDraft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormDraft"> | Date | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"FormDraft"> | Date | string | null
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: IntFilter<"ProductCategory"> | number
    name_ru?: StringFilter<"ProductCategory"> | string
    name_en?: StringFilter<"ProductCategory"> | string
    name_uk?: StringFilter<"ProductCategory"> | string
    name_nl?: StringFilter<"ProductCategory"> | string
    products?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    name_ru?: StringFilter<"ProductCategory"> | string
    name_en?: StringFilter<"ProductCategory"> | string
    name_uk?: StringFilter<"ProductCategory"> | string
    name_nl?: StringFilter<"ProductCategory"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _avg?: ProductCategoryAvgOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
    _sum?: ProductCategorySumOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCategory"> | number
    name_ru?: StringWithAggregatesFilter<"ProductCategory"> | string
    name_en?: StringWithAggregatesFilter<"ProductCategory"> | string
    name_uk?: StringWithAggregatesFilter<"ProductCategory"> | string
    name_nl?: StringWithAggregatesFilter<"ProductCategory"> | string
  }

  export type FavoriteProductCreateInput = {
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutFavoritesInput
    product: ProductCreateNestedOneWithoutFavoritedByInput
  }

  export type FavoriteProductUncheckedCreateInput = {
    id?: number
    customerId: string
    productId: number
    createdAt?: Date | string
  }

  export type FavoriteProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutFavoritesNestedInput
    product?: ProductUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type FavoriteProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteProductCreateManyInput = {
    id?: number
    customerId: string
    productId: number
    createdAt?: Date | string
  }

  export type FavoriteProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    favoritedBy?: FavoriteProductCreateNestedManyWithoutProductInput
    OrderLineItem?: OrderLineItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId: number
    favoritedBy?: FavoriteProductUncheckedCreateNestedManyWithoutProductInput
    OrderLineItem?: OrderLineItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    favoritedBy?: FavoriteProductUpdateManyWithoutProductNestedInput
    OrderLineItem?: OrderLineItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    favoritedBy?: FavoriteProductUncheckedUpdateManyWithoutProductNestedInput
    OrderLineItem?: OrderLineItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId: number
  }

  export type ProductUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    subscriptions?: MessageSubscriptionCreateNestedOneWithoutCustomerInput
    favorites?: FavoriteProductCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    subscriptions?: MessageSubscriptionUncheckedCreateNestedOneWithoutCustomerInput
    favorites?: FavoriteProductUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: MessageSubscriptionUpdateOneWithoutCustomerNestedInput
    favorites?: FavoriteProductUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: MessageSubscriptionUncheckedUpdateOneWithoutCustomerNestedInput
    favorites?: FavoriteProductUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateInput = {
    totalPrice: number
    status?: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderLineItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customerId: string
    totalPrice: number
    status?: string
    createdAt?: Date | string
    items?: OrderLineItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderLineItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderLineItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    customerId: string
    totalPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderLineItemCreateInput = {
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrderLineItemInput
  }

  export type OrderLineItemUncheckedCreateInput = {
    id?: number
    orderId: number
    productId: number
    quantity: number
    price: number
  }

  export type OrderLineItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderLineItemNestedInput
  }

  export type OrderLineItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderLineItemCreateManyInput = {
    id?: number
    orderId: number
    productId: number
    quantity: number
    price: number
  }

  export type OrderLineItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderLineItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OwnerCreateInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
    loginSessions?: OwnerLoginSessionCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
    loginSessions?: OwnerLoginSessionUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    loginSessions?: OwnerLoginSessionUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    loginSessions?: OwnerLoginSessionUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageSubscriptionCreateInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryCreateNestedManyWithoutSubscriptionInput
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
  }

  export type MessageSubscriptionUncheckedCreateInput = {
    id?: string
    customerId: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUpdateManyWithoutSubscriptionNestedInput
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type MessageSubscriptionCreateManyInput = {
    id?: string
    customerId: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastMessageCreateInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
    deliveries?: MessageDeliveryCreateNestedManyWithoutMessageInput
  }

  export type BroadcastMessageUncheckedCreateInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
    deliveries?: MessageDeliveryUncheckedCreateNestedManyWithoutMessageInput
  }

  export type BroadcastMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: MessageDeliveryUpdateManyWithoutMessageNestedInput
  }

  export type BroadcastMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: MessageDeliveryUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type BroadcastMessageCreateManyInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
  }

  export type BroadcastMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BroadcastMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageDeliveryCreateInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    message: BroadcastMessageCreateNestedOneWithoutDeliveriesInput
    subscription: MessageSubscriptionCreateNestedOneWithoutDeliveriesInput
  }

  export type MessageDeliveryUncheckedCreateInput = {
    id?: string
    messageId: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: BroadcastMessageUpdateOneRequiredWithoutDeliveriesNestedInput
    subscription?: MessageSubscriptionUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type MessageDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryCreateManyInput = {
    id?: string
    messageId: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerLoginSessionCreateInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
    owner: OwnerCreateNestedOneWithoutLoginSessionsInput
  }

  export type OwnerLoginSessionUncheckedCreateInput = {
    id?: string
    ownerId: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: OwnerUpdateOneRequiredWithoutLoginSessionsNestedInput
  }

  export type OwnerLoginSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionCreateManyInput = {
    id?: string
    ownerId: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormDraftCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    email?: string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    country?: string | null
    preferredFood?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    birthDate?: Date | string | null
  }

  export type FormDraftUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    email?: string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    country?: string | null
    preferredFood?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    birthDate?: Date | string | null
  }

  export type FormDraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormDraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormDraftCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    email?: string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    country?: string | null
    preferredFood?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    birthDate?: Date | string | null
  }

  export type FormDraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormDraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryCreateInput = {
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: number
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: number
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type FavoriteProductCustomerIdProductIdCompoundUniqueInput = {
    customerId: string
    productId: number
  }

  export type FavoriteProductCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteProductAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type FavoriteProductMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteProductMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteProductSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type FavoriteProductListRelationFilter = {
    every?: FavoriteProductWhereInput
    some?: FavoriteProductWhereInput
    none?: FavoriteProductWhereInput
  }

  export type OrderLineItemListRelationFilter = {
    every?: OrderLineItemWhereInput
    some?: OrderLineItemWhereInput
    none?: OrderLineItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoriteProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderLineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    ingredients_ru?: SortOrder
    ingredients_en?: SortOrder
    ingredients_uk?: SortOrder
    ingredients_nl?: SortOrder
    isPopular?: SortOrder
    isChefRecommendation?: SortOrder
    isPromotion?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    ingredients_ru?: SortOrder
    ingredients_en?: SortOrder
    ingredients_uk?: SortOrder
    ingredients_nl?: SortOrder
    isPopular?: SortOrder
    isChefRecommendation?: SortOrder
    isPromotion?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
    ingredients_ru?: SortOrder
    ingredients_en?: SortOrder
    ingredients_uk?: SortOrder
    ingredients_nl?: SortOrder
    isPopular?: SortOrder
    isChefRecommendation?: SortOrder
    isPromotion?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MessageSubscriptionNullableScalarRelationFilter = {
    is?: MessageSubscriptionWhereInput | null
    isNot?: MessageSubscriptionWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    languageCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationCode?: SortOrder
    marketingConsent?: SortOrder
    lastBirthdayGreetingSent?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    telegramId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    languageCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationCode?: SortOrder
    marketingConsent?: SortOrder
    lastBirthdayGreetingSent?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    languageCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationCode?: SortOrder
    marketingConsent?: SortOrder
    lastBirthdayGreetingSent?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    telegramId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderLineItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderLineItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderLineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderLineItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderLineItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OwnerLoginSessionListRelationFilter = {
    every?: OwnerLoginSessionWhereInput
    some?: OwnerLoginSessionWhereInput
    none?: OwnerLoginSessionWhereInput
  }

  export type OwnerLoginSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type MessageDeliveryListRelationFilter = {
    every?: MessageDeliveryWhereInput
    some?: MessageDeliveryWhereInput
    none?: MessageDeliveryWhereInput
  }

  export type MessageDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BroadcastMessageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrder
  }

  export type BroadcastMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrder
  }

  export type BroadcastMessageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrder
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type BroadcastMessageScalarRelationFilter = {
    is?: BroadcastMessageWhereInput
    isNot?: BroadcastMessageWhereInput
  }

  export type MessageSubscriptionScalarRelationFilter = {
    is?: MessageSubscriptionWhereInput
    isNot?: MessageSubscriptionWhereInput
  }

  export type MessageDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type OwnerLoginSessionCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    userAgent?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    deviceModel?: SortOrder
    browserName?: SortOrder
    browserVersion?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    countryCode?: SortOrder
    regionCode?: SortOrder
    postal?: SortOrder
    currency?: SortOrder
    currencyName?: SortOrder
    languages?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
    countryCapital?: SortOrder
    continent?: SortOrder
    isEu?: SortOrder
    callingCode?: SortOrder
    utcOffset?: SortOrder
  }

  export type OwnerLoginSessionAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
  }

  export type OwnerLoginSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    userAgent?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    deviceModel?: SortOrder
    browserName?: SortOrder
    browserVersion?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    countryCode?: SortOrder
    regionCode?: SortOrder
    postal?: SortOrder
    currency?: SortOrder
    currencyName?: SortOrder
    languages?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
    countryCapital?: SortOrder
    continent?: SortOrder
    isEu?: SortOrder
    callingCode?: SortOrder
    utcOffset?: SortOrder
  }

  export type OwnerLoginSessionMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    userAgent?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    deviceModel?: SortOrder
    browserName?: SortOrder
    browserVersion?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    countryCode?: SortOrder
    regionCode?: SortOrder
    postal?: SortOrder
    currency?: SortOrder
    currencyName?: SortOrder
    languages?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
    countryCapital?: SortOrder
    continent?: SortOrder
    isEu?: SortOrder
    callingCode?: SortOrder
    utcOffset?: SortOrder
  }

  export type OwnerLoginSessionSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FormDraftCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    country?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthDate?: SortOrder
  }

  export type FormDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    country?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthDate?: SortOrder
  }

  export type FormDraftMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    country?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthDate?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
  }

  export type ProductCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    name_uk?: SortOrder
    name_nl?: SortOrder
  }

  export type ProductCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoritesInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutFavoritedByInput = {
    create?: XOR<ProductCreateWithoutFavoritedByInput, ProductUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritedByInput
    connect?: ProductWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoritesInput
    upsert?: CustomerUpsertWithoutFavoritesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutFavoritesInput, CustomerUpdateWithoutFavoritesInput>, CustomerUncheckedUpdateWithoutFavoritesInput>
  }

  export type ProductUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: XOR<ProductCreateWithoutFavoritedByInput, ProductUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritedByInput
    upsert?: ProductUpsertWithoutFavoritedByInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFavoritedByInput, ProductUpdateWithoutFavoritedByInput>, ProductUncheckedUpdateWithoutFavoritedByInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type FavoriteProductCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoriteProductCreateWithoutProductInput, FavoriteProductUncheckedCreateWithoutProductInput> | FavoriteProductCreateWithoutProductInput[] | FavoriteProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutProductInput | FavoriteProductCreateOrConnectWithoutProductInput[]
    createMany?: FavoriteProductCreateManyProductInputEnvelope
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
  }

  export type OrderLineItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderLineItemCreateWithoutProductInput, OrderLineItemUncheckedCreateWithoutProductInput> | OrderLineItemCreateWithoutProductInput[] | OrderLineItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutProductInput | OrderLineItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderLineItemCreateManyProductInputEnvelope
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
  }

  export type FavoriteProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoriteProductCreateWithoutProductInput, FavoriteProductUncheckedCreateWithoutProductInput> | FavoriteProductCreateWithoutProductInput[] | FavoriteProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutProductInput | FavoriteProductCreateOrConnectWithoutProductInput[]
    createMany?: FavoriteProductCreateManyProductInputEnvelope
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
  }

  export type OrderLineItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderLineItemCreateWithoutProductInput, OrderLineItemUncheckedCreateWithoutProductInput> | OrderLineItemCreateWithoutProductInput[] | OrderLineItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutProductInput | OrderLineItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderLineItemCreateManyProductInputEnvelope
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    upsert?: ProductCategoryUpsertWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductsInput, ProductCategoryUpdateWithoutProductsInput>, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type FavoriteProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoriteProductCreateWithoutProductInput, FavoriteProductUncheckedCreateWithoutProductInput> | FavoriteProductCreateWithoutProductInput[] | FavoriteProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutProductInput | FavoriteProductCreateOrConnectWithoutProductInput[]
    upsert?: FavoriteProductUpsertWithWhereUniqueWithoutProductInput | FavoriteProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoriteProductCreateManyProductInputEnvelope
    set?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    disconnect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    delete?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    update?: FavoriteProductUpdateWithWhereUniqueWithoutProductInput | FavoriteProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoriteProductUpdateManyWithWhereWithoutProductInput | FavoriteProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoriteProductScalarWhereInput | FavoriteProductScalarWhereInput[]
  }

  export type OrderLineItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderLineItemCreateWithoutProductInput, OrderLineItemUncheckedCreateWithoutProductInput> | OrderLineItemCreateWithoutProductInput[] | OrderLineItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutProductInput | OrderLineItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutProductInput | OrderLineItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderLineItemCreateManyProductInputEnvelope
    set?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    disconnect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    delete?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    update?: OrderLineItemUpdateWithWhereUniqueWithoutProductInput | OrderLineItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutProductInput | OrderLineItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderLineItemScalarWhereInput | OrderLineItemScalarWhereInput[]
  }

  export type FavoriteProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoriteProductCreateWithoutProductInput, FavoriteProductUncheckedCreateWithoutProductInput> | FavoriteProductCreateWithoutProductInput[] | FavoriteProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutProductInput | FavoriteProductCreateOrConnectWithoutProductInput[]
    upsert?: FavoriteProductUpsertWithWhereUniqueWithoutProductInput | FavoriteProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoriteProductCreateManyProductInputEnvelope
    set?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    disconnect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    delete?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    update?: FavoriteProductUpdateWithWhereUniqueWithoutProductInput | FavoriteProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoriteProductUpdateManyWithWhereWithoutProductInput | FavoriteProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoriteProductScalarWhereInput | FavoriteProductScalarWhereInput[]
  }

  export type OrderLineItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderLineItemCreateWithoutProductInput, OrderLineItemUncheckedCreateWithoutProductInput> | OrderLineItemCreateWithoutProductInput[] | OrderLineItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutProductInput | OrderLineItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutProductInput | OrderLineItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderLineItemCreateManyProductInputEnvelope
    set?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    disconnect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    delete?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    update?: OrderLineItemUpdateWithWhereUniqueWithoutProductInput | OrderLineItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutProductInput | OrderLineItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderLineItemScalarWhereInput | OrderLineItemScalarWhereInput[]
  }

  export type MessageSubscriptionCreateNestedOneWithoutCustomerInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput
    connect?: MessageSubscriptionWhereUniqueInput
  }

  export type FavoriteProductCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteProductCreateWithoutCustomerInput, FavoriteProductUncheckedCreateWithoutCustomerInput> | FavoriteProductCreateWithoutCustomerInput[] | FavoriteProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutCustomerInput | FavoriteProductCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteProductCreateManyCustomerInputEnvelope
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MessageSubscriptionUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput
    connect?: MessageSubscriptionWhereUniqueInput
  }

  export type FavoriteProductUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteProductCreateWithoutCustomerInput, FavoriteProductUncheckedCreateWithoutCustomerInput> | FavoriteProductCreateWithoutCustomerInput[] | FavoriteProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutCustomerInput | FavoriteProductCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteProductCreateManyCustomerInputEnvelope
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MessageSubscriptionUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput
    upsert?: MessageSubscriptionUpsertWithoutCustomerInput
    disconnect?: MessageSubscriptionWhereInput | boolean
    delete?: MessageSubscriptionWhereInput | boolean
    connect?: MessageSubscriptionWhereUniqueInput
    update?: XOR<XOR<MessageSubscriptionUpdateToOneWithWhereWithoutCustomerInput, MessageSubscriptionUpdateWithoutCustomerInput>, MessageSubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type FavoriteProductUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteProductCreateWithoutCustomerInput, FavoriteProductUncheckedCreateWithoutCustomerInput> | FavoriteProductCreateWithoutCustomerInput[] | FavoriteProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutCustomerInput | FavoriteProductCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteProductUpsertWithWhereUniqueWithoutCustomerInput | FavoriteProductUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteProductCreateManyCustomerInputEnvelope
    set?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    disconnect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    delete?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    update?: FavoriteProductUpdateWithWhereUniqueWithoutCustomerInput | FavoriteProductUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteProductUpdateManyWithWhereWithoutCustomerInput | FavoriteProductUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteProductScalarWhereInput | FavoriteProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MessageSubscriptionUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput
    upsert?: MessageSubscriptionUpsertWithoutCustomerInput
    disconnect?: MessageSubscriptionWhereInput | boolean
    delete?: MessageSubscriptionWhereInput | boolean
    connect?: MessageSubscriptionWhereUniqueInput
    update?: XOR<XOR<MessageSubscriptionUpdateToOneWithWhereWithoutCustomerInput, MessageSubscriptionUpdateWithoutCustomerInput>, MessageSubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type FavoriteProductUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteProductCreateWithoutCustomerInput, FavoriteProductUncheckedCreateWithoutCustomerInput> | FavoriteProductCreateWithoutCustomerInput[] | FavoriteProductUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteProductCreateOrConnectWithoutCustomerInput | FavoriteProductCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteProductUpsertWithWhereUniqueWithoutCustomerInput | FavoriteProductUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteProductCreateManyCustomerInputEnvelope
    set?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    disconnect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    delete?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    connect?: FavoriteProductWhereUniqueInput | FavoriteProductWhereUniqueInput[]
    update?: FavoriteProductUpdateWithWhereUniqueWithoutCustomerInput | FavoriteProductUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteProductUpdateManyWithWhereWithoutCustomerInput | FavoriteProductUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteProductScalarWhereInput | FavoriteProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderLineItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderLineItemCreateWithoutOrderInput, OrderLineItemUncheckedCreateWithoutOrderInput> | OrderLineItemCreateWithoutOrderInput[] | OrderLineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutOrderInput | OrderLineItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderLineItemCreateManyOrderInputEnvelope
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
  }

  export type OrderLineItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderLineItemCreateWithoutOrderInput, OrderLineItemUncheckedCreateWithoutOrderInput> | OrderLineItemCreateWithoutOrderInput[] | OrderLineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutOrderInput | OrderLineItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderLineItemCreateManyOrderInputEnvelope
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderLineItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderLineItemCreateWithoutOrderInput, OrderLineItemUncheckedCreateWithoutOrderInput> | OrderLineItemCreateWithoutOrderInput[] | OrderLineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutOrderInput | OrderLineItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutOrderInput | OrderLineItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderLineItemCreateManyOrderInputEnvelope
    set?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    disconnect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    delete?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    update?: OrderLineItemUpdateWithWhereUniqueWithoutOrderInput | OrderLineItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutOrderInput | OrderLineItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderLineItemScalarWhereInput | OrderLineItemScalarWhereInput[]
  }

  export type OrderLineItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderLineItemCreateWithoutOrderInput, OrderLineItemUncheckedCreateWithoutOrderInput> | OrderLineItemCreateWithoutOrderInput[] | OrderLineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutOrderInput | OrderLineItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutOrderInput | OrderLineItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderLineItemCreateManyOrderInputEnvelope
    set?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    disconnect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    delete?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    connect?: OrderLineItemWhereUniqueInput | OrderLineItemWhereUniqueInput[]
    update?: OrderLineItemUpdateWithWhereUniqueWithoutOrderInput | OrderLineItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutOrderInput | OrderLineItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderLineItemScalarWhereInput | OrderLineItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderLineItemInput = {
    create?: XOR<ProductCreateWithoutOrderLineItemInput, ProductUncheckedCreateWithoutOrderLineItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderLineItemInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderLineItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderLineItemInput, ProductUncheckedCreateWithoutOrderLineItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderLineItemInput
    upsert?: ProductUpsertWithoutOrderLineItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderLineItemInput, ProductUpdateWithoutOrderLineItemInput>, ProductUncheckedUpdateWithoutOrderLineItemInput>
  }

  export type OwnerLoginSessionCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
  }

  export type OwnerLoginSessionUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
  }

  export type OwnerLoginSessionUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    upsert?: OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    set?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    disconnect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    delete?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    update?: OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput | OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
  }

  export type OwnerLoginSessionUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    upsert?: OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    set?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    disconnect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    delete?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    update?: OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput | OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
  }

  export type MessageDeliveryCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MessageDeliveryUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type MessageDeliveryUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput | MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    upsert?: CustomerUpsertWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSubscriptionsInput, CustomerUpdateWithoutSubscriptionsInput>, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput | MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type MessageDeliveryCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type MessageDeliveryUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type MessageDeliveryUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput | MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput | MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutMessageInput | MessageDeliveryUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput | MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput | MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutMessageInput | MessageDeliveryUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type BroadcastMessageCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutDeliveriesInput
    connect?: BroadcastMessageWhereUniqueInput
  }

  export type MessageSubscriptionCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutDeliveriesInput
    connect?: MessageSubscriptionWhereUniqueInput
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type BroadcastMessageUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutDeliveriesInput
    upsert?: BroadcastMessageUpsertWithoutDeliveriesInput
    connect?: BroadcastMessageWhereUniqueInput
    update?: XOR<XOR<BroadcastMessageUpdateToOneWithWhereWithoutDeliveriesInput, BroadcastMessageUpdateWithoutDeliveriesInput>, BroadcastMessageUncheckedUpdateWithoutDeliveriesInput>
  }

  export type MessageSubscriptionUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutDeliveriesInput
    upsert?: MessageSubscriptionUpsertWithoutDeliveriesInput
    connect?: MessageSubscriptionWhereUniqueInput
    update?: XOR<XOR<MessageSubscriptionUpdateToOneWithWhereWithoutDeliveriesInput, MessageSubscriptionUpdateWithoutDeliveriesInput>, MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput>
  }

  export type OwnerCreateNestedOneWithoutLoginSessionsInput = {
    create?: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutLoginSessionsInput
    connect?: OwnerWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type OwnerUpdateOneRequiredWithoutLoginSessionsNestedInput = {
    create?: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutLoginSessionsInput
    upsert?: OwnerUpsertWithoutLoginSessionsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutLoginSessionsInput, OwnerUpdateWithoutLoginSessionsInput>, OwnerUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutFavoritesInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    subscriptions?: MessageSubscriptionCreateNestedOneWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFavoritesInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    subscriptions?: MessageSubscriptionUncheckedCreateNestedOneWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFavoritesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput>
  }

  export type ProductCreateWithoutFavoritedByInput = {
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    OrderLineItem?: OrderLineItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId: number
    OrderLineItem?: OrderLineItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFavoritedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFavoritedByInput, ProductUncheckedCreateWithoutFavoritedByInput>
  }

  export type CustomerUpsertWithoutFavoritesInput = {
    update: XOR<CustomerUpdateWithoutFavoritesInput, CustomerUncheckedUpdateWithoutFavoritesInput>
    create: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutFavoritesInput, CustomerUncheckedUpdateWithoutFavoritesInput>
  }

  export type CustomerUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: MessageSubscriptionUpdateOneWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: MessageSubscriptionUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProductUpsertWithoutFavoritedByInput = {
    update: XOR<ProductUpdateWithoutFavoritedByInput, ProductUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<ProductCreateWithoutFavoritedByInput, ProductUncheckedCreateWithoutFavoritedByInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFavoritedByInput, ProductUncheckedUpdateWithoutFavoritedByInput>
  }

  export type ProductUpdateWithoutFavoritedByInput = {
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    OrderLineItem?: OrderLineItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    OrderLineItem?: OrderLineItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCategoryCreateWithoutProductsInput = {
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
  }

  export type ProductCategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
  }

  export type ProductCategoryCreateOrConnectWithoutProductsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
  }

  export type FavoriteProductCreateWithoutProductInput = {
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteProductUncheckedCreateWithoutProductInput = {
    id?: number
    customerId: string
    createdAt?: Date | string
  }

  export type FavoriteProductCreateOrConnectWithoutProductInput = {
    where: FavoriteProductWhereUniqueInput
    create: XOR<FavoriteProductCreateWithoutProductInput, FavoriteProductUncheckedCreateWithoutProductInput>
  }

  export type FavoriteProductCreateManyProductInputEnvelope = {
    data: FavoriteProductCreateManyProductInput | FavoriteProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderLineItemCreateWithoutProductInput = {
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderLineItemUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    quantity: number
    price: number
  }

  export type OrderLineItemCreateOrConnectWithoutProductInput = {
    where: OrderLineItemWhereUniqueInput
    create: XOR<OrderLineItemCreateWithoutProductInput, OrderLineItemUncheckedCreateWithoutProductInput>
  }

  export type OrderLineItemCreateManyProductInputEnvelope = {
    data: OrderLineItemCreateManyProductInput | OrderLineItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryUpsertWithoutProductsInput = {
    update: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoryUpdateWithoutProductsInput = {
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteProductUpsertWithWhereUniqueWithoutProductInput = {
    where: FavoriteProductWhereUniqueInput
    update: XOR<FavoriteProductUpdateWithoutProductInput, FavoriteProductUncheckedUpdateWithoutProductInput>
    create: XOR<FavoriteProductCreateWithoutProductInput, FavoriteProductUncheckedCreateWithoutProductInput>
  }

  export type FavoriteProductUpdateWithWhereUniqueWithoutProductInput = {
    where: FavoriteProductWhereUniqueInput
    data: XOR<FavoriteProductUpdateWithoutProductInput, FavoriteProductUncheckedUpdateWithoutProductInput>
  }

  export type FavoriteProductUpdateManyWithWhereWithoutProductInput = {
    where: FavoriteProductScalarWhereInput
    data: XOR<FavoriteProductUpdateManyMutationInput, FavoriteProductUncheckedUpdateManyWithoutProductInput>
  }

  export type FavoriteProductScalarWhereInput = {
    AND?: FavoriteProductScalarWhereInput | FavoriteProductScalarWhereInput[]
    OR?: FavoriteProductScalarWhereInput[]
    NOT?: FavoriteProductScalarWhereInput | FavoriteProductScalarWhereInput[]
    id?: IntFilter<"FavoriteProduct"> | number
    customerId?: StringFilter<"FavoriteProduct"> | string
    productId?: IntFilter<"FavoriteProduct"> | number
    createdAt?: DateTimeFilter<"FavoriteProduct"> | Date | string
  }

  export type OrderLineItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderLineItemWhereUniqueInput
    update: XOR<OrderLineItemUpdateWithoutProductInput, OrderLineItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderLineItemCreateWithoutProductInput, OrderLineItemUncheckedCreateWithoutProductInput>
  }

  export type OrderLineItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderLineItemWhereUniqueInput
    data: XOR<OrderLineItemUpdateWithoutProductInput, OrderLineItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderLineItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderLineItemScalarWhereInput
    data: XOR<OrderLineItemUpdateManyMutationInput, OrderLineItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderLineItemScalarWhereInput = {
    AND?: OrderLineItemScalarWhereInput | OrderLineItemScalarWhereInput[]
    OR?: OrderLineItemScalarWhereInput[]
    NOT?: OrderLineItemScalarWhereInput | OrderLineItemScalarWhereInput[]
    id?: IntFilter<"OrderLineItem"> | number
    orderId?: IntFilter<"OrderLineItem"> | number
    productId?: IntFilter<"OrderLineItem"> | number
    quantity?: IntFilter<"OrderLineItem"> | number
    price?: FloatFilter<"OrderLineItem"> | number
  }

  export type MessageSubscriptionCreateWithoutCustomerInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionCreateOrConnectWithoutCustomerInput = {
    where: MessageSubscriptionWhereUniqueInput
    create: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteProductCreateWithoutCustomerInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutFavoritedByInput
  }

  export type FavoriteProductUncheckedCreateWithoutCustomerInput = {
    id?: number
    productId: number
    createdAt?: Date | string
  }

  export type FavoriteProductCreateOrConnectWithoutCustomerInput = {
    where: FavoriteProductWhereUniqueInput
    create: XOR<FavoriteProductCreateWithoutCustomerInput, FavoriteProductUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteProductCreateManyCustomerInputEnvelope = {
    data: FavoriteProductCreateManyCustomerInput | FavoriteProductCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    totalPrice: number
    status?: string
    createdAt?: Date | string
    items?: OrderLineItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    totalPrice: number
    status?: string
    createdAt?: Date | string
    items?: OrderLineItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type MessageSubscriptionUpsertWithoutCustomerInput = {
    update: XOR<MessageSubscriptionUpdateWithoutCustomerInput, MessageSubscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
    where?: MessageSubscriptionWhereInput
  }

  export type MessageSubscriptionUpdateToOneWithWhereWithoutCustomerInput = {
    where?: MessageSubscriptionWhereInput
    data: XOR<MessageSubscriptionUpdateWithoutCustomerInput, MessageSubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type MessageSubscriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUpdateManyWithoutSubscriptionNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type FavoriteProductUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteProductWhereUniqueInput
    update: XOR<FavoriteProductUpdateWithoutCustomerInput, FavoriteProductUncheckedUpdateWithoutCustomerInput>
    create: XOR<FavoriteProductCreateWithoutCustomerInput, FavoriteProductUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteProductUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteProductWhereUniqueInput
    data: XOR<FavoriteProductUpdateWithoutCustomerInput, FavoriteProductUncheckedUpdateWithoutCustomerInput>
  }

  export type FavoriteProductUpdateManyWithWhereWithoutCustomerInput = {
    where: FavoriteProductScalarWhereInput
    data: XOR<FavoriteProductUpdateManyMutationInput, FavoriteProductUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: StringFilter<"Order"> | string
    totalPrice?: FloatFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    subscriptions?: MessageSubscriptionCreateNestedOneWithoutCustomerInput
    favorites?: FavoriteProductCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    subscriptions?: MessageSubscriptionUncheckedCreateNestedOneWithoutCustomerInput
    favorites?: FavoriteProductUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderLineItemCreateWithoutOrderInput = {
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutOrderLineItemInput
  }

  export type OrderLineItemUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    quantity: number
    price: number
  }

  export type OrderLineItemCreateOrConnectWithoutOrderInput = {
    where: OrderLineItemWhereUniqueInput
    create: XOR<OrderLineItemCreateWithoutOrderInput, OrderLineItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderLineItemCreateManyOrderInputEnvelope = {
    data: OrderLineItemCreateManyOrderInput | OrderLineItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: MessageSubscriptionUpdateOneWithoutCustomerNestedInput
    favorites?: FavoriteProductUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: MessageSubscriptionUncheckedUpdateOneWithoutCustomerNestedInput
    favorites?: FavoriteProductUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderLineItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderLineItemWhereUniqueInput
    update: XOR<OrderLineItemUpdateWithoutOrderInput, OrderLineItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderLineItemCreateWithoutOrderInput, OrderLineItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderLineItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderLineItemWhereUniqueInput
    data: XOR<OrderLineItemUpdateWithoutOrderInput, OrderLineItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderLineItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderLineItemScalarWhereInput
    data: XOR<OrderLineItemUpdateManyMutationInput, OrderLineItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    totalPrice: number
    status?: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    customerId: string
    totalPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOrderLineItemInput = {
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    favoritedBy?: FavoriteProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderLineItemInput = {
    id?: number
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    categoryId: number
    favoritedBy?: FavoriteProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderLineItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderLineItemInput, ProductUncheckedCreateWithoutOrderLineItemInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderLineItemInput = {
    update: XOR<ProductUpdateWithoutOrderLineItemInput, ProductUncheckedUpdateWithoutOrderLineItemInput>
    create: XOR<ProductCreateWithoutOrderLineItemInput, ProductUncheckedCreateWithoutOrderLineItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderLineItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderLineItemInput, ProductUncheckedUpdateWithoutOrderLineItemInput>
  }

  export type ProductUpdateWithoutOrderLineItemInput = {
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    favoritedBy?: FavoriteProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderLineItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    favoritedBy?: FavoriteProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OwnerLoginSessionCreateWithoutOwnerInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUncheckedCreateWithoutOwnerInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionCreateOrConnectWithoutOwnerInput = {
    where: OwnerLoginSessionWhereUniqueInput
    create: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput>
  }

  export type OwnerLoginSessionCreateManyOwnerInputEnvelope = {
    data: OwnerLoginSessionCreateManyOwnerInput | OwnerLoginSessionCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OwnerLoginSessionWhereUniqueInput
    update: XOR<OwnerLoginSessionUpdateWithoutOwnerInput, OwnerLoginSessionUncheckedUpdateWithoutOwnerInput>
    create: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput>
  }

  export type OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OwnerLoginSessionWhereUniqueInput
    data: XOR<OwnerLoginSessionUpdateWithoutOwnerInput, OwnerLoginSessionUncheckedUpdateWithoutOwnerInput>
  }

  export type OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput = {
    where: OwnerLoginSessionScalarWhereInput
    data: XOR<OwnerLoginSessionUpdateManyMutationInput, OwnerLoginSessionUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OwnerLoginSessionScalarWhereInput = {
    AND?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
    OR?: OwnerLoginSessionScalarWhereInput[]
    NOT?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
    id?: StringFilter<"OwnerLoginSession"> | string
    ownerId?: StringFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableFilter<"OwnerLoginSession"> | string | null
  }

  export type MessageDeliveryCreateWithoutSubscriptionInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    message: BroadcastMessageCreateNestedOneWithoutDeliveriesInput
  }

  export type MessageDeliveryUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    messageId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryCreateOrConnectWithoutSubscriptionInput = {
    where: MessageDeliveryWhereUniqueInput
    create: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput>
  }

  export type MessageDeliveryCreateManySubscriptionInputEnvelope = {
    data: MessageDeliveryCreateManySubscriptionInput | MessageDeliveryCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutSubscriptionsInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    favorites?: FavoriteProductCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    telegramId?: bigint | number | null
    languageCode?: string | null
    firstName: string
    lastName: string
    country: string
    phoneNumber: string
    email?: string | null
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationCode?: string | null
    marketingConsent?: boolean
    lastBirthdayGreetingSent?: Date | string | null
    favorites?: FavoriteProductUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSubscriptionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
  }

  export type MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: MessageDeliveryWhereUniqueInput
    update: XOR<MessageDeliveryUpdateWithoutSubscriptionInput, MessageDeliveryUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput>
  }

  export type MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: MessageDeliveryWhereUniqueInput
    data: XOR<MessageDeliveryUpdateWithoutSubscriptionInput, MessageDeliveryUncheckedUpdateWithoutSubscriptionInput>
  }

  export type MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput = {
    where: MessageDeliveryScalarWhereInput
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type MessageDeliveryScalarWhereInput = {
    AND?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
    OR?: MessageDeliveryScalarWhereInput[]
    NOT?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
    id?: StringFilter<"MessageDelivery"> | string
    messageId?: StringFilter<"MessageDelivery"> | string
    subscriptionId?: StringFilter<"MessageDelivery"> | string
    phoneNumber?: StringFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"MessageDelivery"> | Date | string
  }

  export type CustomerUpsertWithoutSubscriptionsInput = {
    update: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CustomerUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: FavoriteProductUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    lastBirthdayGreetingSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: FavoriteProductUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MessageDeliveryCreateWithoutMessageInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: MessageSubscriptionCreateNestedOneWithoutDeliveriesInput
  }

  export type MessageDeliveryUncheckedCreateWithoutMessageInput = {
    id?: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryCreateOrConnectWithoutMessageInput = {
    where: MessageDeliveryWhereUniqueInput
    create: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput>
  }

  export type MessageDeliveryCreateManyMessageInputEnvelope = {
    data: MessageDeliveryCreateManyMessageInput | MessageDeliveryCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageDeliveryWhereUniqueInput
    update: XOR<MessageDeliveryUpdateWithoutMessageInput, MessageDeliveryUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput>
  }

  export type MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageDeliveryWhereUniqueInput
    data: XOR<MessageDeliveryUpdateWithoutMessageInput, MessageDeliveryUncheckedUpdateWithoutMessageInput>
  }

  export type MessageDeliveryUpdateManyWithWhereWithoutMessageInput = {
    where: MessageDeliveryScalarWhereInput
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyWithoutMessageInput>
  }

  export type BroadcastMessageCreateWithoutDeliveriesInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
  }

  export type BroadcastMessageUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
  }

  export type BroadcastMessageCreateOrConnectWithoutDeliveriesInput = {
    where: BroadcastMessageWhereUniqueInput
    create: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
  }

  export type MessageSubscriptionCreateWithoutDeliveriesInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
  }

  export type MessageSubscriptionUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    customerId: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageSubscriptionCreateOrConnectWithoutDeliveriesInput = {
    where: MessageSubscriptionWhereUniqueInput
    create: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
  }

  export type BroadcastMessageUpsertWithoutDeliveriesInput = {
    update: XOR<BroadcastMessageUpdateWithoutDeliveriesInput, BroadcastMessageUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
    where?: BroadcastMessageWhereInput
  }

  export type BroadcastMessageUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: BroadcastMessageWhereInput
    data: XOR<BroadcastMessageUpdateWithoutDeliveriesInput, BroadcastMessageUncheckedUpdateWithoutDeliveriesInput>
  }

  export type BroadcastMessageUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BroadcastMessageUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageSubscriptionUpsertWithoutDeliveriesInput = {
    update: XOR<MessageSubscriptionUpdateWithoutDeliveriesInput, MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
    where?: MessageSubscriptionWhereInput
  }

  export type MessageSubscriptionUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: MessageSubscriptionWhereInput
    data: XOR<MessageSubscriptionUpdateWithoutDeliveriesInput, MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput>
  }

  export type MessageSubscriptionUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateWithoutLoginSessionsInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type OwnerUncheckedCreateWithoutLoginSessionsInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type OwnerCreateOrConnectWithoutLoginSessionsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
  }

  export type OwnerUpsertWithoutLoginSessionsInput = {
    update: XOR<OwnerUpdateWithoutLoginSessionsInput, OwnerUncheckedUpdateWithoutLoginSessionsInput>
    create: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutLoginSessionsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutLoginSessionsInput, OwnerUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type OwnerUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OwnerUncheckedUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    favoritedBy?: FavoriteProductCreateNestedManyWithoutProductInput
    OrderLineItem?: OrderLineItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
    favoritedBy?: FavoriteProductUncheckedCreateNestedManyWithoutProductInput
    OrderLineItem?: OrderLineItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    name_ru?: StringFilter<"Product"> | string
    name_en?: StringFilter<"Product"> | string
    name_uk?: StringFilter<"Product"> | string
    name_nl?: StringFilter<"Product"> | string
    ingredients_ru?: StringNullableFilter<"Product"> | string | null
    ingredients_en?: StringNullableFilter<"Product"> | string | null
    ingredients_uk?: StringNullableFilter<"Product"> | string | null
    ingredients_nl?: StringNullableFilter<"Product"> | string | null
    isPopular?: BoolFilter<"Product"> | boolean
    isChefRecommendation?: BoolFilter<"Product"> | boolean
    isPromotion?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
  }

  export type FavoriteProductCreateManyProductInput = {
    id?: number
    customerId: string
    createdAt?: Date | string
  }

  export type OrderLineItemCreateManyProductInput = {
    id?: number
    orderId: number
    quantity: number
    price: number
  }

  export type FavoriteProductUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderLineItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderLineItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderLineItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type FavoriteProductCreateManyCustomerInput = {
    id?: number
    productId: number
    createdAt?: Date | string
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    totalPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type FavoriteProductUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type FavoriteProductUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteProductUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderLineItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderLineItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderLineItemCreateManyOrderInput = {
    id?: number
    productId: number
    quantity: number
    price: number
  }

  export type OrderLineItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderLineItemNestedInput
  }

  export type OrderLineItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderLineItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OwnerLoginSessionCreateManyOwnerInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageDeliveryCreateManySubscriptionInput = {
    id?: string
    messageId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: BroadcastMessageUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type MessageDeliveryUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryCreateManyMessageInput = {
    id?: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: MessageSubscriptionUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type MessageDeliveryUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    price: number
    imageUrl?: string | null
    name_ru: string
    name_en: string
    name_uk: string
    name_nl: string
    ingredients_ru?: string | null
    ingredients_en?: string | null
    ingredients_uk?: string | null
    ingredients_nl?: string | null
    isPopular?: boolean
    isChefRecommendation?: boolean
    isPromotion?: boolean
  }

  export type ProductUpdateWithoutCategoryInput = {
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    favoritedBy?: FavoriteProductUpdateManyWithoutProductNestedInput
    OrderLineItem?: OrderLineItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
    favoritedBy?: FavoriteProductUncheckedUpdateManyWithoutProductNestedInput
    OrderLineItem?: OrderLineItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_uk?: StringFieldUpdateOperationsInput | string
    name_nl?: StringFieldUpdateOperationsInput | string
    ingredients_ru?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_en?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_uk?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients_nl?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isChefRecommendation?: BoolFieldUpdateOperationsInput | boolean
    isPromotion?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}