/* eslint-disable react/no-unused-prop-types */
import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { Text } from "zmp-ui";

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
    const { iconSrc, label } = props;

    return (
        <div
            className="flex flex-col items-center gap-3"
            onClick={() => console.log(123)}
        >
            {iconSrc && (
                <div className="rounded-2xl bg-icon_bg relative w-[100%] h-[95px] inline-flex justify-center items-center">
                    <div className="inline-block">
                        <Icon className="w-[55px] h-auto text-[#818285]" icon={iconSrc} />
                    </div>
                </div>
            )}
            <Text className="text-center " size="small" bold>{label}</Text>
        </div>
    );
};

export default UtinityItem;
