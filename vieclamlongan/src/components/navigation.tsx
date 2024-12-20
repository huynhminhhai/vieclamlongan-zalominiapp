// import { useVirtualKeyboardVisible } from "hooks";
import { Icon } from "@iconify/react";
import React, { FC, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "types";
import { BottomNavigation } from "zmp-ui";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="material-symbols:home-rounded" />,
    activeIcon: <Icon icon="material-symbols:home-rounded" />
  },
  "/notification": {
    label: "Tuyển dụng",
    icon: <Icon icon="ic:round-business-center" />,
    activeIcon: <Icon icon="ic:round-business-center" />
  },
  "/cart": {
    label: "Tìm việc",
    icon: <Icon icon="icon-park-solid:people" />,
    activeIcon: <Icon icon="icon-park-solid:people" />
  },
  "/profile": {
    label: "Menu",
    icon: <Icon icon="healthicons:ui-menu-grid" />,
    activeIcon: <Icon icon="healthicons:ui-menu-grid" />
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category", "/result"];

export const Navigation: FC = () => {
//   const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

//   if (noBottomNav || keyboardVisible) {
//     return <></>;
//   }

  return (
    <BottomNavigation
      id="footer"
      activeKey={location.pathname}
      onChange={navigate}
      className="z-50"
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
        />
      ))}
    </BottomNavigation>
  );
};