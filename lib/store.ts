import { create } from "zustand";

interface LanguageStore {
  activeLanguage: string;
  setActiveLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  activeLanguage: "swedish",
  setActiveLanguage: (lang) => set({ activeLanguage: lang }),
}));
