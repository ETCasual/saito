import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  name: string | null;
  clear: () => void;
  setUser: (name: string) => Promise<void>;
};

const createState: StateCreator<UserState> = (set) => ({
  name: null,
  clear: () =>
    set({
      name: null,
    }),
  setUser: async (state) => {
    await new Promise<void>((resolve) => {
      set({ name: state });
      resolve();
    });
  },
});

export const useUser = create(persist(createState, { name: "saito-user" }));
