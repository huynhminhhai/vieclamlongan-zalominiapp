import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { Icon } from "@iconify/react";
import { Section } from "components/section";
import { NewsList } from "components/news";
import { NEWS_LIST } from "constants";
import { useSearchParams } from "react-router-dom";

type OtherDetailProps = {
    title: string,

}


const OtherDetailPage: React.FunctionComponent<OtherDetailProps> = props => {

    const {title} = props

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    console.log(id)

    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
            <Header title={title} />
            <Box className="flex-1 overflow-auto">
                <Inquiry />
                <Divider />
                <Box p={4} py={8}>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-[30px] w-[5px] bg-red-500 block"></div>
                        <h3 className="text-[18px] leading-[1] font-medium">Đào tạo thường xuyên</h3>
                    </div>
                    <h2 className="text-[20px] leading-6 font-medium mb-2">
                        Tuyển chọn lao động đi làm việc tại Autralia trong ngành nông nghiệp (VLMA)
                    </h2>
                    <div className="text-[14px] flex items-center gap-1">
                        <Icon icon='mynaui:user-solid' />
                        Phòng Đào tạo - giới thiệu việc làm
                    </div>
                    <div className="text-[14px] flex items-center gap-1">
                        <Icon icon='mingcute:time-fill' />
                        20/12/2024
                    </div>
                    <div className="text-[14px] flex items-center gap-1">
                        <Icon icon='mdi:eye' />
                        12 lượt xem
                    </div>
                    <Box className="news-detail" mt={6}>
                        <p>
                            <img src="http://quantri.vieclamlongan.vn/images/20241205095918_423%20TB-TTDVVL.jpg" alt="" />
                        </p>
                    </Box>

                </Box>
            </Box>
        </Page>
    );
};

export default OtherDetailPage;