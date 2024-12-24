import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { Text } from "zmp-ui";

const TotalNews: FunctionComponent<any> = props => {

    return (
        <>
            <div className="flex items-center gap-2 p-4 bg-[#f4f5f6] text-[#5d5d5d]">
                <Icon icon='fa6-solid:filter' />
                <Text size="small" className="leading-1" bold>12 bài viết</Text>
            </div>
        </>
    );
};

export default TotalNews;