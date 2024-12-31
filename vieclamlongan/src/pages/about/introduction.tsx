import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import zmp from 'zmp-sdk';

const IntroductionPage: React.FunctionComponent = () => {

    const handleWebsiteClick = (sourceUrl) => {
        zmp.openWebview({
          url: sourceUrl
        });
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Giới thiệu chung" />
            <Box p={4}>
                <Text.Title className="mb-5 text-center px-2">TRUNG TÂM DỊCH VỤ VIỆC LÀM LONG AN</Text.Title>
                <Text size="xLarge" className="text-[#80d0c7] mb-2" bold>Giới thiệu chung</Text>
                <Box className="about-detail">
                    <Text>
                        Trung tâm dịch vụ việc làm Long An là đơn vị sự nghiệp thuộc Sở Lao động – Thương binh và Xã hội Long An
                    </Text>
                    <ul>
                        <li>
                            - Địa chỉ: Số 78, QL1A, Kp6, TT Bến Lức, Bến Lức, Long An
                        </li>
                        <li>
                            - Điện thoại:
                        </li>
                        <li>
                            - Website: <span onClick={() => handleWebsiteClick('http://vieclamlongan.vn')} className="text-[#80d0c7]">http://vieclamlongan.vn</span>
                        </li>
                        <li>
                            - Email: vieclam@vieclamlongan.vn
                        </li>
                    </ul>
                    <Text>
                        Trung tâm Dịch vụ việc làm Long An có 4 chi nhánh trực thuộc:
                    </Text>
                    <ul>
                        <li>
                            1. Chi nhánh Dịch vụ việc làm khu vực Tân An: Số 98, phường 2, Tp Tân An, Long An
                        </li>
                        <li>
                            2. Chi nhánh Dịch vụ việc làm khu vực Đức Hòa: Số 180A, đường 3/2, TT Hậu Nghĩa, Đức Hòa, Long An
                        </li>
                        <li>
                            3. Chi nhánh Dịch vụ việc làm khu vực Cần Giuộc: Số 96, Tỉnh lộ 835A, Kp Hòa Thuận 1, thị trấn Cần Giuộc, Cần Giuộc, Long An
                        </li>
                        <li>
                            4. Chi nhánh Dịch vụ việc làm khu vực Kiến Tường: Quốc lộ 62, phường 3, thị xã Kiến Tường, Long An
                        </li>
                    </ul>
                    <Text>
                        * Nhiệm vụ chính:
                    </Text>
                    <ul>
                        <li>
                            1. Hoạt động tư vấn.
                        </li>
                        <li>
                            2. Giới thiệu việc làm cho người lao động.
                        </li>
                        <li>
                            3. Cung ứng và tuyển lao động theo yêu cầu của người sử dụng lao động
                        </li>
                        <li>
                            4. Thu thập và cung cấp thông tin thị trường lao động.
                        </li>
                        <li>
                            5. Phân tích và dự báo thị trường lao động.
                        </li>
                        <li>
                            6. Thực hiện chính sách bảo hiểm thất nghiệp theo quy định của Luật Việc làm.
                        </li>
                        <li>
                            7. Đào tạo kỹ năng tham gia phỏng vấn, tìm kiếm việc làm và các kỹ năng làm việc khác; giáo dục nghề nghiệp theo quy định của pháp luật.
                        </li>
                        <li>
                            8. Thực hiện các chương trình, dự án về việc làm.
                        </li>
                    </ul>
                </Box>
            </Box>
        </Page>
    );
};

export default IntroductionPage;