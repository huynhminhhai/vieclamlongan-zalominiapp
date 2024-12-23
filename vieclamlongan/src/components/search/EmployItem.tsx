import { Icon } from "@iconify/react";
import { Divider4 } from "components/divider4";
import React, { FunctionComponent } from "react";
import { Box, Text, useNavigate } from "zmp-ui";

const EmploySearchItem: FunctionComponent<any> = props => {

    const navigate = useNavigate()

    return (
        <>
            <Box py={4}>
                <div
                    onClick={() => navigate('/detail-employ') }
                    className="flex items-start gap-3"
                >
                    <Box width={100} height={100}>
                        <img className="w-[100%] h-[100%] object-contain rounded-lg overflow-hidden" src="http://vieclamlongan.vn/uploads/images/Avata/noimage.jpg" alt="Nguyễn Văn A" />
                    </Box>
                    <Box className="flex-1">
                        <Text.Title className="mb-1">Nguyễn Văn A</Text.Title>
                        <div className="tag flex items-center text-[#ff7d55] bg-[#ffece6] w-fit py-[2px] px-2 rounded-md mb-2">
                            <Icon icon='jam:thunder-f' />
                            <Text size="xxSmall" className="leading-1" bold>CHUYÊN VIÊN NHÂN SỰ</Text>
                        </div>
                        <div className="flex items-start gap-1 mb-1 text-[#5d5d5d]">
                            <Icon className="mt-[1px]" icon='ph:bag-fill' />
                            <Text className="flex-1" size="xSmall">Chuyên viên HCNS Tổng Hợp</Text>
                        </div>
                        <div className="flex items-start gap-1 text-[#5d5d5d] mb-1">
                            <Icon icon='weui:location-filled' />
                            <Text className="flex-1" size="xSmall">Tỉnh Long An - Huyện Đức Hòa</Text>
                        </div>
                        <div>
                            <Text size="small" className="text-[#ff7d55]" bold>Từ 15-20 triệu</Text>
                        </div>
                    </Box>
                </div>
            </Box>
            <Divider4 />
        </>
    );
};

export default EmploySearchItem;