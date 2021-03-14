import create from 'zustand';
import { combine } from 'zustand/middleware';

export const usePage = create(
  combine(
    {
      current: 0,
      total: 0,
    },
    (set) => ({
      setTotal: (total: number) => set((state) => ({ total })),
      next: () =>
        set((state) => ({
          current: Math.min(
            state.current + 2,
            2 * Math.floor((state.total - 1) / 2)
          ),
        })),
      prev: () => set((state) => ({ current: Math.max(state.current - 2, 0) })),
    })
  )
);
