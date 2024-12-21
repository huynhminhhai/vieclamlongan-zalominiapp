// import { useVirtualKeyboardVisible } from "hooks";
import { Icon } from "@iconify/react";
import React, { FC, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "types";
import { BottomNavigation } from "zmp-ui";
import { SheetComponet } from "./sheet";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="material-symbols:home-rounded" />,
    activeIcon: <Icon icon="material-symbols:home-rounded" />
  },
  "/tuyendung": {
    label: "Tuyển dụng",
    icon: <Icon icon="ic:round-business-center" />,
    activeIcon: <Icon icon="ic:round-business-center" />
  },
  "/ho-so-tim-viec/1": {
    label: "Tìm việc",
    icon: <Icon icon="icon-park-solid:people" />,
    activeIcon: <Icon icon="icon-park-solid:people" />
  }
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category", "/result"];

export const Navigation: FC = () => {
  //   const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  const [sheetVisible, setSheetVisible] = useState(false);

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  //   if (noBottomNav || keyboardVisible) {
  //     return <></>;
  //   }

  return (
    <>
      <BottomNavigation
        id="footer"
        activeKey={location.pathname}
        className="z-50"
      >
        {Object.keys(tabs).map((path: TabKeys) => (
          <BottomNavigation.Item
            key={path}
            label={tabs[path].label}
            icon={tabs[path].icon}
            activeIcon={tabs[path].activeIcon}
            onClick={() => navigate(path)}
          />
        ))}
        <BottomNavigation.Item
            key={'menu'}
            label={'Menu'}
            icon={<Icon icon="healthicons:ui-menu-grid" />}
            activeIcon={<Icon icon="healthicons:ui-menu-grid" />}
            onClick={(e) => {
              e.preventDefault()
              setSheetVisible(!sheetVisible)
            }}
          />
      </BottomNavigation >
      <SheetComponet sheetVisible={sheetVisible} setSheetVisible={setSheetVisible} />
    </>
  );
};