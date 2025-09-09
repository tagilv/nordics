import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageStore {
  activeLanguage: string;
  setActiveLanguage: (lang: string) => void;
  _hasHydrated?: boolean;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      activeLanguage: "swedish",
      setActiveLanguage: (lang) => set({ activeLanguage: lang }),
    }),
    {
      name: "language-storage",
    }
  )
);
