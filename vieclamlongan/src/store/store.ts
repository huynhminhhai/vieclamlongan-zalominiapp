import { create } from 'zustand';
import { AppSliceType, createAppSlice } from './appSlice';

type StoreState = AppSliceType; // Kết hợp nhiều slice nếu cần

export const useStore = create<StoreState>()((set) => ({
  ...createAppSlice(set),
}));