import { type NextRouter } from "next/router";
import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  name: string | null;
  clear: () => Promise<void>;
  login: (lg: string, pw: string, router: NextRouter) => Promise<void>;
  loading: "loading" | "success" | "error";
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

const createState: StateCreator<UserState> = (set) => ({
  loading: "loading",
  name: null,
  _hasHydrated: false,
  setHasHydrated: (state) => {
    set({
      _hasHydrated: state,
    });
  },
  clear: async () =>
    await new Promise((resolve) => {
      set({
        name: null,
      });
      resolve();
    }),
  login: async (lg, pw, router) => {
    set({ loading: "loading" });
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username: lg, password: pw }),
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: { loggedIn: boolean; name: string } = await res.json();

    if (res.ok) {
      set({
        name: response.name,
        loading: "success",
      });
      void router.push("/home");
    } else {
      set({
        loading: "error",
      });
    }
  },
});

export const useUser = create(
  persist(createState, {
    name: "saito-user",
    onRehydrateStorage: () => (state) => {
      state?.setHasHydrated(true);
    },
  }),
);
