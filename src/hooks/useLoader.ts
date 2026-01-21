import { createStore } from '../utils/functions';

interface States {
  isLoading: boolean;
}

interface Actions {
  setIsLoading: (isLoading: boolean) => void;
}

const initialState: States = {
  isLoading: false,
};

export const useLoader = createStore<States & Actions>()((set) => ({
  ...initialState,
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
}));
