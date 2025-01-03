import React from "react";
import { Box, Header, Page} from "zmp-ui";

const ApplicationDNDetailPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin hồ sơ đã nộp" />
            <Box p={4} className="text-[#606468] text-[13px]">

                <Box py={4} className="border-b-[1px]">
                    <h4 className="text-[18px] font-semibold mb-2">Thông tin công việc</h4>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Tên công việc: </div>
                        <div className="flex-1">nhân viên phòng rập</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Vị trí công việc: </div>
                        <div className="flex-1">Nhân viên / Chuyên viên</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Hạn nộp: </div>
                        <div className="flex-1">28/02/2025</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Số lượng: </div>
                        <div className="flex-1">3</div>
                    </div>
                </Box>
                <Box py={4} className="border-b-[1px]">
                    <h4 className="text-[18px] font-semibold mb-2">Thông tin hồ sơ</h4>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Công việc: </div>
                        <div className="flex-1">Thu mua or Kho</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Ngày tạo: </div>
                        <div className="flex-1">23/12/2024</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Mức lương mong muốn: </div>
                        <div className="flex-1">Từ 10-15 triệu</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Trình độ văn hóa: </div>
                        <div className="flex-1">12/12</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Trình độ Ngoại ngữ: </div>
                        <div className="flex-1">Tiếng Trung</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Trình độ Tin học: </div>
                        <div className="flex-1">không có</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Trình độ Văn bằng: </div>
                        <div className="flex-1">Cử nhân</div>
                    </div>
                </Box>
                <Box py={4} className="border-b-[1px]">
                    <h4 className="text-[18px] font-semibold mb-2">Giới thiệu chung</h4>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Kinh nghiệm: </div>
                        <div className="flex-1">trên 4 năm</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Kỹ năng: </div>
                        <div className="flex-1">...</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Ưu điểm: </div>
                        <div className="flex-1">...</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Khuyết điểm: </div>
                        <div className="flex-1">...</div>
                    </div>
                </Box>
            </Box>
        </Page>
    );
};

export default ApplicationDNDetailPage;