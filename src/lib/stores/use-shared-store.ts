import { getContext, hasContext, setContext } from "svelte";
import { readable, writable } from "svelte/store";
import type { Readable, Writable } from "svelte/store";

// context for any type of store
export function useSharedStore<T>(
  name: string,
  fn: (value: T) => any,
  defaultValue: T
): any {
  if (hasContext(name)) {
    return getContext(name);
  }
  const _value = fn(defaultValue);
  setContext(name, _value);
  return _value;
}

// writable store context
export function useWritable<T>(name: string, value: T): Writable<T> {
  return useSharedStore(name, writable, value);
}

// readable store context
export function useReadable<T>(name: string, value: T): Readable<T> {
  return useSharedStore(name, readable, value);
}
