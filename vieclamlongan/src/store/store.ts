import { create } from 'zustand';
import { AppSlice, createAppSlice } from './appSlice';

type StoreState = AppSlice; // Kết hợp nhiều slice nếu cần

export const useStore = create<StoreState>()((set) => ({
  ...createAppSlice(set),
}));