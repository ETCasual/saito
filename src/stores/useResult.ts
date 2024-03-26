import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type Result = "A" | "B" | "C" | "D";

type ResultState = {
  interest?: Result | null;
  responsibilty?: Result | null;
  work_life?: Result | null;
  appearance?: Result | null;
  accountability?: Result | null;
  clear: () => void;
  setResult: (
    key: keyof Omit<ResultState, "clear" | "setResult">,
    result: Result,
  ) => Promise<void>;
};

const createState: StateCreator<ResultState> = (set) => ({
  interest: null,
  responsibilty: null,
  work_life: null,
  appearance: null,
  accountability: null,
  clear: () =>
    set({
      interest: null,
      responsibilty: null,
      work_life: null,
      appearance: null,
      accountability: null,
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
