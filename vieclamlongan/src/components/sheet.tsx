import { Icon } from "@iconify/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import { MenuItem } from "types";
import { Box, Sheet } from 'zmp-ui'
import { MenuSheet } from "./menuSheet";

type SheetProps = {
    sheetVisible: boolean;
    setSheetVisible: Dispatch<SetStateAction<boolean>>;
};

export const menus1: Record<string, MenuItem> = {
    "/gioi-thieu": {
        label: "Giới thiệu",
        icon: <Icon icon="iconoir:page" />,
        activeIcon: <Icon icon="iconoir:page" />
    },
    "/news": {
        label: "Tin tức",
        icon: <Icon icon="iconoir:page" />
    },
    "/dao-tao/1": {
        label: "Đào tạo",
        icon: <Icon icon="iconoir:page" />
    },
    "/danh-sach-bao-hiem/1": {
        label: "Bảo hiểm thất nghiệp",
        icon: <Icon icon="iconoir:page" />
    },
    "/viec-lam-nuoc-ngoai/1": {
        label: "Việc làm nước ngoài",
        icon: <Icon icon="iconoir:page" />
    },
    "/danh-sach-van-ban/1": {
        label: "Văn bản",
        icon: <Icon icon="iconoir:page" />
    },
}

export const menus2: Record<string, MenuItem> = {
    "/hoi-dap/1": {
        label: "Hỏi đáp",
        icon: <Icon icon="iconoir:page" />
    },
    "/lien-he/1": {
        label: "Liên hệ",
        icon: <Icon icon="iconoir:page" />
    },
}

export const SheetComponet: FC<SheetProps> = ({ sheetVisible, setSheetVisible }) => {

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