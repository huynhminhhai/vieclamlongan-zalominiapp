import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import { Box, Button, useNavigate, useSnackbar } from "zmp-ui";
import ViecLamNd70Item from "./ViecLamNd70Item";

type ViecLamNd70SectionProps = {

}

const ViecLamNd70Section: React.FC<ViecLamNd70SectionProps> = () => {

    const navigate = useNavigate()
    const { openSnackbar } = useSnackbar();

    const [downloadList, setDownLoadList] = useState<string[]>([]);


    const handleDownloadNd70 = () => {
        if (downloadList.length <= 0) {
            openSnackbar({
                icon: true,
                text: "Vui lòng chọn ít nhất một mục để tải mẫu ND70",
                type: 'error',
                action: {
                    text: "Đóng",
                    close: true,
                },
            });
        } else {
            console.log('downloading....', downloadList)
        }
    }

    return (
        <Box p={4} className="text-[#606468]">
            <h4 className="text-[20px] font-semibold mb-5">Việc làm theo Nghị định 70/2023</h4>
            <Box>
                <div
                    className="flex items-center gap-1 mb-2"
                    onClick={() => navigate('/vieclam-nd70-edit')}
                >
                    <Icon fontSize={18} icon='formkit:add' />
                    <span className="text-[14px] font-medium leading-[1]">Thêm hồ sơ tuyển dụng mới</span>
                </div>

                <div
                    className="flex items-center gap-1"
                    onClick={() => handleDownloadNd70()}
                >
                    <Icon fontSize={18} icon='material-symbols:download' />
                    <span className="text-[14px] font-medium leading-[1]">Tải mẫu ND70</span>
                </div>
            </Box>
            <Box mt={6}>
                <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                <ViecLamNd70Item setDownLoadList={setDownLoadList} />
            </Box>
            <Box>
                <div className="flex items-center justify-center mt-6">
                    <Button
                        onClick={() => navigate('/vieclam-nd70-list')}
                        size="medium"
                    >Xem tất cả</Button>
                </div>
            </Box>
        </Box>
    )
}

export default ViecLamNd70Section