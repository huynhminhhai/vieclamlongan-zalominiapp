import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Section } from "components/section";
import { useSearchParams } from "react-router-dom";
import VideoList from "./VideoList";
import { Icon } from "@iconify/react";

const VideoDetailPage: React.FunctionComponent = () => {

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    console.log(id)

    const iframe = '<iframe width="711" height="500" src="https://www.youtube.com/embed/dYAbSh-X2d4" title="CÁC NGHỀ THƯỜNG XUYÊN ĐƯỢC ĐÀO TẠO TẠI TRUNG TÂM DỊCH VỤ VIỆC LÀM LONG AN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
            <Header title="Chi tiết video" />
            <Box className="flex-1 overflow-auto">
                <Inquiry />
                <Divider />
                <Box p={4}>
                    <Box>
                        <Box mt={3}>
                            <ul className="pb-4 text-[#555555]">
                                <li className="flex items-start gap-3 mb-4">
                                    <Icon fontSize={28} icon='lets-icons:date-fill' />
                                    <div>
                                        <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Ngày tạo</Text>
                                        <Text size="xSmall">26/09/2024</Text>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 mb-4">
                                    <Icon fontSize={28} icon='bxs:layer' />
                                    <div>
                                        <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Chuyên Mục</Text>
                                        <Text size="xSmall">Video Đào tạo</Text>
                                    </div>
                                </li>
                            </ul>
                        </Box>
                        <Box className="iframe-wrap">
                            <div
                                dangerouslySetInnerHTML={{ __html: iframe }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Section title="Video khác" padding="title-only" seemore={true} seemoreUrl="/video-list">
                    <VideoList />
                </Section>
            </Box>
        </Page>
    );
};

export default VideoDetailPage;