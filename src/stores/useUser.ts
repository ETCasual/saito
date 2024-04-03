import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  name: string | null;
  clear: () => Promise<void>;
  setUser: (name: string) => Promise<void>;
};

const createState: StateCreator<UserState> = (set) => ({
  name: null,
  clear: async () =>
    await new Promise((resolve) => {
      set({
        name: null,
      });
      resolve();
    }),
  setUser: async (state) => {
    await new Promise<void>((resolve) => {
      set({ name: state });
      resolve();
    });
  },
});

export const useUser = create(persist(createState, { name: "saito-user" }));
