import { Icon } from "@iconify/react";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { MenuItem } from "types";
import { Box, Sheet, Text, useNavigate } from 'zmp-ui'
import { TabKeys } from "./navigation";
import { MenuSheet } from "./menuSheet";

type SheetProps = {
    sheetVisible: boolean;
    setSheetVisible: Dispatch<SetStateAction<boolean>>;
};

export const menus1: Record<string, MenuItem> = {
    "/gioi-thieu": {
        label: "Giới thiệu",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
    "/danh-sach-tin-tuc/1": {
        label: "Tin tức",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
    "/dao-tao/1": {
        label: "Đào tạo",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
    "/danh-sach-bao-hiem/1": {
        label: "Bảo hiểm thất nghiệp",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
    "/viec-lam-nuoc-ngoai/1": {
        label: "Việc làm nước ngoài",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
    "/danh-sach-van-ban/1": {
        label: "Văn bản",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
}

export const menus2: Record<string, MenuItem> = {
    "/hoi-dap/1": {
        label: "Hỏi đáp",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
    "/lien-he/1": {
        label: "Liên hệ",
        icon: <Icon icon="material-symbols:folder-outline" />,
        activeIcon: <Icon icon="material-symbols:folder-outline" />
    },
}

export const SheetComponet: FC<SheetProps> = ({ sheetVisible, setSheetVisible }) => {

    const navigation = useNavigate()

    return (
        <Sheet
            visible={sheetVisible}
            onClose={() => setSheetVisible(false)}
            autoHeight
            mask
            handler
            swipeToClose
            className="sheet-custom"
        >
            <Box p={4} pb={8} className="custom-bottom-sheet" flex flexDirection="column">
                <MenuSheet menu={menus1} />
                <hr className="my-6" />
                <MenuSheet menu={menus2} />
                <button
                    className="py-2 mt-6 w-[100%] border-[1px] font-medium rounded-2xl"
                    onClick={() => setSheetVisible(false)}
                >Đóng</button>
            </Box>
        </Sheet>
    )
}