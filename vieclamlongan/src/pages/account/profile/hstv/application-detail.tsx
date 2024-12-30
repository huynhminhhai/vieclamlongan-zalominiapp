import React from "react";
import { Box, Header, Page} from "zmp-ui";

const ApplicationDetailPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin hồ sơ đã nộp" />
            <Box p={4} className="text-[#606468]">
                <Box pb={4} className="border-b-[1px]">
                    <h4 className="text-[18px] font-semibold mb-1">Cty Wondo Vina</h4>
                    <h5 className="text-[16px] font-semibold mb-3">may mặc</h5>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Sđt: </div>
                        <div className="flex-1">0907104804</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Mail: </div>
                        <div className="flex-1">Chưa có</div>
                    </div>
                    <div className="flex items-start gap-1 mb-1">
                        <div className="font-medium">Địa chỉ:</div>
                        <div className="flex-1">Âp Tân bình xã long bình điền huyện chợ gạo tiền giang</div>
                    </div>
                </Box>

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
                    <h4 className="text-[18px] font-semibold mb-2">Mô tả công việc</h4>
                    <div>
                        <p>Đọc và giải thích các mô hình thiết kế , tạo các phác thảo thô bằng phần mềm máy tính, kiểm tra kỹ kích thước và kiểu dáng của mẫu....</p>
                    </div>
                </Box>
                <Box py={4} className="border-b-[1px]">
                    <h4 className="text-[18px] font-semibold mb-2">Yêu cầu công việc</h4>
                    <div>
                        <p>Không có</p>
                    </div>
                </Box>
                <Box py={4} className="border-b-[1px]">
                    <h4 className="text-[18px] font-semibold mb-2">Yêu cầu kinh nghiệm</h4>
                    <div>
                        <p>Không có</p>
                    </div>
                </Box>
                <Box py={4}>
                    <h4 className="text-[18px] font-semibold mb-2">Địa điểm làm việc</h4>
                    <div>
                        <p>Ấp tân bình xã long bình điền huyện chợ gạo tiền giang</p>
                    </div>
                </Box>
            </Box>
        </Page>
    );
};

export default ApplicationDetailPage;