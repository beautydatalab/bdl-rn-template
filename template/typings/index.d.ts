/* eslint-disable @typescript-eslint/no-explicit-any */

type RetrieveAsyncFunc<
  T extends (...args: any[]) => any
> = ReturnType<T> extends Promise<infer U> ? U : unknown;
