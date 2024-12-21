import React, { FunctionComponent } from "react";
import { MenuItem } from "types";
import { TabKeys } from "components/navigation";
import MenuSheetItem from "./MenuSheetItem";

export type MenuSheetProps = {
    menu: Record<string, MenuItem>
}

const MenuSheet: FunctionComponent<MenuSheetProps> = props => {

    const { menu } = props

    return (
        <div className="grid grid-cols-3 gap-3">
            {
                Object.keys(menu).map((path: TabKeys) => (
                    <MenuSheetItem key={path} path={path} menu={menu} />
                ))
            }
        </div>
    )
};

export default MenuSheet