import { Icon } from "@iconify/react";
import { Divider4 } from "components/divider4";
import React, { FunctionComponent } from "react";
import { Box, Text, useNavigate } from "zmp-ui";

const JobItem: FunctionComponent<{detail: boolean }> = props => {

    const { detail } = props

    const navigate = useNavigate()

    return (
        <>
            <Box py={4}>
                <div className="flex items-start gap-3" onClick={() => navigate('/detail-job')}>
                    <Box width={100} height={100}>
                        <img className="w-[100%] h-[100%] object-contain rounded-lg overflow-hidden" src="http://vieclamlongan.vn/uploads/images/2024-12/20241218112759_LOOGO.jpg" alt="NV kinh doanh - chuyên thị trường quốc tế" />
                    </Box>
                    <Box className="flex-1">
                        <Text.Title
                            className="mb-1"
                            
                        >NV kinh doanh - chuyên thị trường quốc tế</Text.Title>
                        <Text
                            size="xxSmall"
                            bold
                            className="text-[#005AFF] mb-1"
                            onClick={() => console.log('detail comany')}
                        >CÔNG TY TNHH PRO ALLIANCE COSME</Text>
                        <Text className="text-[#5d5d5d]" bold size="xSmall">Trên 20 triệu</Text>
                        <div className="flex items-start gap-1 text-[#5d5d5d]">
                            <Icon className="mt-[1px]" icon='weui:location-filled' />
                            <Text className="flex-1" size="xSmall">Nhà xưởng E1, lô H, KCN Tân Kim, KP Tân Phước, TT Cần Giuộc</Text>
                        </div>
                        {
                            detail &&
                            <div className="flex items-start gap-1 text-[#5d5d5d]">
                                <Icon className="mt-[1px]" icon='mingcute:time-fill' />
                                <Text className="flex-1" size="xSmall">Hạn nộp: 28/02/2025</Text>
                            </div>
                        }
                    </Box>
                </div>
            </Box>
            <Divider4 />
        </>
    );
};

export default JobItem;