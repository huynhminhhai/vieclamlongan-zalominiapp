import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { Text } from "zmp-ui";

const TotalResult: FunctionComponent<any> = props => {

    return (
        <>
            <div className="flex items-center gap-2 p-4 bg-[#f4f5f6] text-[#5d5d5d]">
                <Icon icon='fa6-solid:filter' />
                <Text size="small" className="leading-1" bold>2417 kết quả tìm kiếm</Text>
            </div>
        </>
    );
};

export default TotalResult;