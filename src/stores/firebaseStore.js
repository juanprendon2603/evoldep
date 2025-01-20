import { create } from 'zustand';

const useFirebaseStore = create(set => ({
  texts: {},
  setTexts: texts => set({ texts }),
}));

export default useFirebaseStore;
