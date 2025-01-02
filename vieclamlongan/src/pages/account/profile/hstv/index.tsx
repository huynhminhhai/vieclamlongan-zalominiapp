import React from "react";
import { Box, Button, Header, Page, useNavigate } from "zmp-ui";
import ApplicationItem from "./ApplyItem";

type ItemCustomProps = {
    label: string;
    value: string;
}

const ItemCustom: React.FC<ItemCustomProps> = ({label, value=""}) => {
    return (
        <div className="flex items-center border-b-[1px] py-2">
            <div className="w-[100%]">{label}</div>
            <div className="w-[100%]">{value}</div>
        </div>
    )
}

const HstvPage: React.FunctionComponent = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin hồ sơ tìm việc" />
            <Box p={4} className="text-[#606468]">
                <Box>
                    <h4 className="text-[18px] font-semibold mb-5">Thông tin hồ sơ tìm việc</h4>
                    <Box>
                        <ItemCustom label="Vị trí công việc" value="Sinh viên / Thực tập sinh" />
                        <ItemCustom label="Tên công việc" value="Thiết kế" />
                        <ItemCustom label="Ngành nghề" value="THIẾT KẾ 2D" />
                        <ItemCustom label="Mức lương mong muốn" value="Từ 5-7 triệu" />
                        <ItemCustom label="Trình độ văn hóa" value="12/12" />
                        <ItemCustom label="Trình độ ngoại ngữ" value="TOEIC" />
                        <ItemCustom label="Trình độ tin học" value="Tin học căn bản" />
                        <ItemCustom label="Kinh nghiệm làm việc" value="không có" />
                        <ItemCustom label="Kỹ năng" value="không có" />
                        <ItemCustom label="Ưu điểm" value="" />
                        <ItemCustom label="Khuyết điểm" value="" />
                    </Box>
                    <div className="flex items-center justify-center mt-6">
                        <Button
                            onClick={() => navigate('/hstv-edit')}
                            size="medium"
                        >Cập nhật hồ sơ</Button>
                    </div>
                </Box>
                <Box>
                    <h4 className="text-[18px] font-semibold mb-5 mt-8">Hồ sơ đã nộp</h4>
                    <div className="flex flex-col gap-3">
                        <ApplicationItem />
                        <ApplicationItem />
                        <div className="flex items-center justify-center mt-6">
                        <Button
                            onClick={() => navigate('/hstv-list')}
                            size="medium"
                        >Xem tất cả</Button>
                        </div>
                    </div>
                </Box>
            </Box>
        </Page>
    );
};

export default HstvPage;