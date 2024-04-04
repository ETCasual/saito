import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export type Result = "A" | "B" | "C" | "D";

type ResultState = {
  interest?: Result | null;
  personality?: Result | null;
  appearance?: Result | null;
  clear: () => void;
  setResult: (
    key: keyof Omit<ResultState, "clear" | "setResult">,
    result: Result,
  ) => Promise<void>;
};

const createState: StateCreator<ResultState> = (set) => ({
  interest: null,
  personality: null,
  appearance: null,
  clear: () =>
    set({
      interest: null,
      personality: null,
      appearance: null,
    }),
  setResult: async (key, result) => {
    await new Promise<void>((resolve) => {
      set({
        [key]: result,
      });
      resolve();
    });
  },
});

export const useResult = create(persist(createState, { name: "saito-result" }));
