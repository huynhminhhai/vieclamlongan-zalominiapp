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
    "/about": {
        label: "Giới thiệu",
        icon: <Icon icon="mingcute:information-line" />
    },
    "/news": {
        label: "Tin tức",
        icon: <Icon icon="fluent:news-24-regular" />
    },
    "/training-list": {
        label: "Đào tạo",
        icon: <Icon icon="material-symbols-light:model-training" />
    },
    "/insurance-list": {
        label: "Bảo hiểm thất nghiệp",
        icon: <Icon icon="material-symbols-light:news-outline" />
    },
    "/foreign-list": {
        label: "Việc làm nước ngoài",
        icon: <Icon icon="material-symbols-light:news-outline" />
    },
    "/document-list": {
        label: "Văn bản",
        icon: <Icon icon="material-symbols-light:news-outline" />
    },
}

export const menus2: Record<string, MenuItem> = {
    "/account": {
        label: "Tài khoản",
        icon: <Icon icon="clarity:user-line" />
    },
    "/hoi-dap/1": {
        label: "Hỏi đáp",
        icon: <Icon icon="stash:question" />
    },
    "/lien-he/1": {
        label: "Liên hệ",
        icon: <Icon icon="hugeicons:contact-02" />
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