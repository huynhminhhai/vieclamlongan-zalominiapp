import React, { FC } from "react";
import { Box } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export const Divider4: FC<{ size?: number; className?: string } & BoxProps> = ({
  size = 2,
  ...props
}) => {
  return (
    <Box
      style={{
        minHeight: size,
        backgroundColor: "#f4f5f6",
      }}
      {...props}
    />
  );
};