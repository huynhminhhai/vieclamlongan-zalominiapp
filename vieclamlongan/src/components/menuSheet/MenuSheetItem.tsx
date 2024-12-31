import React, { FunctionComponent } from "react";
import { Box, Text, useNavigate } from "zmp-ui";
import { MenuSheetProps } from "./MenuSheet";

const MenuSheetItem: FunctionComponent<{ path: string } & MenuSheetProps> = props => {

    const { path, menu } = props

    const navigation = useNavigate()

    return (
        <Box
            key={path}
            p={2}
            px={3}
            className="border-[1px] rounded-lg"
            onClick={() => navigation(path)}
        >
            <div className="flex flex-col items-center">
                {menu[path].icon}
                <Text size="xSmall" bold className="text-center">{menu[path].label}</Text>
            </div>
        </Box>
    );
};

export default MenuSheetItem;