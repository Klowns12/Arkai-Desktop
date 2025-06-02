Sure, here's the contents for the file /arkai/arkai/src/stores/aiStore.ts:

import { create } from 'zustand';

interface AIState {
  prompt: string;
  response: string;
  loading: boolean;
  setPrompt: (prompt: string) => void;
  setResponse: (response: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useAIStore = create<AIState>((set) => ({
  prompt: '',
  response: '',
  loading: false,
  setPrompt: (prompt) => set({ prompt }),
  setResponse: (response) => set({ response }),
  setLoading: (loading) => set({ loading }),
}));