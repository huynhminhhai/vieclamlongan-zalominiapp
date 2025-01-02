import icons from "assets/icons";
import ButtonCV from "components/buttonCv";
import React from "react";
import { Box, Header, Page, Swiper, Text } from "zmp-ui";
import zmp from 'zmp-sdk';

const CVPage: React.FunctionComponent = () => {

    const handleWebsiteClick = (sourceUrl) => {
        // zmp.openWebview({
        //   url: sourceUrl
        // });

        window.open(sourceUrl, "_blank");
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Tạo cv" />
            <Box p={4}>
                <Box>
                    <h2 className="text-[18px] leading-[26px] font-bold text-center mb-2">
                        Tạo ấn tượng với nhà tuyển dụng cùng
                        Việc làm Bến Lức CV cá nhân
                    </h2>
                    <Text size="xSmall" className="text-center mb-4">
                        Tạo mẫu CV nhanh chóng và miễn phí, để nhà tuyển dụng phải
                        "Wow!" ngay khi nhìn thấy CV của bạn.
                    </Text>
                    <div className="flex items-center justify-center">
                        <p className="text-[13px] leading-[20px] text-center">Truy cập website: <em>vieclamlongan.vn/danh-sach-cv</em> để thực hiện chức năng <span className="font-semibold">Tạo cv</span>.</p>
                    </div>
                    <Box mt={6} className="border-[1px] rounded-xl">
                        <Swiper autoplay duration={8000} loop >
                            <Swiper.Slide>
                                <Box>
                                    <img src={icons.templateCV1} alt='template cv' />
                                </Box>
                            </Swiper.Slide>
                            <Swiper.Slide>
                                <Box>
                                    <img src={icons.templateCV2} alt='template cv' />
                                </Box>
                            </Swiper.Slide>
                            <Swiper.Slide>
                                <Box>
                                    <img src={icons.templateCV3} alt='template cv' />
                                </Box>
                            </Swiper.Slide>
                        </Swiper>
                    </Box>
                </Box>

                <Box mt={10}>
                    <h3 className="font-bold text-[18px] leading-[26px] text-center mb-2">Thiết kế tự do</h3>
                    <Text size="xSmall" className="text-center mb-4">
                        Với 5 phút sáng tạo hoặc sử dụng các mẫu CV đa dạng màu sắc, thiết kế, phù hợp với nhiều vị trí và ngành nghề là bạn đã có thể tạo ra một mẫu CV ưng ý cho riêng mình.
                    </Text>
                    <div className="flex items-center justify-center">
                        <ButtonCV onClick={() => console.log(123)} label="Xem các mẫu CV" />
                    </div>
                    <Box mt={6}>
                        <img src={icons.freeDesign} alt="Thiết kế tự do" />
                    </Box>
                </Box>

                <Box mt={10}>
                    <h3 className="font-bold text-[18px] leading-[26px] text-center mb-2">Tải xuống được loại bỏ logo
                        thương hiệu miễn phí</h3>
                    <Text size="xSmall" className="text-center mb-4">
                        Chỉ 1 cú click chuột, bạn có thể tải xuống mẫu CV hoàn hảo của mình ở định dạng PDF mà không có watermark.
                    </Text>
                    <Box mt={6}>
                        <img className="w-[50%] mx-auto" src={icons.pdfDownload} alt="Tải xuống được loại bỏ logo
                            thương hiệu miễn phí" />
                    </Box>
                </Box>

                <Box mt={10}>
                    <h3 className="font-bold text-[18px] leading-[26px] text-center mb-2">Ứng tuyển mọi nơi</h3>
                    <Text size="xSmall" className="text-center mb-4">
                        Với việc hoàn thành mẫu CV chuyên nghiệp tại WowCV, bạn có thể ứng tuyển ở bất cứ nơi nào, bất cứ lúc nào, và tạo ấn tượng với mọi nhà tuyển dụng.
                    </Text>
                    <div className="flex items-center justify-center">
                        <p className="text-[13px] leading-[20px] text-center">Truy cập website: <em>vieclamlongan.vn/danh-sach-cv</em> để thực hiện chức năng <span className="font-semibold">Tạo cv</span>.</p>
                    </div>
                    <Box mt={6}>
                        <img src={icons.applyAnywhere} alt="Ứng tuyển mọi nơi" />
                    </Box>
                </Box>

                <Box mt={10}>
                    <h3 className="font-bold text-[18px] leading-[26px] text-center mb-4">03 bước tạo ngay CV</h3>
                    <Box>
                        <Text size="small" className="mb-2">
                            <span className="font-bold">
                                01 — Chọn mẫu CV phù hợp
                            </span>
                            <p className="mt-1">
                                WowCV có rất nhiều mẫu thiết kế đặc sắc. Hãy chọn mẫu CV mà bạn ưng ý và phù hợp với bạn nhất nhé.
                            </p>
                        </Text>
                        <Text size="small" className="mb-2">
                            <span className="font-bold">
                                02 — Cập nhật thông tin chi tiết
                            </span>
                            <p className="mt-1">
                                WowCV sẽ tự động điền thông tin từ hồ sơ của bạn trên VietnamWorks. Nếu thông tin có thay đổi, bạn cũng có thể cập nhật ngay tại WowCV.
                            </p>
                        </Text>
                        <Text size="small" className="mb-2">
                            <span className="font-bold">
                                03 — Tải CV và ứng tuyển
                            </span>
                            <p className="mt-1">
                                Sau khi hoàn thành, hãy lưu ngay WowCV trong hồ sơ tìm việc của bạn trên VietnamWorks, hoặc tải xuống miễn phí dưới dạng PDF không có watermark.
                            </p>
                        </Text>
                    </Box>
                    <Box mt={6}>
                        <img src={icons.threeSteps} alt="03 bước tạo ngay CV" />
                    </Box>
                </Box>
            </Box>
        </Page>
    );
};

export default CVPage;