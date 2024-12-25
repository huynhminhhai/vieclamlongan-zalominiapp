export interface AppSlice {
    isHideBottomNavigation: boolean;
    toggleHideBottomNavigation: (isHidden: boolean) => void;
}

export const createAppSlice = (set: any): AppSlice => ({
    isHideBottomNavigation: false,
    toggleHideBottomNavigation: (isHidden: boolean) =>
        set((state: AppSlice) => ({
            ...state,
            isHideBottomNavigation: isHidden,
        })),
});