import { Icon } from "@iconify/react";
import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Text, useNavigate } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export interface SectionProps extends BoxProps {
  title: string;
  padding?: "all" | "none" | "title-only";
  seemore?: boolean;
  seemoreUrl?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  title,
  seemore = false,
  seemoreUrl = '/',
  padding = "all",
  ...props
}) => {

  const navigation = useNavigate()

  return (
    <div
      className={`bg-background ${padding === "all" ? "p-4 space-y-4" : ""} ${
        padding === "title-only" ? "py-4 space-y-4" : ""
      }`}
      {...props}
    >
      <div className={`${padding === "title-only" ? "px-4" : ""} flex items-center justify-between`}>
        <Text.Title>
          {title}
        </Text.Title>
        {
          seemore && 
          <div className="seemore text-[#005AFF] flex items-center gap-1">
            <Text
              bold
              onClick={() => navigation(seemoreUrl)}
            >Xem tất cả</Text>
          </div>
        }
      </div>
      {children}
    </div>
  );
};