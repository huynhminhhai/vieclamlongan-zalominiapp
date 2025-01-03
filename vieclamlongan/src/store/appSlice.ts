export interface AppSliceType {
    isHideBottomNavigation: boolean;
    toggleHideBottomNavigation: (isHidden: boolean) => void;
    sheetVisibleNavi: boolean;
    setSheetVisibleNavi: (isVisible: boolean) => void;
}

export const createAppSlice = (set: any): AppSliceType => ({
    isHideBottomNavigation: false,
    toggleHideBottomNavigation: (isHidden: boolean) =>
        set((state: AppSliceType) => ({
            ...state,
            isHideBottomNavigation: isHidden,
        })
    ),
    sheetVisibleNavi: false,
    setSheetVisibleNavi: (isVisible: boolean) => 
        set((state: AppSliceType) => ({
            ...state,
            sheetVisibleNavi: isVisible
        })
    ),

});