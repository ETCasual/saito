import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export type Result = number;

export type ResultState = {
  appearance: boolean;
  interest: boolean;
  personality: boolean;
  logistics: Result | null;
  design: Result | null;
  enforcement: Result | null;
  culinary: Result | null;
  graduate: Result | null;
  clear: () => void;
  setAnswered: (
    key: "appearance" | "interest" | "personality",
  ) => Promise<void>;
  setFirst: (
    key: keyof Omit<
      ResultState,
      | "clear"
      | "setFirst"
      | "setSecond"
      | "setThird"
      | "personality"
      | "interest"
      | "appearance"
      | "setAnswered"
    >,
  ) => Promise<void>;
  setSecond: (
    key: keyof Omit<
      ResultState,
      | "clear"
      | "setFirst"
      | "setSecond"
      | "setThird"
      | "personality"
      | "interest"
      | "appearance"
      | "setAnswered"
    >,
  ) => Promise<void>;
  setThird: (
    key: keyof Omit<
      ResultState,
      | "clear"
      | "setFirst"
      | "setSecond"
      | "setThird"
      | "personality"
      | "interest"
      | "appearance"
      | "setAnswered"
    >,
  ) => Promise<void>;
};

const createState: StateCreator<ResultState> = (set, get) => ({
  logistics: null,
  design: null,
  culinary: null,
  enforcement: null,
  appearance: false,
  interest: false,
  personality: false,
  graduate: null,
  clear: () =>
    set({
      logistics: null,
      design: null,
      culinary: null,
      enforcement: null,
      appearance: false,
      interest: false,
      personality: false,
    }),
  setAnswered: async (key) => {
    await new Promise<void>((resolve) => {
      set({
        [key]: true,
      });
      resolve();
    });
  },
  setFirst: async (key) => {
    await new Promise<void>((resolve) => {
      set({
        [key]: (get()[key] ?? 0) + 60,
      });
      resolve();
    });
  },
  setSecond: async (key) => {
    await new Promise<void>((resolve) => {
      set({
        [key]: (get()[key] ?? 0) + 25,
      });
      resolve();
    });
  },
  setThird: async (key) => {
    await new Promise<void>((resolve) => {
      set({
        [key]: (get()[key] ?? 0) + 15,
      });
      resolve();
    });
  },
});

export const useResult = create(persist(createState, { name: "saito-result" }));
