import { Icon } from "@iconify/react";
import { Divider4 } from "components/divider4";
import React, { FunctionComponent } from "react";
import { Box, Text, useNavigate } from "zmp-ui";

const JobSearchItem: FunctionComponent = () => {


    const navigate = useNavigate()

    return (
        <>
            <Box py={4}>
                <div className="flex items-start gap-3" onClick={() => navigate('/detail-job-70')}>
                    <Box width={100} height={100}>
                        <img className="w-[100%] h-[100%] object-contain rounded-lg overflow-hidden" src="http://vieclamlongan.vn/uploads/images/2024-10/20241030151837_Logo%20Ofarm.jpg" alt="Giám đốc" />
                    </Box>
                    <Box className="flex-1">
                        <Text.Title className="mb-1">Giám đốc</Text.Title>
                        <div className="tag flex items-center text-[#ff7d55] bg-[#ffece6] w-fit py-[2px] px-2 rounded-md mb-2">
                            <Icon icon='jam:thunder-f' />
                            <Text size="xxSmall" className="leading-1" bold>Tuyển Dụng Tổng giám đốc</Text>
                        </div>
                        <div className="flex items-start gap-1 mb-1 text-[#5d5d5d]">
                            <Icon icon='mage:building-b-fill' />
                            <Text className="flex-1" size="xSmall">Cong ty TNHH SX & TM Foods O'Farm</Text>
                        </div>
                        <div className="flex items-start gap-1 text-[#5d5d5d]">
                            <Icon className="mt-[1px]" icon='weui:location-filled' />
                            <Text className="flex-1" size="xSmall">Nhà xưởng E1, lô H, KCN Tân Kim, KP Tân Phước, TT Cần Giuộc</Text>
                        </div>
                    </Box>
                </div>
            </Box>
            <Divider4 />
        </>
    );
};

export default JobSearchItem;