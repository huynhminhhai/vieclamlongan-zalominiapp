import React, { Dispatch, FC, SetStateAction } from "react";
import { MenuItem } from "types";
import { Box, Sheet } from 'zmp-ui'
import { MenuSheet } from "./menuSheet";
import icons from "../assets/icons";

type SheetProps = {
    sheetVisible: boolean;
    setSheetVisible: Dispatch<SetStateAction<boolean>>;
};

export const menus1: Record<string, MenuItem> = {
    "/about": {
        label: "Giới thiệu",
        icon: icons.aboutIcon
    },
    "/news": {
        label: "Tin tức",
        icon: icons.newsIcon
    },
    "/training-list": {
        label: "Đào tạo",
        icon: icons.trainingIcon
    },
    "/insurance-list": {
        label: "Bảo hiểm thất nghiệp",
        icon: icons.insuranceIcon
    },
    "/foreign-list": {
        label: "Việc làm nước ngoài",
        icon: icons.jobIcon
    },
    "/document-list": {
        label: "Văn bản",
        icon: icons.documentIcon
    },
}

export const menus2: Record<string, MenuItem> = {
    "/account": {
        label: "Tài khoản",
        icon: icons.accountIcon
    },
    "/qa": {
        label: "Hỏi đáp",
        icon: icons.qaIcon
    },
    "/contact": {
        label: "Liên hệ",
        icon: icons.contactIcon
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