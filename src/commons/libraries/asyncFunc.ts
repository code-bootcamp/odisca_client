import type { FormEvent } from "react";

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };