import React, { FunctionComponent } from "react";
import { Box, Text, useNavigate } from "zmp-ui";
import { MenuSheetProps } from "./MenuSheet";
import { useStore } from "store/store";

const MenuSheetItem: FunctionComponent<{ path: string } & MenuSheetProps> = props => {

    const { path, menu } = props

    const navigation = useNavigate()
    const setSheetVisibleNavi = useStore((state) => state.setSheetVisibleNavi)

    return (
        <Box
            key={path}
            p={2}
            px={3}
            className="border-[1px] rounded-lg"
            onClick={() => {
                navigation(path)
                setSheetVisibleNavi(false)
            }}
        >
            <div className="flex flex-col items-center">
                
                <div className="mb-1">
                    <img className="h-[32px] w-auto" src={menu[path].icon as string} alt={menu[path].label} />
                </div>
                <Text size="xSmall" bold className="text-center">{menu[path].label}</Text>
            </div>
        </Box>
    );
};

export default MenuSheetItem;