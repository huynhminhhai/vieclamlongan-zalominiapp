import { Icon } from "@iconify/react";
import React from "react";
import { Box, Button, useNavigate } from "zmp-ui";
import ViecLamItem from "./ViecLamItem";

type ViecLamSectionProps = {

}

const ViecLamSection: React.FC<ViecLamSectionProps> = () => {

    const navigate = useNavigate()

    return (
        <Box p={4} mt={4} pt={8} className="text-[#606468] border-t-[1px]">
            <h4 className="text-[20px] font-semibold mb-5">Việc làm đã tạo</h4>
            <Box>
                <div
                    className="flex items-center gap-1 mb-2"
                    onClick={() => navigate('/vieclam-edit')}
                >
                    <Icon fontSize={18} icon='formkit:add' />
                    <span className="text-[14px] font-medium leading-[1]">Thêm hồ sơ tuyển dụng mới</span>
                </div>
            </Box>
            <Box mt={6}>
                <ViecLamItem />
                <ViecLamItem />
            </Box>
            <Box>
                <div className="flex items-center justify-center mt-6">
                    <Button
                        onClick={() => navigate('/vieclam-list')}
                        size="medium"
                    >Xem tất cả</Button>
                </div>
            </Box>
        </Box>
    )
}

export default ViecLamSection