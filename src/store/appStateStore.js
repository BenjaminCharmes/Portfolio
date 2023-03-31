import { atom } from 'jotai';

const appStateAtom = atom({
  theme: localStorage.getItem('theme') || 'light',
  language: localStorage.getItem('language') || 'english',
});

export default appStateAtom;
