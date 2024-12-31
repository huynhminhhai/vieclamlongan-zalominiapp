import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { OtherList } from "components/others";
import { Divider } from "components/divider";
import { Section } from "components/section";
import { Inquiry } from "pages/index/inquiry";
import { Icon } from "@iconify/react";
import PdfViewer from "components/pdf";

const DocumentDetailPage: React.FunctionComponent = () => {

    return (
        <Box pb={10} className="bg-white">
            {/* <OtherDetailPage title="Chi tiết văn bản" /> */}
            <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
                <Header title="Chi tiết văn bản" />
                <Box className="flex-1 overflow-auto">
                    <Inquiry />
                    <Divider />
                    <Box p={4} py={8}>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-[30px] w-[5px] bg-red-500 block"></div>
                            <h3 className="text-[18px] leading-[1] font-medium">Văn bản</h3>
                        </div>
                        <h2 className="text-[20px] leading-6 font-medium mb-2">
                            HƯỚNG DẪN NGƯỜI SỬ DỤNG LAO ĐỘNG THAM GIA PHIÊN GIAO DỊCH VIỆC LÀM TRỰC TUYẾN
                        </h2>
                        <ul className="text-[#555555] mt-6">
                            <li className="flex items-start gap-3 mb-4">
                                <Icon fontSize={28} icon='icon-park-solid:people' />
                                <div>
                                    <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Tác giả</Text>
                                    <Text size="xSmall">Trung tâm DVVL Long An</Text>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 mb-4">
                                <Icon fontSize={28} icon='lets-icons:date-fill' />
                                <div>
                                    <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Ngày tạo</Text>
                                    <Text size="xSmall">26/12/2024</Text>
                                </div>
                            </li>
                        </ul>
                        <Box className="news-detail max-h-[610px] overflow-hidden" mt={6}>
                            <PdfViewer pdfUrl='http://quantri.vieclamlongan.vn/uploads/20241028154549_252 TB-TTDVVL.pdf' />
                        </Box>

                    </Box>
                </Box>
            </Page>
            <Divider />
            <Section title="Văn bản khác" padding="title-only" seemore={true} seemoreUrl="/document-list">
                <OtherList urlDetail="/document-detail" />
            </Section>
        </Box>
    )
}

export default DocumentDetailPage;