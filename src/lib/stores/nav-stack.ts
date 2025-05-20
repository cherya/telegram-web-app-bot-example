import { writable } from 'svelte/store';

function createNavStack() {
  const { subscribe, update, set } = writable<string[]>([]);

  return {
    subscribe,
    push: (route: string) => update(stack => [...stack, route]),
    pop: () => update(stack => stack.slice(0, -1)),
    reset: () => set([]),
    getCurrent: () => {
      let current: string | undefined;
      subscribe(stack => {
        current = stack[stack.length - 1];
      })();
      return current;
    }
  };
}

export const navStack = createNavStack();
