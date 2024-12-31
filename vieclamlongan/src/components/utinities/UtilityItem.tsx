/* eslint-disable react/no-unused-prop-types */
import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { Box, Text, useNavigate } from "zmp-ui";

export interface UtinityItemProps {
    label?: string;
    iconSrc?: string;
    path?: string;
    onClick?: any;
    inDevelopment?: boolean;
    phoneNumber?: string;
    link?: string;
}

const UtinityItem: FunctionComponent<UtinityItemProps> = props => {
    const { iconSrc, label, path } = props;

    const navigate = useNavigate()

    return (
        <div
            className="flex flex-col items-center gap-3 rounded-lg"
            onClick={() => navigate(path || '/')}
        >
            {iconSrc && (
                <div className="rounded-2xl relative w-[100%] inline-flex justify-center items-center">
                    <img src={iconSrc} alt={label} className="h-[45px] w-auto" />
                </div>
            )}
            <Box>
                <h4 className="text-center font-medium text-[14px] px-4">{label}</h4>
            </Box>
        </div>
    );
};

export default UtinityItem;
