import { create } from "zustand";

interface CreatePropertyModalModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCreatePropertyModalStore =
  create<CreatePropertyModalModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => ({ isopen: false }),
  }));
