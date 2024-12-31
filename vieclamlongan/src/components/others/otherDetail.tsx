import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Icon } from "@iconify/react";
import { Section } from "components/section";
import { NewsList } from "components/news";
import { NEWS_LIST } from "constants";
import { useSearchParams } from "react-router-dom";

type OtherDetailProps = {
    title: string,

}


const OtherDetailPage: React.FunctionComponent<OtherDetailProps> = props => {

    const { title } = props

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
                    <ul className="text-[#555555] mt-6">
                        <li className="flex items-start gap-3 mb-4">
                            <Icon fontSize={28} icon='icon-park-solid:people' />
                            <div>
                                <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Tác giả</Text>
                                <Text size="xSmall">Phong Dao Tao va Gioi thieu viec lam</Text>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 mb-4">
                            <Icon fontSize={28} icon='lets-icons:date-fill' />
                            <div>
                                <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Ngày tạo</Text>
                                <Text size="xSmall">26/12/2024</Text>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon fontSize={28} icon='mdi:eye' />
                            <div>
                                <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Lượt xem</Text>
                                <Text size="xSmall">12 lượt xem</Text>
                            </div>
                        </li>
                    </ul>
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